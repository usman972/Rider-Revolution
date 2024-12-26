import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetSingleBike } from '../Functions/GetBike'
import BikeHeader from './BikeDetails/Header'
import QuestionsAccordion from './BikeDetails/QuestionAccordion'
import BikeData from './BikeDetails/BikeData'
const BikeDetailsPage = () => {
  const { id } = useParams() // Get the bike ID from the URL
  const [Bike, SetBike] = useState(null) // Initialize state as null
  const [Loading, SetLoading] = useState(true) // Track loading state
  const [Error, SetError] = useState(false) // Track error state

  const SingleBike = async () => {
    const BikeData = await GetSingleBike(id)
    if (BikeData) {
      SetBike(BikeData)
      SetLoading(false)
    } else {
      SetError(true)
      SetLoading(false)
    }
  }

  useEffect(() => {
    SingleBike()
  }, [id]) // Include id as a dependency in case it changes

  if (Loading) {
    return <p className="text-center text-gray-600">Loading...</p>
  }

  if (Error || !Bike) {
    return (
      <div className="text-center text-red-500">
        <p>Error fetching bike details. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen my-20">
      <BikeHeader
        flag={Bike.Used}
        _id={Bike._id}
        image={Bike.imageUrl}
        name={Bike.name}
        price={Bike.price}
        rating={Bike.rating}
      />
      {/* Add additional details here */}
      <BikeData bikeData={Bike} />
      <QuestionsAccordion questions={Bike.questions} />
    </div>
  )
}

export default BikeDetailsPage

import axios from 'axios'

export const GetSingleBike = async (id) => {
  try {
    const Response = await axios.get(
      `https://rider-rev-baclend.vercel.app/Api/Bike/GetSingleBike?ID=${id}`
    )
    if (Response.status === 200) {
      console.log('Single Bike:', Response.data.bike)
      return Response.data.bike
    }
  } catch (error) {
    console.error('ERROR GETTING SINGLE BIKE:', error.message)
  }
  return null // Return null if there's an error
}

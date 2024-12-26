import axios from 'axios'

export const FetchBikes = async () => {
  try {
    const response = await axios.get(
      'https://rider-rev-baclend.vercel.app/Api/Bike/GetAllBikes'
    )
    if (response.status === 200) {
      console.log('Fetched Bikes:', response.data.bikes)
      return response.data.bikes
    } else {
      console.error('Unexpected response status:', response.status)
      return []
    }
  } catch (error) {
    console.error('Error fetching the bikes:', error.message)
    return []
  }
}

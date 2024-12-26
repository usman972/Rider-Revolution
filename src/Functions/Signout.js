import axios from 'axios'

export const signoutUser = async () => {
  try {
    const response = await axios.post(
      'https://rider-rev-baclend.vercel.app/Api/User/Signout'
    )
    console.log('Signout Successful:', response.data.message)
    return response.data // { message: "Successfully signed out", success: true }
  } catch (error) {
    console.error(
      'Signout Failed:',
      error.response?.data?.message || error.message
    )
    throw new Error(
      error.response?.data?.message || 'Signout failed, please try again.'
    )
  }
}

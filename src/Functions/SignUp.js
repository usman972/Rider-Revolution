import axios from 'axios'

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(
      'https://rider-rev-baclend.vercel.app/Api/User/CreateUser',
      {
        Name: name,
        Email: email,
        password,
      }
    )
    console.log('Registration Successful:', response.data.message)
    return response.data.user // { message: "User registered successfully", user: { ...userData } }
  } catch (error) {
    console.error(
      'Registration Failed:',
      error.response?.data?.message || error.message
    )
    throw new Error(
      error.response?.data?.message || 'Registration failed, please try again.'
    )
  }
}

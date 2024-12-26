import axios from 'axios'

export const emptyCart = async (userId) => {
  try {
    const response = await axios.post(
      `https://rider-rev-baclend.vercel.app/Api/Cart/EmptyCart`,
      { userId }
    )
    if (response.status === 200) {
      console.log('Cart emptied successfully.')
      return true
    } else {
      console.error('Failed to empty the cart:', response.data)
      return false
    }
  } catch (error) {
    console.error('Error emptying the cart:', error)
    return false
  }
}

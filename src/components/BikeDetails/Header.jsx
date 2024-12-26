import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleFlag } from '../../../utils/Redux/Store/FlagSlice'
import { addBikeToCart } from '../../Functions/AddBikeToCart'
import AuthModal from '../Login'
import axios from 'axios'

const BikeHeader = ({ image, name, price, rating, _id, flag }) => {
  const User = useSelector((state) => state.Auth)
  const [quantity, setQuantity] = useState(1)
  const [bidAmount, setBidAmount] = useState('') // Add bidAmount state
  const CartFlag = useSelector((state) => state.Flag)
  const dispatch = useDispatch()

  const increaseQuantity = () => setQuantity(quantity + 1)
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1)

  // Add Bike to Cart
  const AddToCart = async () => {
    const success = await addBikeToCart(User.user._id, _id, quantity)
    if (success) {
      dispatch(ToggleFlag())
      console.log('Cart flag toggled:', CartFlag)
    }
  }

  // Create a Bid
  const createBid = async () => {
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      alert('Please enter a valid bid amount')
      return
    }

    try {
      const response = await axios.post(
        'https://rider-rev-baclend.vercel.app/Api/Bid/createBid', // Replace with your backend API endpoint for creating bids
        {
          bikeId: _id,
          userName: User.user.Name,
          userEmail: User.user.Email,
          bidAmount: bidAmount,
        }
      )

      if (response.data.message === 'Bid created successfully.') {
        alert('Your bid has been placed successfully!')
        setBidAmount('') // Reset bid amount after successful submission
      } else {
        alert('There was an issue placing your bid.')
      }
    } catch (error) {
      console.error('Error creating bid:', error)
      alert('An error occurred while placing your bid. Please try again later.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-contain" />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div>
            <p className="text-lg font-semibold text-green-600">{price}</p>
            <p className="text-sm text-gray-600">
              ⭐⭐⭐⭐⭐ ({rating} Rating)
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            {User.user ? (
              !flag ? (
                <>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                    onClick={AddToCart}
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 px-4 py-2"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button
                      className="bg-gray-200 px-4 py-2"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="rounded-lg bg-white text-black p-2 border-2 border-gray-400"
                    placeholder="Enter Your Bid"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)} // Bind input to bidAmount state
                  />
                  <button
                    className="bg-blue-500 text-white rounded-lg p-2"
                    onClick={createBid} // Call createBid function
                  >
                    Place Bid
                  </button>
                </div>
              )
            ) : (
              <AuthModal />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

BikeHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
}

export default BikeHeader

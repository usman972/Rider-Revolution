import { useEffect, useState } from 'react'
import { getCartByUserId } from '../Functions/GetCart'
import Cartitems from './Cart/CartItems'
import Checkout from './Cart/Checkout'
import { useSelector } from 'react-redux'

const CartSidebar = () => {
  const CartFlag = useSelector((state) => state.Flag)
  const [isOpen, setIsOpen] = useState(false)
  const [cartData, setCartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const User = useSelector((state) => state.Auth)

  const fetchCartData = async () => {
    try {
      setLoading(true)
      const data = await getCartByUserId(User.user._id)
      setCartData(data)
    } catch (err) {
      setError('Failed to fetch cart data.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCartData()
  }, [CartFlag])

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <>
      {/* Button to open the sidebar */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-black text-white p-3 rounded-full z-50 mx-3"
      >
        🛒({cartData?.totalProducts || 0})
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-[90-vh] overflow-y-auto bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <button onClick={() => setIsOpen(false)} className="text-red-500 m-4">
          Close
        </button>
        <h2 className="text-xl font-bold p-4">Your Cart</h2>

        {cartData?.bikes.length === 0 && cartData?.services.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 h-[50vh] overflow-y-auto">
            {/* Render bike items */}
            {cartData?.bikes.map((item) => (
              <Cartitems item={item} key={item?._id} />
            ))}
            {/* Render service items */}
            {cartData?.services.map((item) => (
              <Cartitems item={item} key={item?._id} isService />
            ))}
          </ul>
        )}
        <Checkout cartData={cartData} />
      </div>
      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}

export default CartSidebar

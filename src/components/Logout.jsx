import { useDispatch, useSelector } from 'react-redux'
import { signoutUser } from '../Functions/Signout'
import toast from 'react-hot-toast'
import { logout } from '../../utils/Redux/Store/LoginSlice'

function Logout() {
  const User = useSelector((state) => state.Auth)
  const Dispatch = useDispatch()
  const handleSignout = async () => {
    try {
      const response = await signoutUser()
      toast.success(response.message) // Notify the user of successful signout
      Dispatch(logout())
      localStorage.removeItem('user') // Remove user details from local storage
    } catch (error) {
      alert(error.message) // Notify the user of any errors
    }
  }

  return (
    <div className=" flex flex-col">
      <h1>{User?.user?.Name ? User?.user?.Name : ''}</h1>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleSignout}
      >
        Logout
      </button>
    </div>
  )
}

export default Logout

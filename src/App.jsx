import { CartProvider } from './components/CartContext'
import Home from './home/Home'
import About from './home/About'
import Contact from './home/Contact'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import FeaturedBikes from './components/FeaturedBikes'
import BikeDetailsPage from './components/Product'
import Navbar from './components/Navbar'
import OrderForm from './components/Order/UserDetails'
import PostOrder from './components/Order/PostOrder'
import { Provider } from 'react-redux'
import store from '../utils/Redux/Store/store'
import Main from './components/News/MainNews'
import ServicesPage from './components/Services'

function App() {
  return (
    <CartProvider>
      <Provider store={store}>
        <div className="dark:bg-slate-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/bike" element={<FeaturedBikes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news" element={<Main />} />
            <Route path="/bike/:id" element={<BikeDetailsPage />} />{' '}
            <Route path="/Order" element={<OrderForm />} />
            <Route path="/PostOrder/:id" element={<PostOrder />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/PostOrder" element={<PostOrder />} /> */}
            {/* Parameterized Route */}
          </Routes>
          <Toaster />
        </div>
        {/* <Footer /> */}
      </Provider>
    </CartProvider>
  )
}
export default App

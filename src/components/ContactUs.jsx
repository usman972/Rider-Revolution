import Form from './Form'

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex justify-evenly items-center">
        <div>
          <div className="w-34 h16 bg-gray-100 rounded p-6 m-6 hover:m-4 duration-200">
            <h2 className="font-semibold">Phone Number</h2>
            <p>+92-4567-890</p>
            <p>+92-2223-333</p>
          </div>
          <div className="w-34 h16 bg-gray-100 rounded p-6 m-6 hover:m-4 duration-200">
            <h2 className="font-semibold">Email</h2>
            <p>ridersrevolution@gmail.com</p>
          </div>
          <div className="w-34 h16 bg-gray-100 rounded p-6 m-6 hover:m-4 duration-200">
            <h2 className="font-semibold">Address</h2>
            <p>Lahore, Punjab, Pakistan</p>
          </div>
        </div>
        <div className="w-1/2">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs

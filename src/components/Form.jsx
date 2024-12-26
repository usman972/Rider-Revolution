const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('access_key', '4e96fcec-f0ed-4c79-bfb5-0d0506356f42')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
      alert('Sent successfully!')
      event.target.reset() // Clear the form fields
    } else {
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-grey-900 my-16 text-center">
        Contact{' '}
        <span className="relative inline-block">
          Us
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 -z-10"></span>
        </span>
      </h2>
      <h2 className="text-3xl font-myFont2 text-grey-900 my-12 text-center">
        Get in Touch
      </h2>
      <form onSubmit={onSubmit}>
        <label className="input input-bordered flex items-center gap-2 mx-12 my-8">
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mx-12 my-8">
          <input
            type="text"
            className="grow"
            name="email"
            placeholder="Your Email"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mx-12 my-8">
          <input
            type="text"
            className="grow"
            name="subject"
            placeholder="Subject"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mx-12 my-8">
          <input
            type="text"
            className="grow"
            name="message"
            placeholder="Your Message"
            required
          />
        </label>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-100 md:text-xl font-myFont2 text-sky-500 rounded hover:bg-sky-500 hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

//? Suggestion: Consider adding form validation to provide better user feedback  and improve error handling for API responses.

export default Form

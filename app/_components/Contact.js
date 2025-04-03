export default function Contact() {
  return (
    <section
      id="contact"
      className="lg:mt-[170px] p-10 lg:p-0 lg:ml-[150px] lg:mr-[150px]"
    >
      <h2 className="text-white text-center lg:text-start text-4xl font-bold mb-3 font-[Inconsolata]">
        Want to get in touch?
      </h2>
      <h2 className="text-white text-center lg:text-start text-4xl font-bold mb-3 font-[Inconsolata]">
        Send me a message!
      </h2>
      <p className="text-white text-center lg:text-start text-[19px] lg:text-[20px] lg:w-[70%] w-[100%]">
        If you&apos;re searching for a developer, need help with something, or
        just want to connect, don&apos;t hesitate to get in touch.
      </p>
      <form className="pt-[40px] mb-[70px]">
        <div className="flex gap-4 w-[100%] lg:w-[70%] mb-5">
          {/* Name Field */}
          <div className="block w-[50%]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[19px] font-[Inconsolata] text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="John Doe"
              className="mt-1 block w-full h-15 text-white p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="block w-[50%]">
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-[19px] font-[Inconsolata] text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="john@example.com"
              className="mt-1 block w-full p-2 border h-15 text-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[70%]">
          <label
            htmlFor="name"
            className="block text-sm font-medium  text-[19px] font-[Inconsolata] text-white"
          >
            Message
          </label>
          <textarea
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className="mt-1 block w-full h-70 p-2 border text-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-[30px]">
          <button
            type="submit"
            className="bg-white text-black w-[150px] h-[55px] text-[19px] cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

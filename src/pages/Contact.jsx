import React, { useRef, useState } from 'react'
import profileImg from '../assets/Portfoliimg.png'
import { FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'service_l8dketr',
        'template_0h9at4a',
        form.current,
        'DswIOMmPxjYecLXks'
      )
      .then(() => {
        setLoading(false)
        toast.success('Message sent successfully ✅')
        form.current.reset()
      })
      .catch(() => {
        setLoading(false)
        toast.error('Something went wrong ❌')
      })
  }

  return (
    <div
  id="contact"
  className="text-white px-5 md:px-10 py-20 min-h-screen flex flex-col md:flex-row gap-10"
>


      {/* LEFT CONTENT */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h2 className="contact-h2 text-4xl md:text-6xl font-bold mb-4">
          Let’s Connect 🤝
        </h2>

        <p className="text-base md:text-xl text-gray-300 mb-6">
          I’m currently open to internships and full-time opportunities.
          If you have a project, role, or just want to say hi — feel free to reach out.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-3xl mt-4 justify-center md:justify-start">
          <a
  href="https://github.com/Atharvap7804"
  target="_blank"
  className="w-14 h-14 bg-gray-900 hover:bg-black transition flex items-center justify-center rounded-full"
>
  <i className="devicon-github-original text-3xl text-white"></i>
</a>

<a
  href="https://linkedin.com/in/atharva-pawar-0a58ba252"
  target="_blank"
  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center rounded-full"
>
  <i className="devicon-linkedin-plain text-3xl text-white"></i>
</a>

<a
  href="mailto:atharvapawar53@gmail.com"
  className="w-14 h-14 bg-red-600 hover:bg-red-700 transition flex items-center justify-center rounded-full"
>
  <FaEnvelope className="text-2xl text-white" />
</a>

        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="md:w-1/2 w-full flex flex-col items-center gap-6">

        {/* PROFILE IMAGE */}
        <div className="h-40 w-40 md:h-64 md:w-64 shadow-[0_0_40px_rgba(168,85,247,0.5)] rounded-full overflow-hidden">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full space-y-5 max-w-md"
        >
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#0b1120] rounded outline-none"
            required
          />

          <input
            name="from_email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#0b1120] rounded outline-none"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 bg-[#0b1120] rounded outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded font-semibold flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                Sending...
              </>
            ) : (
              'Send Message 🚀'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

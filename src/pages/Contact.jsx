import React, { useRef, useState } from 'react';
import profileImg from '../assets/Portfoliimg.png';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_l8dketr', 'template_0h9at4a', form.current, 'DswIOMmPxjYecLXks')
      .then(() => {
        setLoading(false);
        toast.success('Message sent successfully ✅');
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error('Something went wrong ❌');
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
      {/* Left Info */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let’s <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Connect</span> 🤝
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg">
          I’m actively looking for entry-level and internship roles. Drop a message or reach out via socials.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="https://github.com/Atharvap7804"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 flex items-center justify-center text-slate-300 hover:text-white transition-all"
          >
            <i className="devicon-github-original text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/atharva-pawar-0a58ba252"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-all"
          >
            <i className="devicon-linkedin-plain text-2xl" />
          </a>
          <a
            href="mailto:atharvapawar53@gmail.com"
            className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 flex items-center justify-center text-slate-300 hover:text-red-400 transition-all"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>

      {/* Right Card / Form */}
      <div className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 shadow-xl shadow-purple-950/20 hover:border-purple-500/40 transition-all duration-300 p-8 shadow-2xl flex flex-col items-center">
        <div className="h-28 w-28 md:h-32 md:w-32 rounded-full p-1 ring-2 ring-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.3)] mb-6 overflow-hidden">
          <img src={profileImg} alt="Atharva" className="w-full h-full object-cover object-top rounded-full" />
        </div>

        <form ref={form} onSubmit={sendEmail} className="w-full space-y-4">
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3.5 bg-slate-950/70 border border-slate-700/70 rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition duration-200"
            required
          />
          <input
            name="from_email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3.5 bg-slate-950/70 border border-slate-700/70 rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition duration-200"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3.5 bg-slate-950/70 border border-slate-700/70 rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition duration-200 resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              'Send Message 🚀'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md flex justify-between items-center p-4 z-50">
        <h1 className="text-2xl font-bold">Habibur Rahman</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
          <li><a href="#education" className="hover:text-yellow-300 transition">Education</a></li>
          <li><a href="#projects" className="hover:text-yellow-300 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-300 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Hi, I'm <span className="text-yellow-300">Habibur Rahman</span></h2>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">HSC Batch 2027 | Science Student | Self Employer | Prompt Engineer</p>
        <a href="#projects" className="px-6 py-3 bg-yellow-300 text-black rounded-full font-semibold shadow-lg hover:scale-105 transition">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-white text-black text-center">
        <h3 className="text-4xl font-bold mb-6">About Me</h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I'm Habibur Rahman, a science student from Balarhat, Shariatpur, Dhaka. Passionate about technology and problem-solving. I aim to create innovative solutions and pursue excellence in academics and beyond.
        </p>
        <p className="mt-4 text-lg">📞 Phone: 01713383589</p>
        <p className="mt-1 text-lg">📍 Address: Balarhat, Shariatpur, Dhaka</p>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-12">Education</h3>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-2xl font-semibold">SSC - Science</h4>
            <p className="text-gray-300">Batch 2025</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h4 className="text-2xl font-semibold">HSC - Science</h4>
            <p className="text-gray-300">Batch 2027</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">
        <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <div className="h-40 bg-gray-700 rounded-xl mb-4"></div>
            <h4 className="text-xl font-semibold mb-2">Finding a GF</h4>
            <p className="text-gray-300">A fun journey of exploring relationships and personal connections.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <div className="h-40 bg-gray-700 rounded-xl mb-4"></div>
            <h4 className="text-xl font-semibold mb-2">HSC তে কোপ 😎</h4>
            <p className="text-gray-300">Preparing hard to crack HSC exams with confidence and dedication.</p>
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <div className="h-40 bg-gray-700 rounded-xl mb-4"></div>
            <h4 className="text-xl font-semibold mb-2">Making Self Depend</h4>
            <p className="text-gray-300">Learning and working towards becoming financially and personally independent.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-white text-black text-center">
        <h3 className="text-4xl font-bold mb-12">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {["Self Employer", "Prompt Engineer", "Class Topper 😁"].map((skill) => (
            <div key={skill} className="p-6 rounded-2xl shadow-md bg-gray-100 hover:bg-yellow-200 transition">
              <h4 className="text-xl font-semibold">{skill}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl focus:outline-none text-black" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl focus:outline-none text-black" />
          <textarea placeholder="Your Message" className="w-full px-4 py-3 rounded-xl focus:outline-none text-black h-32"></textarea>
          <button type="submit" className="px-6 py-3 bg-yellow-300 text-black rounded-full font-semibold shadow-lg hover:scale-105 transition">Send Message</button>
        </form>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://wa.me/message/6KNG5BCTVB4OI1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">WhatsApp</a>
          <a href="https://www.facebook.com/share/1BrPa8dq6t/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">Facebook</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black/50 text-center">
        <p>© 2025 Habibur Rahman. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://wa.me/message/6KNG5BCTVB4OI1" className="hover:text-yellow-300">WhatsApp</a>
          <a href="https://www.facebook.com/share/1BrPa8dq6t/" className="hover:text-yellow-300">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

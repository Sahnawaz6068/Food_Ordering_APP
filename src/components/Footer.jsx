import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
      
      {/* Section 1: Company Info */}
      <div>
        <h3 className="text-lg font-semibold mb-3">About Us</h3>
        <p className="text-sm text-gray-400">
          Your favorite food delivered hot and fresh. We connect you with the best local restaurants.
        </p>
      </div>

      {/* Section 2: Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="text-sm text-gray-400 space-y-2">
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="/contact" className="hover:text-white">Contact</a></li>
          <li><a href="/faq" className="hover:text-white">FAQs</a></li>
          <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Section 3: Support */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>Email: xxx@foodie.com</li>
          <li>Phone: +91 9xxxxxxxxxx</li>
          <li>.............</li>
        </ul>
      </div>

      {/* Section 4: Social Media & App Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Get Our App</h3>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
      © {new Date().getFullYear()} Foodie. All rights reserved.
    </div>
  </div>
  )
}

export default Footer
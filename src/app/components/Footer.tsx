import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Restaurant Info */}
          <div>
            <h2 className="italic text-2xl font-bold">Chef Hafsa Sheikh</h2>
            <p className="mt-4">
              Delicious food made with love and the finest ingredients. Join us
              for a culinary experience that will delight your senses.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="mt-4">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" /> +1 (123) 456-7890
              </li>
              <li className="mt-2">123 Food Street, Flavor Town, FT 56789</li>
              <li className="mt-2">info@hafsaSheikh.com</li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                className="bg-pink-700 p-3 rounded-full text-white hover:bg-pink-600"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-amber-400">
          &copy; {new Date().getFullYear()} Chef HafsaSheikh. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

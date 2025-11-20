import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#0B1309] md:h-[457px] text-white py-[55px] px-[30px] lg:py-[60px] lg:px-[60px] border-t border-[#F7C31F]">
      <div className="mx-auto">
        <div className="flex flex-col justify-between md:flex-row items-start md:items-stretch gap-8 md:gap-36">
          <div className="md:max-w-[385px] flex-shrink-0">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Subscribe to our newsletter to get latest news on your inbox.
            </h3>
            <form
              className="flex flex-col sm:flex-row gap-2 w-full"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 min-w-0 px-4 py-2 rounded-[6px] bg-[#FDF3E2] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />

              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-[6px] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4 text-[24px] ">Company</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Partners</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Press</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-[24px] ">Support</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Contact Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-[24px] ">Explore</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Flights</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Stays</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Rides</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-[16px]">Packages</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 ">
          <p className="text-gray-500 text-[16px] text-center">
            © 2025 Cleaques Bookings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

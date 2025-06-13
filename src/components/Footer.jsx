export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-20 md:ml-64 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
            We are dedicated to crafting beautiful films and memories that last forever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-600 transition">About</a></li>
            <li><a href="/booking" className="hover:text-red-600 transition">Booking</a></li>
            <li><a href="https://wa.me/917735214860" className="hover:text-red-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">Email: weddprosb@gmail.com</p>
          <p className="text-sm">Phone: 7735214860/8895625981</p>
          <p className="text-sm">Address: Netaji Nagar, Near Shani Temple, Madhupatna, Cuttack 753010, Odisha</p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="www.google.com" aria-label="Facebook" className="hover:text-red-600 transition">FB</a>
            <a href="www.google.com" aria-label="Instagram" className="hover:text-red-600 transition">IG</a>
            <a href="www.google.com" aria-label="YouTube" className="hover:text-red-600 transition">YT</a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MotionsX India. All rights reserved.
      </div>
    </footer>
  );
}

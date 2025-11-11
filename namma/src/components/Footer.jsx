import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">🍴 Namma Kitchen</h2>
          <p className="text-gray-400 text-sm">
            Authentic South Indian flavors delivered fresh to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/menu" className="hover:text-green-400">Menu</a></li>
            <li><a href="/combo" className="hover:text-green-400">Combo Items</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-gray-400 text-sm">📍 Salem, Tamil Nadu</p>
          <p className="text-gray-400 text-sm">📞 +91 95972 94741</p>
          <p className="text-gray-400 text-sm">📧 support@nammakitchen.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer">
        <h5 className="text-lg font-bold mb-2">© {new Date().getFullYear()} Namma Kitchen. All rights reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;

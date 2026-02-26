export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* School info */}
        <div>
          <h3 className="font-bold text-lg">Hillside Academy</h3>
          <p className="mt-3 text-sm text-blue-200">
            Birendranagar-7, Surkhet <br />
            Education signifies foremost development of people
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Academics</li>
            <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm leading-relaxed">
            📞 +977-XXXXXXXX <br />
            ✉️ info@hillsideacademy.edu.np
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900 text-center text-xs text-blue-300 py-4">
        © {new Date().getFullYear()} Hillside Academy. All rights reserved.
      </div>
    </footer>
  );
}

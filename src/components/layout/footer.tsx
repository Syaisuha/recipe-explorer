export default function Footer() {
    return (
      <footer className="w-full bg-pink-100 text-pink-600 mt-10 py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">© {new Date().getFullYear()} SweetBites. All rights reserved 🍰</p>
          <div className="flex space-x-4 text-sm">
            <a href="/about" className="hover:underline hover:text-pink-700 transition">About</a>
          </div>
        </div>
      </footer>
    );
  }
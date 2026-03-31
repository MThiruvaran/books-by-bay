import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2c1810] text-[#d4c4a8] mt-auto border-t-4 border-[#c9a227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#f5f0e6]">Books by the Bay</h3>
            <p className="text-sm leading-relaxed">
              A community book club celebrating literature and connection since 2020.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#f5f0e6]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#c9a227] transition-colors">Home</Link></li>
              <li><Link href="/current-reads" className="hover:text-[#c9a227] transition-colors">Current Reads</Link></li>
              <li><Link href="/past-reads" className="hover:text-[#c9a227] transition-colors">Past Reads</Link></li>
              <li><Link href="/about" className="hover:text-[#c9a227] transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#f5f0e6]">Meeting Info</h3>
            <p className="text-sm leading-relaxed">
              We meet on the last Tuesday of each month<br />
              7:00 PM - 9:00 PM<br />
              Bay Community Center
            </p>
          </div>
        </div>
        <div className="border-t border-[#8b4513] mt-10 pt-8 text-center text-sm">
          <p className="font-serif">&copy; {new Date().getFullYear()} Books by the Bay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

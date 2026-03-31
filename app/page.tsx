import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-[#2c1810] via-[#3d2314] to-[#8b4513] text-[#f5f0e6]">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjOWEyMjciLz4KPC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">📚</span>
              <div className="h-px bg-[#c9a227] flex-grow max-w-xs"></div>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Books by the Bay
            </h1>
            <p className="font-serif text-xl md:text-2xl mb-8 text-[#d4c4a8] italic">
              &ldquo;So many books, so little time.&rdquo; &mdash; Join us to discover your next favorite story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/current-reads"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#c9a227] text-[#2c1810] font-serif font-semibold rounded hover:bg-[#b8912a] transition-colors duration-200 shadow-md"
              >
                See What We&apos;re Reading
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#d4c4a8] text-[#f5f0e6] font-serif font-semibold rounded hover:bg-[#d4c4a8]/10 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2c1810]">How It Works</h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-md border-2 border-[#d4c4a8]">
              <div className="w-20 h-20 bg-[#f5f0e6] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#c9a227]">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-[#2c1810]">Choose Your Book</h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                Each cycle, we select three books: Fiction, Non-Fiction, and Short Stories. Members vote on selections randomly.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md border-2 border-[#d4c4a8]">
              <div className="w-20 h-20 bg-[#f5f0e6] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#c9a227]">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-[#2c1810]">Join the Discussion</h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                Meet to discuss the book, share insights, and hear different perspectives over tea or coffee.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md border-2 border-[#d4c4a8]">
              <div className="w-20 h-20 bg-[#f5f0e6] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#c9a227]">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-[#2c1810]">Build Community</h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                Connect with fellow book enthusiasts, make new friends, and be part of a supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#d4c4a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#c9a227] text-[#2c1810] text-sm font-serif font-semibold rounded-full mb-4">
              Currently Reading
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2c1810]">
              Cycle 7
            </h2>
            <p className="text-lg text-[#5a4a3a]">March 2026 - May 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl border-t-4 border-[#c9a227]">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#8b4513] to-[#d4c4a8] flex items-center justify-center">
                <span className="text-7xl">📖</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-serif uppercase tracking-wider text-[#8b4513]">Fiction</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-1 text-[#2c1810]">The Midnight Library</h3>
                <p className="text-[#8b4513] text-sm">by Matt Haig</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl border-t-4 border-[#2d4a3e] transform md:-translate-y-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#2d4a3e] to-[#4a7c6a] flex items-center justify-center">
                <span className="text-7xl">📚</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-serif uppercase tracking-wider text-[#2d4a3e]">Non-Fiction</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-1 text-[#2c1810]">Atomic Habits</h3>
                <p className="text-[#2d4a3e] text-sm">by James Clear</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl border-t-4 border-[#8b4513]">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#a0522d] to-[#d4c4a8] flex items-center justify-center">
                <span className="text-7xl">📃</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-serif uppercase tracking-wider text-[#8b4513]">Short Stories</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-1 text-[#2c1810]">Bullets</h3>
                <p className="text-[#8b4513] text-sm">by Florian Fechner</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/current-reads"
              className="inline-flex items-center font-serif text-[#8b4513] font-semibold hover:text-[#2c1810] transition-colors"
            >
              View Full Cycle Details
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#2d4a3e] text-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Join?
          </h2>
          <p className="font-serif text-xl mb-8 text-[#d4c4a8] max-w-2xl mx-auto">
            Whether you&apos;re an avid reader or just starting your reading journey, 
            there&apos;s a place for you in our book club.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a227] text-[#2c1810] font-serif font-semibold rounded-lg hover:bg-[#b8912a] transition-colors duration-200 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

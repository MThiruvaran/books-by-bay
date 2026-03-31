export const metadata = {
  title: "About Us | Books by the Bay",
  description:
    "Learn about our book club history, mission, and the wonderful people who make it possible.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#2c1810] via-[#3d2314] to-[#8b4513] text-[#f5f0e6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="font-serif text-xl text-[#d4c4a8] max-w-2xl italic">
            &ldquo;A room without books is like a body without a soul.&rdquo;
            &mdash; Cicero
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-[#2c1810]">
                Our Story
              </h2>
              <div className="space-y-5 text-[#5a4a3a] leading-relaxed">
                <p>
                  Books by the Bay was founded in 2020 by a small group of
                  neighbors who shared a passion for reading and meaningful
                  discussions. What started as a casual gathering around a
                  kitchen table has grown into a thriving community of over 50
                  members.
                </p>
                <p>
                  We meet monthly to discuss books across all genres &mdash;
                  from contemporary fiction and memoirs to thought-provoking
                  non-fiction and timeless classics. Every member has a voice in
                  selecting our monthly reads.
                </p>
                <p>
                  Beyond our monthly meetings, we organize author
                  meet-and-greets, book swaps, and social outings that have
                  created lasting friendships among our members.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-[#d4c4a8]">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#f5f0e6] rounded-lg">
                  <div className="font-serif text-5xl font-bold text-[#8b4513]">
                    50+
                  </div>
                  <div className="text-[#5a4a3a] mt-2 font-serif">Members</div>
                </div>
                <div className="text-center p-6 bg-[#f5f0e6] rounded-lg">
                  <div className="font-serif text-5xl font-bold text-[#8b4513]">
                    60+
                  </div>
                  <div className="text-[#5a4a3a] mt-2 font-serif">
                    Books Read
                  </div>
                </div>
                <div className="text-center p-6 bg-[#f5f0e6] rounded-lg">
                  <div className="font-serif text-5xl font-bold text-[#8b4513]">
                    5+
                  </div>
                  <div className="text-[#5a4a3a] mt-2 font-serif">Years</div>
                </div>
                <div className="text-center p-6 bg-[#f5f0e6] rounded-lg">
                  <div className="font-serif text-5xl font-bold text-[#8b4513]">
                    12
                  </div>
                  <div className="text-[#5a4a3a] mt-2 font-serif">
                    Meetings/Year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#d4c4a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-[#2c1810]">
              Meet the Founder
            </h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto"></div>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl border-2 border-[#c9a227]">
              <div className="aspect-square bg-gradient-to-br from-[#8b4513] to-[#d4c4a8] flex items-center justify-center">
                <span className="text-9xl">👤</span>
              </div>
              <div className="p-6 text-center">
                <p className="font-serif text-sm text-[#8b4513] italic mb-5">
                  Founder (not cult leader)
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#2c1810]">
                  Nivethitha Pugazendhi
                </h3>
                <p className="text-[#5a4a3a] mt-3 leading-relaxed">
                  Founded the book club out of boredom and the ultimate goal to
                  be a supreme leader in the book club community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#d4c4a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-[#2c1810]">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#c9a227]">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-[#2c1810]">
                Inclusive Reading
              </h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                We believe every book has value and every voice matters. We
                embrace diverse perspectives and encourage open-minded
                discussions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#c9a227]">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-[#2c1810]">
                Community First
              </h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                More than a book club, we&apos;re a support system. We celebrate
                wins together, comfort each other through challenges, and build
                genuine connections.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#c9a227]">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-[#2c1810]">
                Continuous Growth
              </h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                We&apos;re always learning &mdash; through books, through each
                other, and through the conversations we spark. Every meeting is
                an opportunity to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-[#2c1810]">
            Join Our Community
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-[#5a4a3a] mb-10 leading-relaxed">
              Whether you&apos;re an avid reader or just looking to explore new
              books, we&apos;d love to have you join us. No commitment required
              &mdash; come to a meeting and see if we&apos;re the right fit for
              you!
            </p>
            <div className="bg-white rounded-lg p-10 shadow-xl border-2 border-[#c9a227] max-w-md mx-auto">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-[#2c1810]">
                Meeting Schedule
              </h3>
              <div className="space-y-3 text-[#5a4a3a]">
                <p>
                  <strong className="text-[#2c1810]">When:</strong> Last Tuesday
                  of every month
                </p>
                <p>
                  <strong className="text-[#2c1810]">Time:</strong> 7:00 PM -
                  9:00 PM
                </p>
                <p>
                  <strong className="text-[#2c1810]">Where:</strong> Bay
                  Community Center
                </p>
                <p className="pt-4">
                  <strong className="text-[#2c1810]">Contact:</strong>{" "}
                  hello@booksbythebay.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

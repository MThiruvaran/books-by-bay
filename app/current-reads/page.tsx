export const metadata = {
  title: 'Current Reads | Books by the Bay',
  description: 'See what our book club is currently reading and join the discussion.',
};

const currentCycle = {
  name: 'Cycle 7',
  startDate: 'March 2026',
  endDate: 'May 2026',
  books: [
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
      category: 'Fiction',
      pageCount: 304,
      discussionDate: 'March 2026',
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'An easy and proven way to build good habits and break bad ones. Transform your life with tiny changes in behavior.',
      category: 'Non-Fiction',
      pageCount: 320,
      discussionDate: 'April 2026',
    },
    {
      id: 3,
      title: 'Bullets',
      author: 'Florian Fechner',
      description: 'A powerful collection of short stories that explore the human condition through concise, impactful narratives.',
      category: 'Short Stories',
      pageCount: 180,
      discussionDate: 'May 2026',
    },
  ],
};

function getCategoryIcon(category: string) {
  switch (category) {
    case 'Fiction':
      return '📖';
    case 'Non-Fiction':
      return '📚';
    case 'Short Stories':
      return '📃';
    default:
      return '📖';
  }
}

export default function CurrentReadsPage() {
  const fiction = currentCycle.books.find(b => b.category === 'Fiction');
  const nonFiction = currentCycle.books.find(b => b.category === 'Non-Fiction');
  const shortStories = currentCycle.books.find(b => b.category === 'Short Stories');

  return (
    <div>
      <section className="bg-gradient-to-b from-[#2c1810] via-[#3d2314] to-[#8b4513] text-[#f5f0e6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Current Reads</h1>
          <p className="font-serif text-xl text-[#d4c4a8] max-w-2xl">
            Each cycle includes Fiction, Non-Fiction, and Short Stories &mdash; picked randomly, not monthly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2c1810] text-[#f5f0e6] rounded-xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">{currentCycle.name}</h2>
                <p className="font-serif text-[#d4c4a8] mt-1">{currentCycle.startDate} - {currentCycle.endDate}</p>
              </div>
              <div className="flex gap-3">
                <span className="px-4 py-1 bg-[#c9a227] text-[#2c1810] text-sm font-serif font-semibold rounded-full">
                  Currently Reading
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentCycle.books.map((book) => (
                <div 
                  key={book.id} 
                  className={`bg-[#f5f0e6] rounded-lg p-6 text-[#2c1810] ${
                    book.category === 'Fiction' ? 'ring-2 ring-[#c9a227]' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{getCategoryIcon(book.category)}</span>
                    <span className="text-xs font-serif uppercase tracking-wider text-[#8b4513]">
                      {book.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">{book.title}</h3>
                  <p className="text-[#8b4513] text-sm mb-3">by {book.author}</p>
                  <p className="text-[#5a4a3a] text-sm mb-4 line-clamp-3">{book.description}</p>
                  <div className="flex justify-between text-xs text-[#8b4513]">
                    <span>{book.pageCount} pages</span>
                    <span className="font-serif">{book.discussionDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#d4c4a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fiction && (
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-t-4 border-[#c9a227]">
                <div className="aspect-[2/3] bg-gradient-to-br from-[#8b4513] to-[#d4c4a8] flex items-center justify-center">
                  <span className="text-8xl">📖</span>
                </div>
                <div className="p-8">
                  <span className="px-3 py-1 bg-[#f5f0e6] text-[#8b4513] text-xs font-serif font-medium rounded border border-[#d4c4a8]">
                    Fiction
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-4 mb-2 text-[#2c1810]">{fiction.title}</h3>
                  <p className="text-[#8b4513] mb-4 font-serif">by {fiction.author}</p>
                  <p className="text-[#5a4a3a] leading-relaxed mb-6">{fiction.description}</p>
                  <div className="bg-[#f5f0e6] rounded-lg p-4 border-l-4 border-[#c9a227]">
                    <p className="text-sm text-[#8b4513] font-serif font-semibold">Discussion: {fiction.discussionDate}</p>
                  </div>
                </div>
              </div>
            )}

            {nonFiction && (
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-t-4 border-[#2d4a3e]">
                <div className="aspect-[2/3] bg-gradient-to-br from-[#2d4a3e] to-[#4a7c6a] flex items-center justify-center">
                  <span className="text-8xl">📚</span>
                </div>
                <div className="p-8">
                  <span className="px-3 py-1 bg-[#f5f0e6] text-[#2d4a3e] text-xs font-serif font-medium rounded border border-[#d4c4a8]">
                    Non-Fiction
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-4 mb-2 text-[#2c1810]">{nonFiction.title}</h3>
                  <p className="text-[#8b4513] mb-4 font-serif">by {nonFiction.author}</p>
                  <p className="text-[#5a4a3a] leading-relaxed mb-6">{nonFiction.description}</p>
                  <div className="bg-[#f5f0e6] rounded-lg p-4 border-l-4 border-[#2d4a3e]">
                    <p className="text-sm text-[#2d4a3e] font-serif font-semibold">Discussion: {nonFiction.discussionDate}</p>
                  </div>
                </div>
              </div>
            )}

            {shortStories && (
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-t-4 border-[#8b4513]">
                <div className="aspect-[2/3] bg-gradient-to-br from-[#a0522d] to-[#d4c4a8] flex items-center justify-center">
                  <span className="text-8xl">📃</span>
                </div>
                <div className="p-8">
                  <span className="px-3 py-1 bg-[#f5f0e6] text-[#8b4513] text-xs font-serif font-medium rounded border border-[#d4c4a8]">
                    Short Stories
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-4 mb-2 text-[#2c1810]">{shortStories.title}</h3>
                  <p className="text-[#8b4513] mb-4 font-serif">by {shortStories.author}</p>
                  <p className="text-[#5a4a3a] leading-relaxed mb-6">{shortStories.description}</p>
                  <div className="bg-[#f5f0e6] rounded-lg p-4 border-l-4 border-[#8b4513]">
                    <p className="text-sm text-[#8b4513] font-serif font-semibold">Discussion: {shortStories.discussionDate}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#2d4a3e] text-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Want to Join Our Discussion?</h2>
          <p className="font-serif text-xl text-[#d4c4a8] mb-10 max-w-2xl mx-auto">
            Our meetings are open to everyone. No commitment required &mdash; 
            just bring your thoughts and love for books!
          </p>
          <div className="inline-block bg-[#f5f0e6] text-[#2c1810] rounded-lg px-10 py-6 shadow-xl border-2 border-[#c9a227]">
            <p className="font-serif font-semibold text-lg">Next Meeting: March 31, 2026 at 7:00 PM</p>
            <p className="text-[#8b4513] mt-2 font-serif">Bay Community Center</p>
          </div>
        </div>
      </section>
    </div>
  );
}

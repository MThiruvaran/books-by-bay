export const metadata = {
  title: 'Past Reads | Books by the Bay',
  description: 'Explore the books our club has read and discussed in the past.',
};

const pastCycles = [
  {
    name: 'Cycle 6',
    dates: 'December 2025 - February 2026',
    books: [
      {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        category: 'Fiction',
        rating: 5,
        description: 'A lone astronaut must save Earth from disaster in this propulsive thriller.',
      },
      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        category: 'Non-Fiction',
        rating: 5,
        description: 'A brief history of humankind, exploring how we came to dominate the planet.',
      },
      {
        title: 'Nightmare Magazine: Horror Short Stories',
        author: 'Various',
        category: 'Short Stories',
        rating: 4,
        description: 'Chilling tales to keep you up at night from acclaimed horror writers.',
      },
    ],
  },
  {
    name: 'Cycle 5',
    dates: 'September - November 2025',
    books: [
      {
        title: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        category: 'Fiction',
        rating: 4,
        description: 'Aging Hollywood legend Evelyn Hugo finally tells the truth about her glamorous life.',
      },
      {
        title: 'Quiet',
        author: 'Susan Cain',
        category: 'Non-Fiction',
        rating: 4,
        description: 'The power of introverts in a world that can\'t stop talking.',
      },
      {
        title: 'The Things They Carried',
        author: 'Tim O\'Brien',
        category: 'Short Stories',
        rating: 5,
        description: 'A collection of linked short stories about the Vietnam War.',
      },
    ],
  },
  {
    name: 'Cycle 4',
    dates: 'June - August 2025',
    books: [
      {
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        category: 'Fiction',
        rating: 5,
        description: 'A coming-of-age story set in the marshlands of North Carolina.',
      },
      {
        title: 'Educated',
        author: 'Tara Westover',
        category: 'Non-Fiction',
        rating: 5,
        description: 'A memoir about a woman who leaves her survivalist family to pursue education.',
      },
      {
        title: 'The Brief Wondrous Life of Oscar Wao',
        author: 'Junot Díaz',
        category: 'Short Stories',
        rating: 4,
        description: 'A multigenerational story of a Dominican American family.',
      },
    ],
  },
  {
    name: 'Cycle 3',
    dates: 'March - May 2025',
    books: [
      {
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        category: 'Fiction',
        rating: 4,
        description: 'A woman shoots her husband and then never speaks another word.',
      },
      {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        category: 'Non-Fiction',
        rating: 5,
        description: 'A groundbreaking tour of the mind explaining the two systems that drive how we think.',
      },
      {
        title: 'Interpreter of Maladies',
        author: 'Jhumpa Lahiri',
        category: 'Short Stories',
        rating: 5,
        description: 'A stunning collection of stories about the immigrant experience.',
      },
    ],
  },
  {
    name: 'Cycle 2',
    dates: 'December 2024 - February 2025',
    books: [
      {
        title: 'Circe',
        author: 'Madeline Miller',
        category: 'Fiction',
        rating: 4,
        description: 'A retelling of Greek mythology from the perspective of the witch Circe.',
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        category: 'Non-Fiction',
        rating: 5,
        description: 'An easy and proven way to build good habits and break bad ones.',
      },
      {
        title: 'Her Body and Other Parties',
        author: 'Carmen Maria Machado',
        category: 'Short Stories',
        rating: 4,
        description: 'Darkly feminist stories that blur the line between horror and magic realism.',
      },
    ],
  },
  {
    name: 'Cycle 1',
    dates: 'September - November 2024',
    books: [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Fiction',
        rating: 4,
        description: 'A timeless tale of wealth, love, and the American Dream.',
      },
      {
        title: 'Becoming',
        author: 'Michelle Obama',
        category: 'Non-Fiction',
        rating: 5,
        description: 'The deeply personal memoir of the former First Lady.',
      },
      {
        title: 'Four Stories to Keep You Up at Night',
        author: 'Stephen King',
        category: 'Short Stories',
        rating: 4,
        description: 'Four chilling novellas from the master of horror.',
      },
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-[#c9a227]' : 'text-[#d4c4a8]'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

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

function getCategoryColor(category: string) {
  switch (category) {
    case 'Fiction':
      return 'border-[#c9a227]';
    case 'Non-Fiction':
      return 'border-[#2d4a3e]';
    case 'Short Stories':
      return 'border-[#8b4513]';
    default:
      return 'border-[#c9a227]';
  }
}

export default function PastReadsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#2c1810] via-[#3d2314] to-[#8b4513] text-[#f5f0e6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Past Reads</h1>
          <p className="font-serif text-xl text-[#d4c4a8] max-w-2xl">
            Explore our reading history. Each cycle includes Fiction, Non-Fiction, and Short Stories.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pastCycles.map((cycle) => (
            <div key={cycle.name} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-serif text-3xl font-bold text-[#2c1810]">{cycle.name}</h2>
                <div className="h-px bg-[#c9a227] flex-grow"></div>
                <span className="font-serif text-[#8b4513]">{cycle.dates}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cycle.books.map((book, bookIndex) => (
                  <div
                    key={bookIndex}
                    className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${getCategoryColor(book.category)}`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{getCategoryIcon(book.category)}</span>
                        <span className="px-2 py-1 bg-[#f5f0e6] text-[#8b4513] text-xs font-serif font-medium rounded">
                          {book.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-1 text-[#2c1810]">{book.title}</h3>
                      <p className="text-[#8b4513] mb-3 font-serif text-sm">by {book.author}</p>
                      <p className="text-[#5a4a3a] text-sm mb-4 line-clamp-3 leading-relaxed">{book.description}</p>
                      <div className="flex items-center justify-between">
                        <StarRating rating={book.rating} />
                        <span className="text-sm text-[#8b4513] font-serif">
                          {book.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#d4c4a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-[#2c1810]">Our Favorite Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#c9a227]">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-[#2c1810]">Highest Rated</h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                &quot;Project Hail Mary&quot; and &quot;Where the Crawdads Sing&quot; tied for our highest-rated 
                fiction with a perfect 5-star rating from members.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#c9a227]">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-[#2c1810]">Best Discussion</h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                &quot;Educated&quot; sparked our most animated discussion about family, education, 
                and finding one&apos;s own path in life.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#c9a227]">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-[#2c1810]">Most Popular</h3>
              <p className="text-[#5a4a3a] leading-relaxed">
                &quot;The Seven Husbands of Evelyn Hugo&quot; had our highest attendance, with 
                members bringing friends to discuss this page-turner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

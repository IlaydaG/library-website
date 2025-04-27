import React, { useState, useEffect } from 'react';
import { books } from '../data/books.jsx';
import BookCard from '../components/BookCard.jsx';

function Home({ searchQuery }) {
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="container">
      <h1>Kitaplar</h1>
      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="col-md-4 mb-3">
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p>Aramanıza uygun kitap bulunamadı.</p>
        )}
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data/books.jsx';
import BookDetail from './BookDetail.jsx';

function CategoryPage() {
  const { category } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filtered = books.filter(book => book.category.includes(category));
    setFilteredBooks(filtered);
  }, [category]);

  return (
    <div className="container">
      <h1>{category} Kategorisi</h1>
      <div className="row">
        {filteredBooks.map(book => (
          <div key={book.id} className="col-md-12 mb-4"> 
            <BookDetail book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;

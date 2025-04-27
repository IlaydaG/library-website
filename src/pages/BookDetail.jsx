import React from 'react';

function BookDetail({ book }) {
  if (!book) {
    return <p>Kitap bulunamadı.</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "25rem", height: "580px" }}>
            <img
              src={book.image}
              className="card-img-top"
              alt={book.title}
              style={{
                height: "250px", 
                width: "100%",  
                objectFit: "cover", 
              }}
            />
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <h1 className="card-title text-center">{book.title}</h1>
              <p className="text-center"><strong>Yazar:</strong> {book.author}</p>
              <p className="text-center"><strong>Özet:</strong> {book.summary}</p>
              <p className="text-center"><strong>Yıl:</strong> {book.year}</p>
              <p className="text-center"><strong>Sayfa Sayısı:</strong> {book.pages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

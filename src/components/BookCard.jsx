function BookCard({ book }) {
  return (
    <div className="card mb-4" style={{ width: "18rem", height: "350px" }}>
      <img
        src={book.image}
        className="card-img-top"
        alt={book.title}
        style={{
          height: "200px", 
          width: "100%",  
          objectFit: "cover", 
        }}
      />
      <div className="card-body" style={{ height: "150px", overflow: "hidden" }}>
        <h5 className="card-title">Kitap Adı: {book.title}</h5>
        <h6 className="card-text">Yazar: {book.author}</h6>
      </div>
    </div>
  );
}

export default BookCard;

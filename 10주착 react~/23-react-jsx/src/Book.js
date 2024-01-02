function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <div className="main">
        <h1> 이번주 베스트셀러</h1>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.G7pKFI6N77A3ZNKoHntAIwHaKl?w=186&h=265&c=7&r=0&o=5&pid=1.7"
            alt="책 표지"
          />
        </div>
        <h2>{title}</h2>
      </div>
      <div className="info">
        <h4>저자: {author}</h4>
        <h4>판매가: {price}원</h4>
        <h4>구분: {type}</h4>
      </div>
    </div>
  );
}
export default Book;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"; 
import { BookType } from "../Books/NewReleases";
import StarRating from "../StarRating/StarRating";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Reviews from "../Reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/cart/store"; 
import { addToCart } from "../../store/cart/cartSlice";

const BookPage = () => {
  const [email, setEmail] = useState('');
  const [book, setBook] = useState<BookType | null>(null);
  const { id } = useParams<{ id: string }>(); 
  const dispatch = useDispatch();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const isProductInCart = cartItems.some(item => item.isbn13 === book?.isbn13);

  useEffect(() => {
    axios.get(`https://api.itbook.store/1.0/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error("Error fetching book:", error));
  }, [id]);

  const addProductToCartHandler = () => {
    if (!book) return;
    
    dispatch(addToCart({
      authors: book.authors,
      isbn13: book.isbn13,
      title: book.title,
      price: parseFloat(book.price.replace('$', '')), 
      image: book.image,
      quantity: 1
    }));
  };

  if (!book) return <div className="spinner"></div>;

  return (
    <div className="book-page">
      <Link to="/" className="back" aria-label="Back to home">
        ← 
      </Link>

      <div>
       <h1 className="title-page">{book.title}</h1>
       <div className="book-info">
          <div className="img-box">
            <img 
              className="page-img"
              src={book.image} 
              alt={book.title}
            />
          </div>

          <div className="description">
            <div className="price-rating">
              <p className="price-page"><strong>{book.price}</strong></p>
              <div className="rating-container">
                  <StarRating rating={Number(book.rating)} />
              </div>
            </div>
            <div className="page-book-info">
              <div className="book-page-txt">
              <p className="styleText"><strong>Author:</strong> </p>
              <p className="styleText"><strong>Publisher:</strong> </p>
              <p className="styleText"><strong>Subtitle: </strong></p>
              <p className="styleText"><strong>Pages:</strong></p>
              <p className="styleText"><strong>Year:</strong></p>
              </div>
              <div className="book-info-text">
                <p>{book.authors}</p>
                <p>{book.publisher} ({book.year})</p>
                <p>{book.subtitle}</p>
                <p>{book.pages}</p>
                <p>{book.year}</p>
              </div> 
            </div>
            
            <button
              onClick={addProductToCartHandler}
              className={`cart-button ${isProductInCart ? 'cart-button_active' : ''}`}
            >
              {isProductInCart ? "Added to cart" : "Add to cart"}
            </button>
          </div>
       </div>
       <div className="book-description">
          <h3 className="desc-title">Description</h3>
          <p className="desc">{book.desc}</p>
        </div>  
      </div>
      <SubscribeForm
        email={email}
        // isSent={isSent}
        onEmailChange={setEmail}
        onSubmit={handleSubmit}
       />
      <Reviews />
    </div>
  );
};

export default BookPage;
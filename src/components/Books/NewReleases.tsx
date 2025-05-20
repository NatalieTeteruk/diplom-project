import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./NewReleases.module.css";
import { Pagination } from "../Pagination/Pagination";
import smallBook from '../../assets/img/Rectangle (8).png';

export interface BookType {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  isbn13: string;
  desc: string;
  authors: string;
  publisher: string;
  year: string;
  rating: string;
  pages: string
}

const NewReleases = () => {
    const [books, setBooks] = useState<BookType[]>([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1); 
    const booksPerPage = 9;

    useEffect(() => {
        axios.get('https://api.itbook.store/1.0/new')
            .then(res => {
                const allBooks = res.data.books || [];
                setTotalPages(Math.ceil(allBooks.length / booksPerPage));
                const startIndex = (currentPage - 1) * booksPerPage;
                const endIndex = startIndex + booksPerPage;
                const booksForPage = allBooks.slice(startIndex, endIndex);
                setBooks(booksForPage);
            }
            )
            .catch(err => console.error("Ошибка загрузки:", err));
    }, [currentPage]);

    const handlePageChange = (page: number) => {
       setCurrentPage(page);
    };

    if (books.length === 0) return <div className={styles.spinner}></div>;

    return (
    <div className={styles.wrap}>
        <div className={styles.newReleases}>
            <h2 className={styles.title}>New Releases Books  <img src={smallBook} alt="" className={styles.smallBook}/></h2>
            <div className={styles.cardsContainer}>
                {books.map(book => (
                    <div className={styles.bookCard} key={book.isbn13}>
                        <div className={styles.imgCard}>
                        <img src={book.image} alt={book.title} className={styles.bookImage} /> 
                        </div>
                        <h4 className={styles.bookTitle}>{book.title}</h4>
                        <p className={styles.subtitle}>{book.subtitle}</p>
                        <div className={styles.price}>
                        <p className={styles.bookPrice}>{book.price}</p>
                        {/* <button className="show">Show more</button> */}
                        <Link to={`/books/${book.isbn13}`} className={styles.mainLink}>Show more &#8594; </Link>
                        </div>
                        
                        {/* <Link to={`/product/${pr.id}`}>Show more</Link> */}
                    </div>
                ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
        </div>
    </div>
    );
};

export default NewReleases;
   
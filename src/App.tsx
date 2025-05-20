import React from 'react';
import './App.css';
import  Header  from './components/Header/Header';
import NewReleases from './components/Books/NewReleases';
import { Route, Routes } from "react-router";
import  BookPage  from './components/BookPage/BookPage';
import Account from './components/Account/Account';
// import Cart from './components/Cart/Cart';
import CartContainer from './components/Cart/CartContainer';



function App() {


  return (
   <>
     <Header />
     <Routes>
     <Route path="/" element={<NewReleases />} />
     <Route path="/account" element={<Account />} />
     <Route path="/cart" element={<CartContainer />}/>
     <Route path="/books/:id" element={<BookPage />} />
     </Routes>
     
   </>
  );
}

export default App;

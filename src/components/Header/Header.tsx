import React from "react";
import { Link } from "react-router";
import logoImg from '../../assets/img/logo.png';
import searchImg from '../../assets/img/search.png';
import favoritesImg from '../../assets/img/heart.png';
import cartImg from '../../assets/img/cart.png';
import accountImg from '../../assets/img/Frame 15.png';

const Header = () => {

    return(
    <header className="header">
       <div className="header__container">
          <div className="header__logo">
              
            <img src={logoImg} alt="Логотип" width="120" />
              
          </div>

          <div className="header-search">
                <form className="search-form">
                    <div className="search-input-container">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="search-input"
                        />
                         <button type="submit" className="search-button">
                            <img src={searchImg} alt="Поиск" width="24" height="24" />
                        </button>
                    </div>
                </form>
            </div>

          <div className="header__icons">
               <Link to="/" className="icon-link" aria-label="Избранное">
                   <img src={favoritesImg} alt="Избранное" width=""/>
               </Link>
               <Link to="/cart" className="icon-link" aria-label="Корзина">
                   <div>
                    <img src={cartImg}  alt="Корзина" width="" />
                    {/* <div className="cart__num icon-link" id="cart_num">
                    </div> */}
                    </div>
               </Link>
               <Link to="/account" className="icon-link" aria-label="Личный кабинет">
                   <img src={accountImg} className="user" alt="Личный кабинет" width="" />
               </Link>
          </div>
      </div>
   </header>
    ) 
}

export default Header
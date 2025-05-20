import React from "react";
import { Link } from "react-router";



const Header = () => {

    return(
    <header className="header">
       <div className="header__container">
          <div className="header__logo">
              <a href="/">
                 <img src="/assets/img/logo.png" alt="Логотип" width="120" />
              </a>
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
                            <img src="/assets/img/search.png" alt="Поиск" width="24" height="24" />
                        </button>
                    </div>
                </form>
            </div>

          <div className="header__icons">
               <Link to="/" className="icon-link" aria-label="Избранное">
                   <img src="/assets/img/heart.png" alt="Избранное" width=""/>
               </Link>
               <Link to="/cart" className="icon-link" aria-label="Корзина">
                   <div>
                    <img src="/assets/img/cart.png" alt="Корзина" width="" />
                    {/* <div className="cart__num icon-link" id="cart_num">
                    </div> */}
                    </div>
               </Link>
               <Link to="/account" className="icon-link" aria-label="Личный кабинет">
                   <img src="/assets/img/Frame 15.png" className="user" alt="Личный кабинет" width="" />
               </Link>
          </div>
      </div>
   </header>
    ) 
}

export default Header
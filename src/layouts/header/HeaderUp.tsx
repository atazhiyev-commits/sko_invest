import { Link } from "react-router";

import {  Eye, FacebookIcon, Instagram, Menu, Send } from "lucide-react";
import logo from "./../../assets/images/logo/logo.svg"

import './header.scss';

const HeaderUp = () => {
  return (
    <div className="header__UP">
        <div className="header__search">
          <input
          className="search__input"
            type="search"
            name="search_SKO"
            id="searchSKO"
            placeholder="Поиск"
          />
        </div>

        <div className="header__menu">
            <ul className="header__menu-menuList">
                <li className="item-li header-item"><a className="item_link" href="#">Как мы помогаем</a></li>
                <li className="item-li header-item"><a className="item_link" href="#">Защита инвесторов</a></li>
                <li className="item-li header-item"><a className="item_link" href="#">Контакты</a></li>
            </ul>
        </div>
        <nav className="header__nav">
        <Menu className='header__nav-burger' size={32}/>
            <ul className="header__nav-socMedia">
                <li className="socItem"><a className="soc_link" href="https://www.facebook.com/rsk.sko/"><FacebookIcon className='iconMedia' size={20} /></a></li>
                <li className="socItem"><a className="soc_link" href="https://www.instagram.com/sko_kz/"><Instagram className='iconMedia' size={20} /></a></li>
                <li className="socItem"><a className="soc_link" href="https://t.me/s/skonews"><Send className='iconMedia' size={20} /></a></li>
            </ul>
            <ul className="header__nav-global_setting">
                <button className="eyes">
                    <Eye />
                </button>
                <select name='RU' className="language">
                    <option value="ru">RU</option>
                    <option value="kz">KZ</option>
                    <option value="en">EN</option>
                    <option value="chi">CHI</option>
                </select>
            </ul>
                <div className="header__logo">
            <Link to="/" className="header__logo-link">            
                <img src={logo} alt="Logo" />
                <span>SKO</span>
            </Link>
            </div>
        </nav>


      </div>
  )
}

export default HeaderUp
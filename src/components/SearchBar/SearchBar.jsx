import './SearchBar.scss';
import searchIcon from './img/search.svg';
import Link from '../Link/Link';
import UserMenu from '../UserMenu/UserMenu';


const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar__btns-wrapper">
                <div className="search-bar__btn">
                    <Link href="#" text="Anywhere"/>
                </div>
                <div className="search-bar__btn">
                    <Link href="#" text="Any week" />
                </div>
                <div className="search-bar__btn">
                    <Link href="#" text="Add guests" style="light"/>
                </div>
            </div>
            <button className="search-bar__btn-search">
                <img src={searchIcon} alt="search" className="search-bar__search-icon" />
            </button>
        </div>
    );
}


export default SearchBar;

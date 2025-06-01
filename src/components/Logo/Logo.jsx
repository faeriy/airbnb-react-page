import './Logo.scss';
import logo from './img/logo.svg';

function Logo () { 
    return (
        <div className="logo">
            <a href="#" className="logo__link">
                <img src={logo} alt="Logo" className="logo__img" />
            </a>
        </div>
    )
}

export default Logo;

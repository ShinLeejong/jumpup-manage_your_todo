import './header.css';

import logo from "../assets/logo.png";
import get_date from "../logics/get_date";
import date_formatter from "../logics/date_formatter";

const Header = () => {
    const obj_date = get_date();
    const str_formatted_date = date_formatter(obj_date);

    return (
        <header>
            <a href="/">
                <img id="logo" src={logo} alt="logo" />
            </a>
            <a href="/">
                <div className="text-uppercase">jump up</div>
            </a>
            <div>
                {str_formatted_date}
            </div>
        </header>
    );
};

export default Header;
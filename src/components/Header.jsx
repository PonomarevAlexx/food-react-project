import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React Food
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
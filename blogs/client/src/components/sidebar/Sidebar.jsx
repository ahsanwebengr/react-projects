import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8="
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
};


export default Sidebar;
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";

const Home = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;
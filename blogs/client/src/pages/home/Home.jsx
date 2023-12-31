import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const { search } = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(`http://localhost:3000/api/posts${search}`);
            setPosts(resp.data);
        };

        fetchData();
    }, [search]);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;
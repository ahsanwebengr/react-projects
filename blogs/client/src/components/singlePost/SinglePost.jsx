import { Link, useLocation, useNavigate } from "react-router-dom";
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
    const location = useLocation();
    const [post, setPost] = useState({});
    const PF = `localhost:3000/images/`;
    const id = location.pathname.split("/")[2];
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`localhost:3000/api/posts/${post._id}`, { data: { username: user.username } });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getPost = async () => {
            const resp = await axios.get(`http://localhost:3000/api/posts/${id}`);
            setPost(resp.data);
        };
        getPost();
    }, [id]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={PF + post?.photo}
                    alt={post?.title}
                />
                <h1 className="singlePostTitle">
                    {post?.title}
                    {post.username === user?.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                    }
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link className="link" to={`/?user=${post.username}`}>
                                {post?.username}
                            </Link>
                        </b>
                    </span>
                    <span>{new Date(post?.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post?.desc}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
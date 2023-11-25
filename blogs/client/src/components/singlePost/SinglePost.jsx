import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
    const location = useLocation();
    const [post, setPost] = useState({});
    const id = location.pathname.split("/")[2];

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
                    src={post?.photo}
                    alt={post?.title}
                />
                <h1 className="singlePostTitle">
                    {post?.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
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
                    <span>{new Date(post?.createAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post?.desc}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
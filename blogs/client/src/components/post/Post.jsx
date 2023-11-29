import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
    const PF = `localhost:3000/images`;
    return (
        <div className="post">
            <img
                className="postImg"
                src={PF + post?.photo ? post.photo : "https://images.unsplash.com/photo-1700675654221-d9c62be751c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={post?.title}
            />
            <div className="postInfo">
                <div className="postCats">
                    {post?.categories.map((category, index) => (
                        <span className="postCat" key={index}>{category.name}</span>
                    ))}
                </div>
                <span className="postTitle">
                    <Link to={`/post/${[post?._id]}`} className="link">{post?.title}</Link>
                </span>
                <hr />
                <span className="postDate">{new Date(post?.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post?.desc}</p>
        </div>
    );
};

export default Post;
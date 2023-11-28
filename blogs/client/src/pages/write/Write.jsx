import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Write = () => {
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title, desc
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.photo = fileName;
            try {
                const resp = await axios.post(`http://localhost:3000/api/upload`, data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const resp = await axios.post(`http://localhost:3000/api/posts`, newPost);
            navigate(`/post/${resp.data._id}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="write">
            {file && <img
                className="writeImg"
                src={URL.createObjectURL(file)}
                alt=""
            />}

            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;
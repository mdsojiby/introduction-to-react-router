import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id,title}=post;

    const postStyle={
        border:'2px solid yellow',
        margin:'10px',
        borderRadius:'20px'
    }

    return (
        <div style={postStyle}>
            <h2>Id:{id}</h2>
            <p>{title}</p>
            <Link to={`/post ${id}`}>Post Detal</Link>
        </div>
    );
};

export default Post;
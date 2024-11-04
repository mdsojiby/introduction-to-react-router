import { useLoaderData } from "react-router-dom";


const PostDetals = () => {

    const post=useLoaderData()
    const {id,title,body}=post;
    return (
        <div>
            <h2>Id:{id}</h2>
            <p>
               Title: {title}
            </p>
            <p><small> Body:{body}</small></p>
        </div>
    );
};

export default PostDetals;
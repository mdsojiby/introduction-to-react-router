import { useLoaderData } from "react-router-dom";


const UserDetals = () => {
    const user=useLoaderData();
    const{name,website}=user
    return (
        <div>
           <h2>Detals of all user:{name}</h2> 
           <p>Website:{website}</p>
        </div>
    );
};

export default UserDetals;
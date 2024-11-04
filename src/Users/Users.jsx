import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'



const Users = () => {

    const users=useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>This is users:{users.length}</h2>
            <p>contact all user</p>

            <div className="users">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                    
                }
            </div>
        </div>
    );
};

export default Users;
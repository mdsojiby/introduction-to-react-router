import { Link } from "react-router-dom";


const User = ({user}) => {

    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid yellow',
        margin:'10px',
        borderRadius:'20px'
    }
    return (
   <div style={userStyle}>
    <h2>{name}</h2>
    <p>Email;{email}</p>
    <p>Phone:{phone}</p>
    <Link to={`/user/${id}`}> Show Detals</Link>
    <Link to={`/user/${id}`}><button>click me</button></Link>

   </div>
    );
};

export default User;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext} from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
        .then( () =>{})
        .catch(error => console.error(error));
    }
    return (
        <div>
    <div className="navbar bg-primary text-primary-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">Awsome Auth</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
    {user?.email  &&  <span>welcome, {user.email}</span>}
    <button onClick={handleSignOut} className="btn btn-sm">log out</button>

</div>
        </div>
    );
};

export default Header;
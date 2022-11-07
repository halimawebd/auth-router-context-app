import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <div className="navbar bg-primary text-primary-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">Awsome Auth</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
</div>
        </div>
    );
};

export default Header;
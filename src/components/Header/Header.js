import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';

const Header = () => {
    return (
        <div>
            <h3>Welcome to my  <b>Routing</b> website with Header</h3>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
               <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/post'>Post</CustomLink>
                 <Link to="/countries">countries</Link>
                  
            </nav>
        </div>
    );
};

export default Header;
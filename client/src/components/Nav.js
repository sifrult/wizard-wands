import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <ul>
            <li>
                <Link to='/WelcomePage'>
                    Welcome
                </Link>
            </li>
            <li>
                <Link to='/Hello'>
                    Hello
                </Link>
            </li>
            <li>
                <Link to='/Store'>
                    Store
                </Link>
            </li>
        </ul>
    )
}

export default Nav;

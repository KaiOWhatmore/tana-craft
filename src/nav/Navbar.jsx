import {useState} from "react";
import {Link} from "react-router-dom"; 

function NavBar() { 
    // adding states 
    const [isActive, setIsActive] = useState(false); 

    // add active class 
    const toggleActiveClass = () => {
        setIsActive(!isActive)
    };

    // clean up function to remove the active class 
    const removeActive = () => { 
        setIsActive(false);
    }

    return (
        <nav className>
            <Link to="/" className> 
                Logo
            </Link>
            <ul>
                <li onLClick={removeActive}>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li onLClick={removeActive}>
                    <Link to="/furniture">
                        furniture
                    </Link>
                </li>
                <li onLClick={removeActive}>
                    <Link to="/restoration">
                        Restoration
                    </Link>
                </li>
                <li onLClick={removeActive}>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
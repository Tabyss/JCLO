import React, { useContext } from "react";
import Logo from "../../../assets/img/JCLo.png";
import { RiShoppingBag4Line } from "react-icons/ri";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

function Navbar() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const HandleSignOut = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

    return (
        <div className="nav">
            <ul className="nav-left">
                <li><Link to="/collection">Product</Link></li>
                <li>Category</li>
            </ul>
            <img src={Logo} />
            <ul className="nav-right">
                {currentUser ? (
                    <li className="profile" onClick={signOutUser}>
                        <img src={currentUser?.photoURL} />
                    </li>
                ) : (
                    <li className="link">
                        <Link to="/login">log In</Link>
                    </li>
                )}
                <li className="cart">
                    <RiShoppingBag4Line size="20px" />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

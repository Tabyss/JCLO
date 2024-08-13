import React, { useContext, useState } from "react";
import "./login.scss";
import { FaGoogle } from "react-icons/fa";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import Navbar from "../Home/components/Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formFields, setFormFields] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate()

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        navigate('/')
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
            setCurrentUser(user);
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-main">
                    <div className="login-form">
                        <div className="form-field">
                            <label>username</label>
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                value={email}
                            />
                        </div>
                        <div className="form-field">
                            <label>password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={password}
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Enter</button>
                    </div>
                    <div className="divider"></div>
                    <div className="login-gateway">
                        <button onClick={logGoogleUser}>
                            <FaGoogle className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

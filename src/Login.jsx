import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const onLogin = () => {
        if (credentials.username === "Kunal" && credentials.password === "Kunal@123") {
            dispatch(login(credentials.username));
            navigate('/home');
        } else {
            alert("Enter the correct credentials");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" name="username" value={credentials.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
                </div>
                <button className="btn btn-primary w-100" onClick={onLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;

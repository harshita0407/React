import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
        setMessage("Please fill in all fields");
        } else {
        setMessage("Login successful!");
        }
    };
    
    return (
        <div>
        <h2 >Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        
        <button
            type="submit"
        >
            Login
        </button>
        </form>
        {message && <p>{message}</p>}
        </div>
    );
}

export default Login;


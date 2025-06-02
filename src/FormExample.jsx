import React, { useState } from "react";

const FormExample = () => {
    const [username, setUsername] = useState(""); // Initial state is an empty string ''
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    // const handleChange = (event) => {
    //     const inputEl = event.target;
    //     setUsername(inputEl.value);
    // };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePhoneChange = (event) => {
        //remove strings-only digits
        const num = event.target.value.replace(/\D/g, "");//regular expression (regex)
        //\D matches non-digits and \d matched digits 0-9 and g is global flag
        setPhone(num);
    };

    const validatePassword = () => {
        if (password.length < 8) {
            return "Password must be at least 8 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must cotain at least one capital letter.";
        }
        if (!/[!@#$%&*?/]/.test(password)) {
            return "Password must contain at least one special character.";
        }
        return "";
    };

    

    // const handleChange1 = (event) => {
    //     const inputEl1 = event.target;
    //     setPassword(inputEl1.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        const passwordError = validatePassword();
        if (passwordError) {
            setError(passwordError);
            return;
        }

        setError(""); // remove any previous errors
        
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify({ username: username }),
        });

        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify({ password: password}),
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your username:
                    <input 
                    type="username" 
                    name="username" 
                    value={username}
                    onChange={handleUsernameChange}
                    />
                </label>

                <label>
                    Enter your password:
                    <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </label>

                <label>
                    Enter your Phone Number:
                    <input 
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    />
                </label>

                {error && <p className="error">{error}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormExample;
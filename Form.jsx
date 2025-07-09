import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    let handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value
        }));
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
                placeholder="Enter full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />
            <br /><br />

            <label htmlFor="username">Username</label>
            <input
                placeholder="Enter username"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />
            <br /><br />

            <label htmlFor="password">Password</label>
            <input
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleInputChange}
            />
            <br /><br />

            <button type="submit">Submit</button>
        </form>
    );
}

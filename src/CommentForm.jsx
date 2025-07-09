import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData( {
        username: "",
        remark: "",
        rating: 5
    }
        )
    };

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                />
                <br /><br />

                <label htmlFor="remark">Remarks</label>
                <textarea
                    name="remark"
                    value={formData.remark}
                    placeholder="add few remarks"
                    onChange={handleInputChange}
                    id="remark"
                />
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    id="rating"
                />
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
const PostData = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const initData = {
        name: "",
        emai: "",
    };
    const handleSubmit = (e) => {
        e.preventDefault()
    const postData = () => {
        axios
            .post("url", initData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        };
            postData();
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default PostData;

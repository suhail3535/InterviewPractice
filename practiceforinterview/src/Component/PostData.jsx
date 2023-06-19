import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostData = () => {
    const [user, setUser] = useState([])
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const newData = {
        name: name,
        age: age,
        course: course
    };

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:8080/product", newData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //get request
    const getData = async () => {
        try {
            let userData = await axios.get("http://localhost:8080/product").then((res) => {
                console.log("getuser", res.data)
                setUser(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }




    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/product/${id}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = (id) => {
        deleteData(id);
    window.location.reload()
    };


    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
        window.location.reload()
    };

    return (
        <div>
            <h1>UserData</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label>Age:</label>
                <input type="text" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} required /><br />
                <label>Course:</label>
                <input type="text" placeholder='course' value={course} onChange={(e) => setCourse(e.target.value)} required /><br />
                <input type="submit" />
            </form>
            <hr />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
                {user.map((item) => {
                    return <div style={{ border: "1px dotted gray", padding: "10px", textAlign: "center" }}>
                        <h1>{item.name}</h1>
                        <p>{item.age}</p>
                        <p>{item.course}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                })}
            </div>



        </div>
    );
};

export default PostData;

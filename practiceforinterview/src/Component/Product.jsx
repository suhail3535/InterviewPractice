import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Product = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        try {
            axios.get("https://fakestoreapi.com/products").then((res) => {
                console.log(res.data)
                setData(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return <div style={{border:"1px solid gray",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"2rem"}}>

        {data.map((ele) => {
            return <Card key={ele.id} {...ele} />
})}

    </div>;
};

export default Product;

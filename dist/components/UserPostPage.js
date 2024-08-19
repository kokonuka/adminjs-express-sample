// components/UserPostPage.tsx
import React, { useEffect, useState } from 'react';
import { ApiClient } from 'adminjs';
const api = new ApiClient();
const UserPostPage = () => {
    const [data, setData] = useState([]);
    console.log("data", data);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.getPage({ pageName: 'userPost' });
            console.log(response.data.data);
            setData(response.data.data);
        };
        fetchData();
    }, []);
    return (React.createElement("div", null,
        React.createElement("h1", null, "User-Post Data"),
        data.map(user => (React.createElement("div", { key: user.id },
            React.createElement("h2", null, user.name),
            React.createElement("ul", null, user.posts.map(post => (React.createElement("li", { key: post.id },
                post.title,
                ": ",
                post.content)))))))));
};
export default UserPostPage;

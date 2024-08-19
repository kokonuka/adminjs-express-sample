// components/UserPostPage.tsx
import React, { useEffect, useState } from 'react';
import { ApiClient } from 'adminjs';

const api = new ApiClient();

interface Post {
  id: string;
  title: string;
  content: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  posts: Post[];
}

interface ApiResponse {
  data: User[];
}

const UserPostPage: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  console.log("data", data)

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getPage<ApiResponse>({ pageName: 'userPost' });
      console.log(response.data.data)
      setData(response.data.data as User[]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User-Post Data</h1>
      {data.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <ul>
            {user.posts.map(post => (
              <li key={post.id}>
                {post.title}: {post.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserPostPage;
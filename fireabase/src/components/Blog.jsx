// src/components/Blog.js
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsCollection = db.collection('posts');
                const snapshot = await postsCollection.get();
                const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded shadow">
                        <img src={post.image} alt={post.title} className="mb-4 rounded" />
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <h3 className="text-lg text-gray-600 mb-2">{post.subtitle}</h3>
                        <p className="text-gray-600 mb-2">By {post.author}</p>
                        <p className="text-gray-800 mb-4">{post.content}</p>
                        <div className="flex space-x-2">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;

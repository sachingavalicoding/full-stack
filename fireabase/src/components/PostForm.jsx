// src/components/PostForm.js
import { useState } from 'react';
import { db } from '../firebase/config';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postsCollection = db.collection('posts');
            await postsCollection.add({
                title,
                subtitle,
                author,
                content,
                tags: tags.split(',').map(tag => tag.trim()), // Trim each tag to remove leading/trailing spaces
                image,
            });

            // Clear the form fields after submission
            setTitle('');
            setSubtitle('');
            setAuthor('');
            setContent('');
            setTags('');
            setImage('');
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Subtitle</label>
                    <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Tags (comma-separated)</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Post
                </button>
            </form>
        </div>
    );
};

export default PostForm;

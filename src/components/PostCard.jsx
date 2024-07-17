import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostCard({ $id, title, featuredImage, userId }) {
    const loggedInUserId = useSelector((state) => state.auth.userData?.$id);

    const handleDelete = async () => {
        try {
            await appwriteService.deletePost($id);
            // You may also want to update the state to remove the deleted post from the UI
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    return (
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <Link to={`/post/${$id}`}>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </Link>
            {loggedInUserId === userId && (
                <div className="flex space-x-2 mt-2">
                    <Link to={`/edit-post/${$id}`} className="text-blue-500">Edit</Link>
                    <button onClick={handleDelete} className="text-red-500">Delete</button>
                </div>
            )}
        </div>
    );
}

export default PostCard;

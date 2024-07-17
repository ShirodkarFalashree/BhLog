import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { Query } from 'appwrite'; 

function Profile() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts([Query.equal('userId', userData.$id)]).then((response) => {
                if (response) {
                    setPosts(response.documents);
                }
            });
        }
    }, [userData]);

    if (!userData) {
        return <div>No posts yet !! <br /> click on add post to create your new post </div>;
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className='text-2xl font-bold mb-4'>My Posts</h1>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} userId={userData.$id} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Profile;

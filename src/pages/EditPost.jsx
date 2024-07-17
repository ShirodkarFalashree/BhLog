import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from "../appwrite/config";
import { Input, Button, RTE, Select } from '../components';

function EditPost() {
    const { id } = useParams();
    const { register, handleSubmit, setValue, control } = useForm();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        appwriteService.getPost(id).then((response) => {
            setPost(response);
            setValue('title', response.title);
            setValue('slug', response.$id);
            setValue('content', response.content);
            setValue('status', response.status);
        });
    }, [id, setValue]);

    const submit = async (data) => {
        try {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                await appwriteService.deleteFile(post.featuredImage);
            }

            const updatedPost = await appwriteService.updatePost(id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage,
            });

            if (updatedPost) {
                navigate(`/post/${updatedPost.$id}`);
            }
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input label="Title :" placeholder="Title" className="mb-4" {...register("title", { required: true })} />
                <Input label="Slug :" placeholder="Slug" className="mb-4" {...register("slug", { required: true })} />
                <RTE label="Content :" name="content" control={control} defaultValue={post.content} />
            </div>
            <div className="w-1/3 px-2">
                <Input label="Featured Image :" type="file" className="mb-4" accept="image/*" {...register("image")} />
                {post.featuredImage && (
                    <div className="w-full mb-4">
                        <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
                    </div>
                )}
                <Select options={["active", "inactive"]} label="Status" className="mb-4" {...register("status", { required: true })} />
                <Button type="submit" bgColor="bg-green-500" className="w-full">Update</Button>
            </div>
        </form>
    );
}

export default EditPost;

import conf from "../conf/conf";

import { Client, Account, ID,Databases,Storage,Query } from "appwrite";


export class Service{
    client= new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
           return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,content,featuredImage,status,userId
            }
           )
        } catch (error) {
            console.log("error in create post",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,content,featuredImage,status
                }
            )
        } catch (error) {
            console.log("error in updating post ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("error in deleting the post ",error);
            return false
        }
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,conf.slug
            )
        } catch (error) {
            console.log("error in getting a  single post (getPost)",error);
        }
    }

    async getPosts(queries =[Query.equal("statue","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
              
            )
        } catch (error) {
            console.log("error in getPosts ",error);
            return false
        }
    }

    // file uploading services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error in uploading file ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("error while deleting the file ",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket,this.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service();

export default service
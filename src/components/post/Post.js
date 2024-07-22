import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {blogPosts} from "../../utilities/BlogsApi";

const Post = () => {
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(() => {
        setPost(blogPosts.find(post => post.id === parseInt(postId)))
    }, [postId]);

    console.log(post)

    return (
        <div className={"w-1/2 m-auto mt-5 p-6"}>
            <h1 className={"text-3xl font-bold text-center"}>{post.blogTitle}</h1>

            <div className={"border-b border-t p-1 mt-2 flex justify-between items-center"}>
                <div>
                    <img className={"w-10 h-10 rounded-full inline"} src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="created user avatar"/>
                    <p className={"inline ml-3"}>{post.createBy}</p>
                </div>
                <div>
                    <p>{post.createAt}</p>
                </div>
            </div>

            <div>
                <p className={"mt-5 text-justify"}>{post.blogDescription}</p>
            </div>
        </div>
    );
};

export default Post;
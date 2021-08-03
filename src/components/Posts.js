import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <div className="postgroup">
           {posts.map((article, index) => <Post key={index} article={article} /> )}
        </div>
    )
}

export default Posts

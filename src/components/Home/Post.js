import React, { Component } from 'react';

const Post = (props) => {
    const tags = props.tags.map((tag, key) => {
        return <div key={key} className={`tag tag-${tag.slug}`}>{tag.name}</div>
    })

    return (
            <div className="post">
                <a href={`http://cecilycodes.com${props.url}`}>
                    {props.title}
                </a>
                <div>{tags}</div>
            </div>
            );
}

export default Post;
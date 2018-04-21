import React, { Component } from 'react';
import styles from './Home.scss'

const Post = (props) => {
    const tags = props.tags.map((tag, key) => {
        return <div key={key} className={styles.tag}>
            <div className={styles.dot}></div>
            {tag.name}
        </div>
    })

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(props.date)
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    return (
            <div className={styles.post}>
                <div>
                    <a href={`https://cecilycodes.com${props.url}`}>
                        {props.title}
                    </a>
                </div>

                <div className={styles.postInfo}>
                    <strong>{formattedDate}</strong> | {tags}
                </div>

            </div>
            );
}

export default Post;
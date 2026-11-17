import React, { useState } from 'react'

export default function LikeButton() {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(10);

    function handleLikes(){
        setLiked(!liked)
        setLikes((n) => (liked ? n-1 : n + 1))
    }


  return (
    <div>
        <button
        onClick = {() => handleLikes()}
         className={`btn ${liked ? "btn-danger": "btn-outline-danger"}`}>
            {liked ? "❤️" : "🤍"} {likes} Likes
        </button>
    </div>
  )
}

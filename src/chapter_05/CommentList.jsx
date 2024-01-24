import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요!",
    },
    {
        name: "유재석",
        comment: "어서오세요~",
    },
    {
        name: "이혜리",
        comment: "안녕이라고 말하지마",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;

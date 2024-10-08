import React from 'react';
import '@styles/common/Post.css'
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";

const Post: React.FC = () => {
    return (
        <div className="post">
            <div className="post__head">
                <h3 className="post__title">
                    Сцена - единая платформа для проведения хакатонов
                </h3>
                <IconButton className="post__close">
                    <CloseIcon/>
                </IconButton>
            </div>
            <div className="post__text">
                Жюри может оценивать участников, а участники получить обратную связь от жюри
            </div>
        </div>
    );
};

export default Post;
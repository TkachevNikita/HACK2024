import React from 'react';
import Post from "@components/common/Post.tsx";
import {TextField} from "@mui/material";
import '@styles/pages/Home.css';
import Box from "@mui/material/Box";

const Home: React.FC = () => {
    return (
        <>
            <Post/>
            <Box sx={{display: 'flex', justifyContent: 'space-between '}}>
                <h2 className="home__title">
                    Ближайшие события
                </h2>
                <TextField label="Поиск ближайших событий" variant="outlined" sx={{width: '30%'}}/>
            </Box>
        </>
    );
};

export default Home;
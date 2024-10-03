import React from 'react';
import PageContainer from "@components/ui/PageContainer.tsx";
import Post from "@components/common/Post.tsx";
import {TextField} from "@mui/material";
import '@styles/pages/Home.css';

const Home: React.FC = () => {
    return (
        <PageContainer>
            <Post/>
            <h2 className="home__title">
                Ближайшие события
            </h2>
            <TextField label="Поиск ближайших событий" variant="outlined" sx={{ width: '100%', borderRadius: 50 }} />
        </PageContainer>
    );
};

export default Home;
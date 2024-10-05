import React from 'react';
import Post from "@components/common/Post.tsx";
import {TextField} from "@mui/material";
import '@styles/pages/Home.css';
import Event from "@components/common/Event.tsx";
import {eventsMock} from "@shared/mocks/events-mock.ts";

const Home: React.FC = () => {
    return (
        <>
            <Post/>
            <div className="home__head">
                <h2 className="home__title">
                    Ближайшие события
                </h2>
                <TextField label="Поиск ближайших событий" variant="outlined" className="home__search"/>
            </div>
            <div className="home__events">
                {eventsMock.map((event) =>
                    <Event key={event.id} event={event}/>
                )}
            </div>
        </>
    );
};

export default Home;
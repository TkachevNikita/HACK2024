import React from 'react';
import '@styles/common/Event.css'
import { IEvent } from '../../types/event';

interface EventProps {
    event: IEvent
}

const Event: React.FC<EventProps> = ({ event }) => {
    return (
        <div className="event">
            <img src={event.photo} className="event__image"/>
            <div className="event__description">
                <h3 className="event__title">
                    {event.title}
                </h3>
                <div className="event__info">
                    <div className="event__company">
                        <img src={event.company.photo} className="event__company-img"/>
                        <span className="event__company--title">{event.company.name}</span>
                    </div>
                    <span style={{ fontSize: 16 }}>·</span>
                    <span className="event__date">{event.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Event;
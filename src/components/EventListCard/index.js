import React from 'react';
import './index.css';

const EventListCard = ({event}) =>
<ul key={event.id} className="eventListCard">
    <li className="eventListCardName">{event.title}</li>
    <li className="eventListCardDescription">{event.description}</li>
    <li className="eventListCardDate" key={event.id} >{event.date}</li>
    <li className="eventListCardAuthor" key={event.author}>{event.author}</li>
    <div className="eventListCardPeople">
        <li>{event.attendees}</li>
        <span>of</span>
        <li>{event.capacity}</li>
    </div>
    <button className="eventListCardButton" onClick={() => {this.eventAction(event)}}>{event.button}</button>
</ul>

export default EventListCard;
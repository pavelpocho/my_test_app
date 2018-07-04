import React from 'react';
import './index.css';

const EventTileCard = ({event}) =>
<ul key={event.id} className="eventTileCard">
<li className="eventTileCardDate" key={event.id} >{event.date}</li>
    <li className="eventTileCardName">{event.title}</li>
    <li className="eventTileCardAuthor" key={event.author}>{event.author}</li>
    <li className="eventTileCardDescription">{event.description}</li>
    <div className="eventTileCardPeople">
        <i className="material-icons">person</i>
        <li>{event.attendees}</li>
        <span>of</span>
        <li>{event.capacity}</li>
    </div>
    <button className="eventTileCardButton" onClick={() => {this.eventAction(event)}}>{event.button}</button>
</ul>

export default EventTileCard;
import React, { Component } from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import EventCreator from '../EventCreator/index.js';
import EventTileCard from '../EventTileCard/index.js';

export default class TileView extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const arr = this.props.data.map((event, index) => {
      return (
        <EventTileCard key={index} event={event}/>
        );
      })

    return (
      <div className="eventTileView">
        {arr}
      </div>
    );
  }
}
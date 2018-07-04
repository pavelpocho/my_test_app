import React, { Component } from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import EventCreator from '../EventCreator/index.js';
import EventListCard from "../EventListCard/index.js";

export default class ListView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    for (var i = 0; i < this.props.data.length; i++) {
      setTimeout((index) => {
        document.getElementsByClassName("eventListCard")[index].style.transform = 'scale(1, 1)';
        document.getElementsByClassName("eventListCard")[index].style.opacity = '1';
      }, i * 50, i);
    }
  }

  render() {

    const arr = this.props.data.map((event, index) => {
      return (
        <EventListCard key={index} event={event}/>
        );
      })

    return (
      <div className="eventListView">
        {arr}
        <span/>
      </div>
    );
  }
}
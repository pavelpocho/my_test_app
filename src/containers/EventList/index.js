import React, { Component } from 'react';
import data from '../../data/users.js';
import './index.css'
import FloatingActionButton from '../../components/FloatingActionButton/index.js';
import UserWidget from '../../components/UserWidget/index.js';
import ListView from '../../components/ListView/index.js';
import TileView from '../../components/TileView/index.js';
import Header from '../../components/Header/index.js';
import EventListSubHeader from '../../components/EventListSubHeader/index.js';


class EventList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewType: 0,
      opaqueTopBar: false
    }
  }

  componentDidMount() {
    window.onscroll = e => {
      this.setState({
        opaqueTopBar: window.scrollY > 10
      })
    }
  }

  setLayout(type) {
    console.log("Setting layout type to" + type);
    this.setState({
      viewType: type
    })
  }

  render() {

    const view = this.state.viewType == 1 ? <ListView data={data}/> : <TileView data={data}/>;

    return (
        <div className="container">
        <span/>
          <Header titleColor="black"/>
          <EventListSubHeader eventList={this}/>
          <div className="wrapper">
            {view}
          </div>
          <FloatingActionButton />
        </div>
    );
  }
}

export default EventList;

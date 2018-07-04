import React, { Fragment } from 'react'
import "./index.css";

class EventCreator extends React.Component {

	constructor(props) {
		super(props);
	}

	closeDialog() {
		this.props.parent.closeDialog();
	}

  	render() {

  		const def = {
  			name: "",
  			author: "",
  			description: "",
  			capacity: ""
  		}

  		if (this.props.default != undefined) {
  			def.name = this.props.default.name;
  			def.author = this.props.default.author;
  			def.description = this.props.default.description;
  			def.capacity = this.props.default.capacity;
  		}

  		const title = this.props.default == undefined ? "Create event" : "Edit event";

  		return(
  			<React.Fragment>
	  			<div className="createEvent" style={{marginTop: ((window.innerHeight - 500) / 2) + "px", marginLeft: ((window.innerWidth - 600) / 2) + "px"}}>
	  				<p>{title}</p>
	  				<ul>
		  				<li>
		  					<p>Name</p>
		  					<input type="text" defaultValue={def.name}/>
		  				</li>
		  				<li>
		  					<p>Author name</p>
		  					<input type="text" defaultValue={def.author}/>
		  				</li>
		  				<li>
		  					<p>Description</p>
		  					<textarea cols="19" rows="1" defaultValue={def.description}/>
						</li>
		  				<li>
		  					<p>Date</p>
		  					<input type="date"/>
						</li>
						<li>
		  					<p>Time</p>
		  					<input type="time"/>
						</li>
						<li>
		  					<p>Capacity</p>
		  					<input type="number" defaultValue={def.capacity}/>
						</li>
	  				</ul>
	  				<button className="saveEvent">Save event</button>
	  			</div>
	  			<div className="windowBackground" onClick={() => {this.closeDialog()}}>
  				</div>
  			</React.Fragment>
  		);
  	}
}

export default EventCreator;

import React from 'react';
import './index.css';

class EventListSubHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            viewPickerOpen: false,
            viewPicked: 0,
            layoutPicked: 0
        }
    }

    toggleDropdown = () => {
        this.setState((prevState) => {
            return {viewPickerOpen: !prevState.viewPickerOpen}
        });
    }

    setView = (view) => {
        this.toggleDropdown();
        this.setState({
            viewPicked: view
        })
    }

    setLayout = (type) => {
        this.setState({
            layoutPicked: type
        });
        this.props.eventList.setLayout(type);
    }

    render() {

        const className = this.state.viewPickerOpen ? "dropdownWrap dropdownOpen" : "dropdownWrap";
        const buttonClassName = this.state.viewPickerOpen ? "dropdown dropdownRotated" : "dropdown";

        return (
            <div className="eventListSubHeader">
                <div className="viewPicker">
                    <p>Show:</p>
                    <div className={className}>
                        <div className="dropdownMenu">
                            <button 
                                style={{color: this.state.viewPicked == 0 ? "#505050" : "#909090", order: this.state.viewPicked == 0 ? "1" : "2"}}
                                onClick={() => {this.setView(0)}}
                            >All events</button>
                            <button 
                                style={{color: this.state.viewPicked == 1 ? "#505050" : "#909090", order: this.state.viewPicked == 1 ? "1" : "2"}}
                                onClick={() => {this.setView(1)}}
                            >Future events</button>
                            <button 
                                style={{color: this.state.viewPicked == 2 ? "#505050" : "#909090", order: this.state.viewPicked == 2 ? "1" : "2"}}
                                onClick={() => {this.setView(2)}}
                            >Past events</button>
                        </div>
                    </div>
                    <button className={buttonClassName} onClick={this.toggleDropdown}>
                        <i className="material-icons">arrow_drop_down</i>
                    </button>
                </div>
                <div className="layoutPicker">
                    <button className="viewTiles" onClick={() => {this.setLayout(0)}} style={{color: this.state.layoutPicked == 1 ? "#c5c5c5" : ""}}>
                        <i className="material-icons">view_module</i>
                    </button>
                    <button className="viewList" onClick={() => {this.setLayout(1)}} style={{color: this.state.layoutPicked == 0 ? "#c5c5c5" : ""}}>
                        <i className="material-icons">view_stream</i>
                    </button>
                </div>
            </div>
        )
    }

}


export default EventListSubHeader;
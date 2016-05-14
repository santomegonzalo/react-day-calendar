/*
Row and Events container, this component could be smarter and render more 
row depends on which range the user select (out of this scope)
*/

'use strict';

import React from 'react';

import EventsComponent from './events';

const CalendarContainerComponent = React.createClass({
    
    render() {
        return (
            <div className="calendar-container">
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <div className="container-hours"></div>
                <EventsComponent />
            </div>
        );
    }
});

export default CalendarContainerComponent;

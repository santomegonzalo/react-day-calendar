/*
Times components, this is just the component to handle the times column,
its a simple and could be smarter to extend it like select the range 
from 9am to 12pm but that it's not on this scope
*/

'use strict';

import React from 'react';

const CalendarTimesComponent = React.createClass({
    render() {
        return (
            <div className="calendar-times">
                <div className="times-hours">
                    9:00 <span>AM</span>
                </div>
                <div className="times-half">
                    9:30
                </div>
                <div className="times-hours">
                    10:00 <span>AM</span>
                </div>
                <div className="times-half">
                    10:30
                </div>
                <div className="times-hours">
                    11:00 <span>AM</span>
                </div>
                <div className="times-half">
                    11:30
                </div>
                <div className="times-hours">
                    12:00 <span>PM</span>
                </div>
                <div className="times-half">
                    12:30
                </div>
                <div className="times-hours">
                    1:00 <span>PM</span>
                </div>
                <div className="times-half">
                    1:30
                </div>
                <div className="times-hours">
                    2:00 <span>PM</span>
                </div>
                <div className="times-half">
                    2:30
                </div>
                <div className="times-hours">
                    3:00 <span>PM</span>
                </div>
                <div className="times-half">
                    3:30
                </div>
                <div className="times-hours">
                    4:00 <span>PM</span>
                </div>
                <div className="times-half">
                    4:30
                </div>
                <div className="times-hours">
                    5:00 <span>PM</span>
                </div>
                <div className="times-half">
                    5:30
                </div>
                <div className="times-hours">
                    6:00 <span>PM</span>
                </div>
                <div className="times-half">
                    6:30
                </div>
                <div className="times-hours">
                    7:00 <span>PM</span>
                </div>
                <div className="times-half">
                    7:30
                </div>
                <div className="times-hours">
                    8:00 <span>PM</span>
                </div>
                <div className="times-half">
                    8:30
                </div>
                <div className="times-hours">
                    9:00 <span>PM</span>
                </div>
            </div>
        );
    }
});

export default CalendarTimesComponent;

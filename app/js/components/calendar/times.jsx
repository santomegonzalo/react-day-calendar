/*
Times components, this is just the component to handle the times column,
its a simple and could be smarter to extend it like select the range 
from 9am to 12pm but that it's not on this scope
*/

'use strict';

import React from 'react';

const CalendarTimesComponent = React.createClass({
    getDefaultProps() {
        return {
            start: 9,
            end: 21
        };
    },

    render() {
        let _times = [];

        for( let i = this.props.start; i <= this.props.end; i++ ) {
            let _target = i <= 12 ? 'AM':'PM';
            let _hour = i;

            if( _hour > 12 ) {
                _hour = _hour - 12;
            }

            _times.push(
                <div className="times-hours" key={`time_key_${i}`}>
                    {`${_hour}:00`} <span>{_target}</span>
                </div>
            );
            _times.push(
                <div className="times-half" key={`time_half_key_${i}`}>
                    {`${_hour}:30`}
                </div>
            );
        }

        return (
            <div className="calendar-times">
                {_times}
            </div>
        );
    }
});

export default CalendarTimesComponent;

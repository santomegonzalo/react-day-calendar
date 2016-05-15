'use strict';

import React from 'react';

import Times from './calendar/times';
import Container from './calendar/container';

const CalendarComponent = React.createClass({
    
    getDefaultProps() {
        return {
            start: 9,
            end: 21
        };
    },

    render() {
        return (
            <div className="calendar">
                <Times start={this.props.start} end={this.props.end}/>
                <Container start={this.props.start} end={this.props.end}/>
            </div>
        );
    }
    
});

export default CalendarComponent;

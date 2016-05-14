'use strict';

import React from 'react';

import Times from './calendar/times';
import Container from './calendar/container';

const CalendarComponent = React.createClass({
        
    render() {
        return (
            <div className="calendar">
                <Times />
                <Container />
            </div>
        );
    }
    
});

export default CalendarComponent;

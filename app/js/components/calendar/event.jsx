/*
Event component.
The component will define where he need to appear in the screen,
every event is independent to the others
*/

'use strict';

import React from 'react';

const CalendarContainerComponent = React.createClass({
    getDefaultProps () {
        return {
            title: 'Sample item',
            location: 'Sample location'
        };
    },

    render() {
        var _style = {
            width: `calc(${100 / this.props.overlap}% - 4px)`,
            left: `${(100 / this.props.overlap) * this.props.position}%`,
            top: this.props.event.get('start'),
            height: this.props.event.get('end') - this.props.event.get('start')
        };

        return (
            <div className="calendar-event" style={_style}>
                <h1>{this.props.title}</h1>
                <span>{this.props.location}</span>
            </div>
        );
    }
});

export default CalendarContainerComponent;

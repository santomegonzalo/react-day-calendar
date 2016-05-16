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
        const _style = {
            width: `calc(${100 / this.props.overlap}% - 4px)`,
            left: `${(100 / this.props.overlap) * this.props.position}%`,
            top: this.props.event.start,
            height: this.props.event.end - this.props.event.start
        };

        return (
            <div className="calendar-event" style={_style} onClick={this.handleSelectEvent}>
                <h1>{this.props.title}</h1>
                <span>{this.props.location}</span>
            </div>
        );
    },

    handleSelectEvent(e) {
        e.preventDefault();
        if( this.props.onSelectEvent ) {
            this.props.onSelectEvent(this.props.event);
        }
    }
});

export default CalendarContainerComponent;

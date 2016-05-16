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
                {this._rows()}
                <EventsComponent events={this.props.events} onSelectEvent={this.props.onSelectEvent}/>
            </div>
        );
    },

    _rows() {
        const _rows = [];

        for( let i = 0; i < this.props.end - this.props.start; i++ ) {
            _rows.push(<div className="container-hours" key={`key_row_${i}`}></div>);
        }

        return _rows;
    }
});

export default CalendarContainerComponent;

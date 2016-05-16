/*
Events manager.
This component will be listening every change in the structure of events
and will execute the render with the new events.
*/

'use strict';

import React from 'react';
import EventComponent from './event';

const CalendarEventsComponent = React.createClass({
    
    render() {
        let _eventsComponents = [];

        for (const key in this.props.events) {
            if( this.props.events.hasOwnProperty(key) ) {
                let _position = 0;
                const _events = this.props.events[key];
                _eventsComponents = _eventsComponents.concat(_events.map((_event) => {
                    const _key = `event_key_${Math.random()}`;
                    const _component = (<EventComponent event={_event} key={_key} overlap={_events.length} position={_position} title={_event.title} location={_event.location}/>);
                    _position++;
                    return _component;
                }));
            }
        }

        return (
            <div className="calendar-container-events">
                {_eventsComponents}
            </div>
        );
    }
});

export default CalendarEventsComponent;

/*
Events manager.
This component will be listening every change in the structure of events
and will execute the render with the new events.
*/

'use strict';

import React from 'react';

import CalendarStore from '../../stores/calendarStore';
import EventComponent from './event';

const CalendarEventsComponent = React.createClass({
    getInitialState() {
        return {
            events: CalendarStore.events()
        };
    },

    componentDidMount() {
        CalendarStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        CalendarStore.removeChangeListener(this._onChange);
    },
    
    render() {
        let _eventsComponents = this.state.events.valueSeq().map(( _events ) => {
            let _position = 0;
            return _events.map((_event) => {
                let _key = `event_key_${Math.random()}`;
                let _component = (<EventComponent event={_event} key={_key} overlap={_events.size} position={_position} title={_event.get('title')} location={_event.get('location')}/>);
                _position++;
                return _component;
            });
        });

        return (
            <div className="calendar-container-events">
                {_eventsComponents}
            </div>
        );
    },

    _onChange() {
        this.setState({
            events: CalendarStore.events()
        });
    }
});

export default CalendarEventsComponent;

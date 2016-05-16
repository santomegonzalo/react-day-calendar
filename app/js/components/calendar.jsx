'use strict';

import React from 'react';

import Times from './calendar/times';
import Container from './calendar/container';

const CalendarComponent = React.createClass({
    propTypes: {
        events: React.PropTypes.array.isRequired,
        start: React.PropTypes.number.isRequired,
        end: React.PropTypes.number.isRequired
    },

    render() {
        return (
            <div className="calendar">
                <Times start={this.props.start} end={this.props.end}/>
                <Container start={this.props.start} end={this.props.end} events={new CalendarConsolidate(this.props.events).events}/>
            </div>
        );
    }
});

class CalendarConsolidate {
    constructor( paramEvents ) {
        this.listEvents = paramEvents;
    }

    get events() {
        return this.listEvents.reduce((acc, item, index) => {
            let _keys = Object.keys(acc);
            if( _keys.length === 0 ) {
                acc[`range${index}`] = new Array(item);
            }
            else {
                let _added = false;
                _keys.forEach((_key) => {
                    if( !_added ) {
                        let _arr = acc[_key];
                        _arr.forEach((_item) => {
                            if( !_added && this._overlap(item, _item) ) {
                                _added = true;
                                _arr.push(item);
                            }
                        });
                    }
                });

                if( !_added ) {
                    acc[`range${index}`] = [item];
                }
            }

            return acc;
        }, {});
    }

    _overlap(paramItemA, paramItemB) {
        return !(
            (paramItemA.end < paramItemB.start) || (paramItemA.start > paramItemB.end)
        );
    }
};

export default CalendarComponent;


require('../style/main.scss');

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Utils from './utils';
import CalendarComponent from './components/calendar';
import CalendarAction from './actions/calendarAction';

let intialEvents = [
    {start: 30, end: 150, title: 'Event 1', location: 'Barcelona'},
    {start: 540, end: 600, title: 'Event 2', location: 'Munich'},
    {start: 560, end: 620, title: 'Event 3', location: 'Berlin'},
    {start: 610, end: 670, title: 'Event 4', location: 'London'}
];

window.layOutDay = (events) => {
	var _consolidatedEvents = Utils.consolidateOverlaping(events);
	CalendarAction.loadedEvents(_consolidatedEvents);
};

window.layOutDay(intialEvents);

/* Initializing the Calendar Component */
ReactDOM.render((
	<CalendarComponent />
), document.getElementById('calendar'));

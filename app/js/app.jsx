
require('../style/main.scss');

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Utils from './utils';
import CalendarComponent from './components/calendar';
import CalendarAction from './actions/calendarAction';

let intialEvents = [
    {start: 30, end: 150},
    {start: 540, end: 600},
    {start: 560, end: 620},
    {start: 610, end: 670}
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

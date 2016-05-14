/*
This is the store component, who will process the data and execute the change
so if a component is listening a change of this store the component will
evaluate to render it
*/

'use strict';

import EventEmitter from 'events';
import Immutable from 'immutable';

import Dispatcher from '../dispatchers/dispatcher';

const CHANGE_EVENT = 'store_change_calendar';

let _events = Immutable.Map();

const CalendarStore = Object.assign({}, EventEmitter.prototype, {
    events() {
        return _events;
    },

	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener( callback ) {
		this.addListener(CHANGE_EVENT, callback);
	},

	removeChangeListener( callback ) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

CalendarStore.dispatchToken = Dispatcher.register(function( payload ) {
	switch( payload.actionType ) {
		case 'calendar:events:loaded': {
            PRIVATE.loadedEvents(payload.object.events);
            CalendarStore.emitChange();
			break;
        }
    }
});

const PRIVATE = {
    loadedEvents( paramEvents ) {
        _events = Immutable.fromJS(paramEvents);
    }
};

export default CalendarStore;

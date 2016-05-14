/*
Actions to be executed inside the calendar
*/

'use strict';

import AppDispatcher from '../dispatchers/dispatcher';

const CalendarAction = {
    
    loadedEvents( paramEvents ) {
        AppDispatcher.dispatch({
            actionType: 'calendar:events:loaded',
            object: {
                events: paramEvents
            }
        });
    }
    
};

export default CalendarAction;

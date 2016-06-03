React Day Calendar (On Development - WIP)
=================

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-day-calendar.svg?style=flat-square
[npm-url]: https://img.shields.io/npm/v/react-day-calendar.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/react-day-calendar.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-day-calendar

A React.js component to show different events in just one day... similar to Calendar.app

Usage
-----

```
npm i react-day-calendar
```

Usage
-----

```html
import CalendarComponent from 'react-day-calendar';

<CalendarComponent start={9} end={21} events={[
    {start: 30, end: 150, title: 'Event 1', location: 'Barcelona'},
    {start: 540, end: 600, title: 'Event 2', location: 'Munich'},
    {start: 560, end: 620, title: 'Event 3', location: 'Berlin'},
    {start: 610, end: 670, title: 'Event 4', location: 'London'}
]}/>
```

License
-------

react-day-calendar is released under the MIT license.

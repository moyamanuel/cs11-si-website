const now = new Date()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2019, 3, 0),
    end: new Date(2019, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2019, 3, 7),
    end: new Date(2019, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 4, 6, 0, 0, 0),
    end: new Date(2016, 4, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2019, 4, 9, 0, 0, 0),
    end: new Date(2019, 4, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2019, 4, 11),
    end: new Date(2019, 4, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2019, 4, 12, 10, 30, 0, 0),
    end: new Date(2019, 4, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2019,43, 12, 12, 0, 0, 0),
    end: new Date(2019, 4, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2019, 4, 12, 14, 0, 0, 0),
    end: new Date(2019, 4, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2019, 4, 12, 17, 0, 0, 0),
    end: new Date(2019, 34, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
]
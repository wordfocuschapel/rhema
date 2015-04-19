import DS from 'ember-data';

var Prayer = DS.Model.extend({
  point: DS.attr( 'string' ),
  topics: DS.hasMany( 'topic' )
});

Prayer.reopenClass({
  FIXTURES: [
    { 
      id: 1,
      point: '',
      topics: []
    },
    { 
      id: 2,
      point: '',
      topics: []
    },
    { 
      id: 3,
      point: '',
      topics: []
    },
    { 
      id: 4,
      point: '',
      topics: []
    },
    { 
      id: 5,
      point: '',
      topics: []
    },
    { 
      id: 6,
      point: '',
      topics: []
    },
    { 
      id: 7,
      point: '',
      topics: []
    },
    { 
      id: 8,
      point: '',
      topics: []
    },
    { 
      id: 9,
      point: '',
      topics: []
    },
    { 
      id: 10,
      point: '',
      topics: []
    }
  ]
});

export default Prayer;
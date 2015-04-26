import DS from "ember-data";

// var Topic = DS.Model.extend({
//  title:        DS.attr( 'string' ),
//  scriptures:   DS.hasMany( 'scripture' ),
//  prayers:      DS.hasMany( 'prayer' ),
//  videos:       DS.hasMany('video'),  
// });

var Topic = DS.Model.extend({
  title:        DS.attr( 'string' ),
  scriptures:   DS.hasMany( 'scripture' ),
  prayers:      DS.hasMany( 'prayer' ),
  videos:       DS.hasMany('video'),
  resources:    DS.hasMany('resource')  
});

Topic.reopenClass({
  FIXTURES: [
  	{
      id: 1,
      title: 'Prayer'
  	},
  	{
  	  id: 2,
      title: 'Consecration'
  	},
  	{
  	  id: 3,
      title: 'Word of God'
  	},
  	{
  	  id: 4,
      title: 'Faith'	
  	},
  	{
  	  id: 5,
      title: 'Fasting'
  	},
  	{
  	  id: 6,
      title: 'Prosperity'	
  	},
  	{
  	  id: 7,
      title: 'Healing'
  	},
  	{
  	  id: 8,
      title: 'Holy Spirit'
  	},
  	{
  	  id: 9,
      title: 'Wisdom'
  	},
  	{
  	  id: 10,
      title: 'Praise'
  	},
  	{
  	  id: 11,
      title: 'Success'
  	},
  	{
  	  id: 12,
      title: 'Supernatural'
  	}
  ]
});

export default Topic;
import DS from "ember-data";

var Video = DS.Model.extend({
  // title: 	DS.attr( 'string' ),
  link: 	DS.attr( 'string' ),
  topics: 	DS.hasMany( 'topic' )
});

Video.reopenClass({
  FIXTURES: [
  	{
      id: 1,
      link: 'https://www.youtube.com/embed/6HprCf2ATp8',
      topics: 1
  	},
  	{
  	  id: 2,
      link: 'https://www.youtube.com/embed/6HprCf2ATp8',
      topics: [2,5]
  	},
  	{
  	  id: 3,
      link: 'https://www.youtube.com/embed/6HprCf2ATp8',
      topics: [5,8]
  	},
  	{
  	  id: 4,
      link: 'https://www.youtube.com/embed/6HprCf2ATp8',
      topics: [6,9,10]	
  	}
  ]
 });  	

export default Video;
import DS from "ember-data";

export default DS.Model.extend({
  title: 	DS.attr( 'string' ),
  link: 	DS.attr( 'string' ),
  topic: 	DS.belongsTo( 'topic' )
});

//export default Video;
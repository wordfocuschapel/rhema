import DS from "ember-data";

export default DS.Model.extend({
  book: 	DS.attr( 'string' ),
  chapter:  DS.attr( 'string' ),
  verse: 	DS.attr( 'string' ),
  text: 	DS.attr( 'string' ),
  version: 	DS.attr( 'string' , {
  	defaultValue: 'KJV' 
  }),
  topic: DS.belongsTo( 'topic' )
});

//export default Scripture;

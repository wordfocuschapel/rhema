import DS from 'ember-data';

export default DS.Model.extend({
  point: DS.attr( 'string' ),
  topic: DS.belongsTo( 'topic' )
});

//export default Prayer;
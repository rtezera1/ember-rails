App.Contact = Ember.Resource.extend( {
  resourceUrl: '/contacts',

  fullName: Ember.computed(funtion(){
    return this.get( 'first_name') + '' + this.get('last_name');
  }).property('first_name', 'last_name')
});

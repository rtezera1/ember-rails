App.ListContactsView = Ember.View.extend({
  templateName: 'app/templates/contacts/list',
  contactsBinding: 'App.contactsController',

  refreshListing: function() {
    App.contactsController.findAll();
  }
});

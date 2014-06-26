App.EditContactView = Ember.View.extend({
  tagName: 'form'
  templateName: 'app/templates/contacts/edit'

  init: function() {
    this._super();

    this.set('contact', this.get('parentView').get('contact').copy());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get('parentView').hideEdit();
  },

  submit: function(event) {
    var self = this;
    var contact = this.get('contact');

    event.preventDefailt();

    contact.saveResource()
    .fail(function(e) {
      App.displayError(e);
    })
    .done(function() {
      var parentView = self.get('parentView');
      parentView.get('contact').dublicateProperties(contact);
      parentView.hideEdit();
    });
  }
})

ITEMS_INCREMENT = 5;
Session.setDefault('itemsLimit', ITEMS_INCREMENT);
Deps.autorun(function() {
  Meteor.subscribe('paginatedRequests', Session.get('itemsLimit'));
});

// counter starts at 0

Template.home.helpers({
	requests: function () {
		console.log(Requests.find().fetch());
		return Requests.find();
	},
	moreResults: function() {
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return !(Requests.find().count() < Session.get("itemsLimit"));
	}
});
Template.home.events({
	"click .requestList-table tbody tr": function () {
		console.log(this._id);
	},
	"click .loadMore": function () {
		var threshold, target = $("#showMoreResults");
		if (!target.length) return;

		threshold = $(window).scrollTop() + $(window).height() - target.height();

		if (target.offset().top < threshold) {
			if (!target.data("visible")) {
				// console.log("target became visible (inside viewable area)");
				target.data("visible", true);
				Session.set("itemsLimit",
				Session.get("itemsLimit") + ITEMS_INCREMENT);
			}
		} else {
			if (target.data("visible")) {
				// console.log("target became invisible (below viewable arae)");
				target.data("visible", false);
			}
		}
	}
});

Template.home.onRendered(function ( ){
	// run the above func every time the user scrolls
	/*function showMoreVisible() {
		var threshold, target = $("#showMoreResults");
		if (!target.length) return;

		threshold = $(window).scrollTop() + $(window).height() - target.height();

		if (target.offset().top < threshold) {
			if (!target.data("visible")) {
				// console.log("target became visible (inside viewable area)");
				target.data("visible", true);
				Session.set("itemsLimit",
				Session.get("itemsLimit") + ITEMS_INCREMENT);
			}
		} else {
			if (target.data("visible")) {
				// console.log("target became invisible (below viewable arae)");
				target.data("visible", false);
			}
		}
	}*/
	//$(window).scroll(showMoreVisible);
});

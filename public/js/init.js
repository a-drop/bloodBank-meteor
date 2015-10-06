(function($){
  $( document ).ready(function () {
    $('select').material_select();
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
    var $input = $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15
    });
    //$input.pickadate('set', 'min', new Date(1960, 3, 20, 10, 30));
    $input.pickadate('set', 'enable', { from: [1960,2,14], to: [2016,2,27] });

// Use the picker object directly.


  });
})(jQuery); // end of jQuery name space

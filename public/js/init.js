(function($){
  $( document ).ready(function () {
    $('select').material_select();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100,
      min: new Date(1915,1,1),
      max: new Date()
    });




  });
})(jQuery); // end of jQuery name space

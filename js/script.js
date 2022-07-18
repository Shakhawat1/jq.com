 $(document).ready(function(){

    // draggable
  $( "#draggable" ).draggable();
    // accourdin
    $( ".accordion" ).accordion();
    // accourdin 2
    $( "#accordion" ).accordion({
      collapsible: true
    });
    // auto complet start
    var availableTags = ["html","css","bootstrap","js"];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
   });
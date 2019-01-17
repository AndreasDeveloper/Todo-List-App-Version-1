// -- Event Listener | Check off Specific Todos by Clicking
$('ul').on('click', 'li', function() { // When li was clicked inside of a ul, execute this code
    // Toggle Class Completed for li elements
    $(this).toggleClass('completed');
});

// -- Event Listener | Click on X to delete an item
$('ul').on('click', 'span', function(event) {
    event.stopPropagation();  // Stops Event Bubbling || element bubbling

    // Remove the list item (whole li)
    $(this).parent().fadeOut(400, function() { // Starts fadeOut first then removes the li from ul -> parent() is li
        $(this).remove();
    });
});

// -- Event Listener | Creating new item in the list (new li creation)
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) { // Check if 'enter' was pressed. 13 is a keycode for enter
        // Getting value from input field
        const todoText = $(this).val(); 
        $(this).val('');
        // Create new li and add it to ul
        $('ul').append(`<li><span><i class="icon ion-md-trash"></i></span> ${todoText}</li>`);
    }
});

// 
$('.add-icon').click(function() {
    $("input[type='text']").fadeToggle();
});
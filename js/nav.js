//problem it looks bad in smaller browser viewport, i.e. mobile
//Solution: To hide text links & swap them with more appropriate nav

//Create a select menu
var $select = $("<select></select");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function () {
    var $anchor = $(this);

    //Create an option
    var $option = $("<option></option>");
    
    //Deal with  options depending on on current page
    if ($anchor.parent().hasClass("selected")) {
        $option.prop("selected.true");
    }

    //Option's value is href
    $option.val($anchor.attr("href"));
    //option's text is the link's text
    $option.text($anchor.text());
    //append option to select
    $select.append($option);
});

//Bind change listener to the select
$select.change(function () {
    event.preventDefault();
    //Go to select's location
    window.location = $select.val();
});







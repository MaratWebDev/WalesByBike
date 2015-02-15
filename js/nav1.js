$( document ).ready(function() {
    var $menu = $('.nav-collapse'),
    $menulink = $('.nav-toggle');
    
    $menulink.click(function(){
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });
});
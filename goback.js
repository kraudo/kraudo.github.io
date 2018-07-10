
window.goBack = function (e) // e -> event
{
    history.back(); // try this first
    
    // set timeout just in case page isn't loading/there is no previous page
    window.setTimeout(function(){
        // default to the page navigated from if no history
        window.location.href = document.referrer; 
    },1000);
    
    if(e)
    {
        if(e.preventDefault) e.preventDefault(); 
        if(e.preventPropagation) e.preventPropagation();
    }
    
    return false; // stop event propagation and browser default event
}

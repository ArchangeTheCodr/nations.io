$(document).ready(function(){

    load_country_container();
    filter();
        
    request_fill_language_select();
    request_fill_currency_select();

    
    //animation d'affichage du panneau de filtre
    $('.toggle-filter').hide()
    $('.filter').on('click', () => {
        toggle_filter()
    });
    $('.apply-btn').on('click', () => {
        toggle_filter()
    })
})
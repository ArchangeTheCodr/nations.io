$(document).ready(function(){

    $('#search-bar').val('');
    load_country_container();
    filter();
    search();
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
$(document).ready(function(){

    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then(response => response.json())
        .then(response => response.sort())
        .then(countries => {
            // console.table(countries.sort());
            countries.forEach(country => {
                create_country(country.name.common, country.flags.svg, 'flag ' + country.name.common);
            });
        })
    ;

    
        
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
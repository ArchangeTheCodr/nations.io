$(document).ready(function(){

    //initialisation de l'input de recherche
    $('#search-bar').val('');
    //appel de la fonction d'affichage des countries
    load_country_container();

    //appel de la fonction de filtre
    filter();

    //appel de la fonction de recherche
    search();

    //appel de la fonction de replissage du language_select
    request_fill_language_select();

    //appel de la fonction de replissage du currency_select
    request_fill_currency_select();

    
    //appel de la fonction d'animation d'affichage du panneau de filtre
   exec_toggle_filter();

   //appel a la fonction d'animation du panneau des continents
   toggle_continents();
})
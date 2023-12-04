//fonction executant l'animation du panneau de filtre
function exec_toggle_filter(){
    $('.toggle-filter').hide()
    $('.filter').on('click', () => {
        toggle_filter();
    });
    $('.apply-btn').on('click', () => {
        toggle_filter();
    })
}

//fonction executant l'animation du panneau des continents
function toggle_continents(){
    continent = $('.continent');
    continent.hide();
    $('.continent-toggle').on('click', () => {
        continent.toggle(400);
//        continent.css('position', 'absolute');
        continent.css('z-index', '1');
//        continent.slideToggle(400);
    })
}

//fonction d'affichage des countries
function load_country_container(){
    let h2 = $('h2');
    h2.text('All the country of the world');
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then(response => response.json())
        .then(response => response.sort())
        .then(countries => {
            countries.forEach(country => {
                create_country(country.name.common, country.flags.svg, country.flags.alt);
            });
        })
    ;
}

//fonction de recherche dynamique
function search(){
    let search_bar = $('#search-bar');
    let h2 = $('h2');
    //traitement a effectuer a chaque fois qu'une nouvelle lettres est taper dans le champ de recherche
    search_bar.on('input', () => {
        let country_container = document.querySelector('#country-container');
        h2.text('Result : ')
        // vidage du container afin d'afficher les resultats du filtre
        while (country_container.firstChild) {
            country_container.removeChild(country_container.firstChild);
        }

        //appel a l'api
        fetch('https://restcountries.com/v3.1/name/' + search_bar.val() + '?fields=name,flags')
            .then(response => response.json())
            .then(response => response.sort())
            .then(countries => {
                countries.forEach(country => {
                //creation des countries renvoyees par la recherche
                    create_country(country.name.common, country.flags.svg, country.flags.alt);
                });
            })
            //fonction a executer en cas d'erreur
            .catch(error => {
                $('#country-container').append($('<h5></h5>').text('this country doesn\'t exist'));
                console.log(error);
            })
        ;
        //si le champ input de recherche est vide alors on affiche tous les pays
        if(!search_bar.val()){
            load_country_container();
        }
    })

}

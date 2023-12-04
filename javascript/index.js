//fichier javascript unique a la page d'accueuil afin d'eviter des bugs

//fonction executant l'animation du panneau des continents
function toggle_continents(){
    continent = $('.continent');
    continent.hide();
    $('.continent-toggle').on('click', () => {
        continent.toggle(400);
//        continent.css('position', 'absolute');
//        continent.css('z-index', '1');
//        continent.slideToggle(400);
    })
}

toggle_continents();
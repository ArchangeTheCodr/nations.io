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
//
//
//var selected_continent;
//var countries_by_continent_array;
//function countries_by_continent(continent){
//    fetch('https://restcountries.com/v3.1/region/' + continent + '?fields=name,flags')
//        .then(response => response.json())
//        .then(countries => {
//            countries.forEach(country => {
//                countries_by_continent_array.push(country);
//            })
//        })
//    ;
//}
//
//$('.africa').on('click', () => {
//    selected_continent =  $('.africa').text();
//    window.location.href('../html/continents.html');
//})

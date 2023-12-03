
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


function search(){
    let search_bar = $('#search-bar');
    let h2 = $('h2');
    search_bar.on('input', () => {
        // vidage du container afin d'afficher les resultats du filtre
        let country_container = document.querySelector('#country-container');
        h2.text('Result : ')
        while (country_container.firstChild) {
            country_container.removeChild(country_container.firstChild);
        }
        fetch('https://restcountries.com/v3.1/name/' + search_bar.val() + '?fields=name,flags')
            .then(response => response.json())
            .then(response => response.sort())
            .then(countries => {
                countries.forEach(country => {
                    create_country(country.name.common, country.flags.svg, country.flags.alt);
                });
            })
            .catch(error => {
                $('#country-container').append($('<h5></h5>').text('this country doesn\'t exist'));
                console.log(error);
            })
        ;
        if(!search_bar.val()){
            load_country_container();
        }
    })

}

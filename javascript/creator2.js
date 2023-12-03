
function load_country_container(){
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

// Creer une carte pour chaque pays renvoyer par l'appel a l'api
function create_country(name, img, alt){

    // #creation des elements html necessaire a la realistion des cartes
    let col = $('<div></div>');
    let card = $('<div></div>');
    let image = $('<img></img>');
    let para = $('<p></p>');

    // ajout de classes bootstrap aux elements precedement creer
    col.addClass('col-3 my-1');
    card.addClass('card border shadow hover-animation');
    para.addClass('card-text py-2 text-center');
    image.addClass('img-responsive');

    // affectation des parametres a leurs valeurs respectives
    image.attr({
        'src' : img,
        'alt' : alt,
    });
    para.text(name);

    // #ajout des elements a la page html
    card
      .append(image)
      .append(para)
    ;
    col.append(card);
    $('#country-container').append(col);
}


// Animation pour l'affichage et le masquage du panneau de filtre sur la page des pays
function toggle_filter(){
    $('.toggle-filter').css('position', 'absolute');
    $('.toggle-filter').css('z-index', '1');
    $('.toggle-filter').slideToggle(400);
}




// remplissage du select des devises
function fill_currency_selector(currency) {

    let opt = $('<option></option>');
    let select_currency = $('#select-currency');

    opt.attr({'value' : currency});
    opt.text(currency);

    select_currency.append(opt);
}


// remplissage du select des langues

function fill_language_selector(language) {
    
    let opt = $('<option></option>');
    let select_language = $('#select-language');

    opt.attr({'value' : language});
    opt.text(language);

    select_language.append(opt);
}


// appel a l'api, pour emplir les selects
function request_fill_language_select() {
    fetch('https://restcountries.com/v3.1/all?fields=languages')
    .then(response => response.json())
    .then(languages => {

        let languagesArr = [];

        languages.forEach(language => {
            let lang = Object.values(language.languages)[0];
            if (lang != undefined) {
                languagesArr.push(lang)
            }
        });

        //retrait des doublons
        let uniLanguages = [...new Set(languagesArr)]
        //tri du tableau des langues
        uniLanguages.sort()
        uniLanguages.forEach(language => {
            fill_language_selector(language); 
        });
    });
}

var currencies_code = [];
function request_fill_currency_select() {
    fetch('https://restcountries.com/v3.1/all?fields=currencies')
        .then(response => response.json())
        .then(countries => {

            let currencies = [];

            countries.forEach(country => {
                let currency = Object.values(country.currencies)[0];
                currencies_code.push(country.currencies)
                if (currency != undefined) {
                    currencies.push(currency.name);
                }
            });

            //retrait des doublons
            let uniCurrencies = [...new Set(currencies)]

            //tri du tableau
            uniCurrencies.sort()
            uniCurrencies.forEach(currency => {
                fill_currency_selector(currency); 
            });
        })
    ;
}


var country_container = document.querySelector('#country-container')
//function de filtre des countries
function filter(){

    // recuperation des options du select_currency
    let select_currency = document.querySelector('#select-currency');
    // recuperation des options du select_language
    let select_language = document.querySelector('#select-language');
    //variable pour le code qui permettra l'appel a l'api
    let  currency_code;

    $('.apply-btn').on('click', () => {
            // vidage du container afin d'afficher les resultats du filtre
        let country_container = document.querySelector('#country-container');
        while (country_container.firstChild) {
            country_container.removeChild(country_container.firstChild);
        }
        //recherche de correspondance entre la currency dans le currency_select
        // et celle du json des currencies afin de recuperer le code de la currency
        for (let i in currencies_code) {
            for (let a in currencies_code[i]) {
                if(select_currency.value == currencies_code[i][a].name){
                    currency_code = a;
                    break;
                }
            }
        }
        //appel a l'api et creation des countries retournees apres le filtre
        fetch('https://restcountries.com/v3.1/currency/' + currency_code + '?fields=name,flags,languages')
            .then(response => response.json())
            .then(countries => {
                countries.forEach(country => {
                    //verification pour le filtre sur les languages
                    for(let lang in country.languages){
                        if(select_language.value === country.languages[lang]){
                            create_country(country.name.common, country.flags.svg, country.flags.alt);
                            break;
                        }

                    }
                })

                // si aucun resultat n'est renvoyes alors on affiche le message dans le h2
                let h2 = $('h2');
                if(!country_container.firstChild){
                    h2.text('No result for parameters : ' + select_language.value + ' and ' + select_currency.value );
                }else{
                     h2.text('result for parameters : ' + select_language.value + ' and ' + select_currency.value );

                }
            });
    })
}

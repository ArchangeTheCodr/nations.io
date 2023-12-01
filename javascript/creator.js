// Creer une carte pour chaque pays renvoyer par l'appel a l'api

function create_country(name, img, alt){

    // #creation des elements html necessaire a la realistion des cartes
    let col = $('<div></div>');
    let card = $('<div></div>');
    let image = $('<img></img>');
    let para = $('<p></p>');

    // ajout de classes bootstrap aux elements precedement creer
    col.addClass('col-xs-4 col-sm-4 col-md-3  my-1');
    card.addClass('card border shadow hover-animation');
    para.addClass('card-text py-2 text-center');

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


// Recuperer le texte dans la search bar et faire un fetch sur l'url avec 
// comme valeur pour le nom du pays le texte recuperer.
//Ensuite pour tout les pays renvoyer appeller la fonction create country pour les creer

function find_country(name){
    country = $('#search-bar').attr(value);

    
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
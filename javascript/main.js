$(document).ready(function(){

    for (let i = 0; i < 9; i++) {
        create_country('Blackjack OBS', '/home/lucifer/Images/Captures d’écran/img.png', '667 ekip mms ldo nrm');   
    }

    $('.toggle-filter').hide()
    $('.filter').on('click', () => {
        toggle_filter()
    });
    $('.apply-btn').on('click', () => {
        toggle_filter()
    })


})




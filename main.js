
function toggleMainNav(){
    document.getElementById('main_nav').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function showSecNav(primary_nav_item, secondary_nav, arrow){
    var image_src = document.getElementById(arrow).getAttribute('src');
    document.getElementById(secondary_nav).classList.toggle('active');

    if(image_src == "images/icon-arrow-down.svg"){
        document.getElementById(arrow).setAttribute('src','images/icon-arrow-up.svg');
    }else{
        document.getElementById(arrow).setAttribute('src','images/icon-arrow-down.svg');
    }

}
    


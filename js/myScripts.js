
    function imagefun() {


    var logosCard = document.getElementById('logosCard')
        logosCard.style.display = 'none';


    var images = document.getElementById('imageDiv')
    var logoSrcList = images.querySelectorAll('.myLogo');


    if (logoSrcList.length == 7) return;

    var img = document.createElement('img')
    img.src = 'img/logos/windows.png';
    img.className += "myLogo";

    for (let i = 0; i < logoSrcList.length; i++) {

        switch (i)
        {
            case 0: img.src = 'img/logos/linux.jpeg';
            break;
            case 1:  img.src = 'img/logos/php.png';
            break;
            case 2:  img.src = 'img/logos/sql.png';
            break;
            case 3:  img.src = 'img/logos/html.jpeg';
            break;
            case 4:  img.src = 'img/logos/laravel.jpeg';
            break;
            case 5:  img.src = 'img/logos/postman.png';
            break;

        }

    }


    // $("#parent-div").prepend(html);

    // document.getElementById('imageDiv').appendChild(img);
    document.getElementById('imageDiv').prepend(img);



}

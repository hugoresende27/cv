
    function imagefun() {


    var logosCard = document.getElementById('logosCard')
        logosCard.style.display = 'none';


    var images = document.getElementById('imageDiv')
    var logoSrcList = images.querySelectorAll('.myLogo');


    var btn = document.getElementById('goBtn');

    if (logoSrcList.length === 11)
    {
        btn.hidden = true;
        return;
    }

    var img = document.createElement('img')
    img.src = 'img/logos/windows.jpeg';
    img.className += "myLogo";






    for (let i = 0; i < logoSrcList.length; i++) {

        switch (i)
        {
            case 0:
                img.src = 'img/logos/linux.jpeg';

                break;

            case 1:
                img.src = 'img/logos/php.png';

                break;
            case 2:
                img.src = 'img/logos/sql.png';

                break;
            case 3:
                img.src = 'img/logos/mysql.png';
                break;
            case 4:
                img.src = 'img/logos/html.png';

                break;
            case 5:
                img.src = 'img/logos/js.png';
                break;
            case 6:
                img.src = 'img/logos/laravel.jpeg';

                break;
            case 7:
                img.src = 'img/logos/postman.png';
                break;
            case 8:
                img.src = 'img/logos/api.png';

                break;
            case 9:
                img.src = 'img/logos/git.jpeg';
                break;

        }

    }

    console.log(btn);

    // $("#parent-div").prepend(html);

    // document.getElementById('imageDiv').appendChild(img);
    document.getElementById('imageDiv').prepend(img);



}

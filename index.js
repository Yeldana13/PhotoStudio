for ( i = 0; i <= 5; i += 1 ) {
    $randNumber = Math.floor( Math.random() * 200 + 1 );
    $imgSrc = "https://unsplash.it/1600/900?image=" + $randNumber;
    $(".gallery").append("<div class='gallery-image'><img src='" + $imgSrc + "'></div>");
   }
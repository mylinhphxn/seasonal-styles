$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        if (season == "Default"){
            $("#logo").attr("src", "images/four-seasons.gif");

            $("#wear").attr("src", "images/300x400.png");

            $("html").css("background-color", "#ccc");

            alert("You clicked on the Default page! Go Somewhere Else!");
          }

          if (season == "Spring"){  
            $("html").css("background-color", "#2B7129");
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("#logo").attr("src", "images/spring.gif");
            $("header h3").text("Jump into spring!");
          }

          if (season == "Summer"){
            $("html").css("background-color", "#EBA52B");
            $("#wear").attr("src", "images/summer-wear.jpg");
            $("#logo").attr("src", "images/summer.gif");
            $("header h3").text("Don't be a bummer, it's Summer!");
          }

          if (season == "Fall"){
            $("html").css("background-color", "#A81124");
            $("#wear").attr("src", "images/fall-wear.jpg");
            $("#logo").attr("src", "images/fall.gif");
            $("header h3").text("Fall into this cozy selection!");
          }

          if (season == "Winter"){
            $("html").css("background-color", "#005393");
            $("#wear").attr("src", "images/winter-wear.jpg");
            $("#logo").attr("src", "images/winter.gif");
            $("header h3").text("Get warm in this winter collection!");
          }
    });
});
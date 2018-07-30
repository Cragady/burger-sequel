$(".ewww").on({
    mouseenter: function(){
        $(this).text("Ewww");
    },
    mouseleave: function(){
        $(this).text("Give Back");
    }
});

$(".eat-change").click(function(){
    var id = $(this).data("id");
    var devourChanger = $(this).data("eaten");
    var devourChanging = {
        devoured: devourChanger
    };
    var nameOfEater = $(".eater-name").val().trim();
    var nameSetter = {
        eater_name: nameOfEater
    }
    if(((devourChanger === 1) && (nameOfEater !== "")) || (devourChanger === 0)){
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourChanging
        }).then(function(){
            if(devourChanger === 0){
                $.ajax("/api/eaters/" + id, {
                    type: "DELETE"
                });
            } else {
                $.ajax("/api/eaters/" + id, {
                    type: "POST",
                    data: nameSetter
                });
            };
            location.reload();
        });
    } else {
        $("#reqName").modal("toggle");
    };
});

$("#add-berg").click(function(){
    var newBerg = {
        burgerName: $("#new-berg").val().trim()
    };
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBerg
    }).then(function(){
        location.reload();
    });
});
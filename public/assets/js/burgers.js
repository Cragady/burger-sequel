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
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourChanging
    }).then(function(){
        location.reload();
    })
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
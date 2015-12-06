$(function () {
    for (index = 0; index < 16; index++) {
        var idimage = "carousel-selector-" + index;

        $('#gallery').append($('<li class="col-sm-3">').append($('<a class="thumbnail" id="' + idimage + '">').append($(' <img >').attr("src", "./images/" + index + ".jpg"))));
    }
  
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            var str= ".jpg";
            $('#image').attr("src", "./images/" + id + str);
            $('#fotoid').val("./images/" + id + str);
            sessionStorage.setItem('fotoid', "./images/" + id + str);
            console.log($('#fotoid').val());
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});
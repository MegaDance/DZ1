var myModule = (function () {

    // Инициализирует наш модуль
    var init = function () {
        _setUpListners();
    };

    // Прослушивает события 
    var _setUpListners = function () {
        $('#add-new-item').on('click', _showModal); //открыть попап окно
        $('#add-new-project').on('submit', _addProgect); //добавим проект
    };

    var _showModal = function (ev) {
        console.log('Вызов попап окна');
        ev.preventDefault();
        $('#new-progect-popup').bPopup({
            speed: 500,
            transition: 'slideIn'
        });
    };
    var _addProgect = function (ev) {
        console.log('Добавили проект');
        ev.preventDefault();

        //обьявляем переменные
        var form = $(this),
            url = 'add_prog.php',
            data = form.serialize();
        console.log(data);

        //Ajax запросы на сервер
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .done(function(ans) {
            console.log('Success');
            console.log(ans);
        })
    };
return {
    init: init
};
})();
myModule.init();
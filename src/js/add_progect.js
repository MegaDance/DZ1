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
    //работа с попап окном
    var _showModal = function (ev) {
        console.log('Вызов попап окна');
        ev.preventDefault();
        var DivPopup = $('#new-progect-popup'),
            form = DivPopup.find('.form');
        DivPopup.bPopup({
            speed: 500,
            transition: 'slideIn',
            onClose: function(){
                form.find('.server-mes').text('').hide();
            }
        });
    };
    //Добавляет проект
    var _addProgect = function (ev) {
        console.log('Добавили проект');
        ev.preventDefault();

        //обьявляем переменные
        var form = $(this),
            url = 'add_prog.php',
            ServerAns = _ajaxForm (form, url);


        ServerAns.done(function(ans) {
            var successBox = form.find('.success-mes'),
                errorBox = form.find('.error-mes');

            if(ans.status === 'OK'){                        
                errorBox.hide();
                successBox.text(ans.text).show();                       
            }else{
                successBox.hide();
                errorBox.text(ans.text).show();
            }
        })
    };
    //Проверка формы
    var _ajaxForm = function (form, url) {
        data = form.serialize();
        var result = $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        }).fail ( function(ans){
            console.log ('Проблемы с PHP'),
            form.find ('.error-mes').text('Ошибка на сервере').show();
        });
        return result;
    };

return {
    init: init
};
})();

myModule.init();
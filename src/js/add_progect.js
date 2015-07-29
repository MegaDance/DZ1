var myModule = (function () {

    // Инициализирует наш модуль
    var init = function () {
                _setUpListners();
            };

    // Прослушивает события 
    var _setUpListners = function () {
        $('#add-new-item').on('click', _showModal); //открыть попап окно
            };

    var _showModal = function  (ev) {
        console.log ('Вызов модального окна');
        ev.preventDefault();
        $('#new-progect-popup').bPopup();
            };

    return {
        init: init
    };
})();
    myModule.init(); 
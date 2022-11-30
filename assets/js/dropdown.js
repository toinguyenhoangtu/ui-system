$(document).ready(function () {
    // get item and fill data into dropdown button
    function triggerItem() {

        var wrapperDropdown = $('.js-dropdown-open');
     
        wrapperDropdown.each(function (e) {
            
            var getItem = $(this).find('.c-dropdown-menu .dropdown-item');

            var fillValue = $(this).find('.js-dropdown-btn');

            getItem.on('click', function (e) {
                console.log($(this));
                // disable jumping in top
                e.preventDefault();

                if (getItem.hasClass('active')) {

                    getItem.removeClass('active');

                }

                $(this).addClass('active');

                // get text item
                getText = $(this).text();

                // fill text form item to dropdown
                fillValue.text(getText);

            });

        })
    }
    function init() {
        triggerItem();
    }
    init();
});

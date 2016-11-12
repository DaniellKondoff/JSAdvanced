/**
 * Created by Kondoff on 20-Oct-16.
 */
function attachEvents() {
    $('a.button').on('click',buttonClicked);

    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected')
    }
}
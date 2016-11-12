/**
 * Created by Kondoff on 07-Nov-16.
 */
function attachEvents() {
    $('#btnDelete').on('click',buttonClicked);

    function buttonClicked(){
        let towns=$('#townName').val();
        $('#towns option').each((index, item) => {
            if (item.textContent.includes(towns)) {
                $(item).remove();
                $('#result').text($(item).text()+' deleted.')
            }
            else {
                $('#result').text(towns+' not found.')
            }
        });
        $('#townName').val('')
    }
}
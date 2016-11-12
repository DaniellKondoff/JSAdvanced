/**
 * Created by Kondoff on 08-Nov-16.
 */
function attachEvents() {
    $('#btnDelete').on('click',buttonClicked);

    function buttonClicked(){
        let townName=$('#townName').val();
        let towns=$('#towns').find('option');
        let match=false;
        $('#townName').val('')

        for(let town of towns){
            if($(town).val()==townName){
                town.remove();
                match=true
            }
        }

        if(match){
            $('#result').text(townName+' deleted.')
        }else {
            $('#result').text(townName+' not found.')

        }
    }
}
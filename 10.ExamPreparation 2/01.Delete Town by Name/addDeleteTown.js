/**
 * Created by Kondoff on 12-Nov-16.
 */
function attachEvents() {
    //Delete Town
    $('#btnDelete').click(function () {
        let townName=$('#townName').val();
        let match=false;
        let townsList=$('#towns').find('option').toArray();
        $('#townName').val('');

        for( let town of townsList){
            if(town.textContent === townName){
                town.remove();
                match=true
            }
        }

        if(match){
            $('#result').text(`${townName} deleted.`)
        }
        else {
            $('#result').text(`${townName} not found.`)
        }
    });

    //Add Town
    $('#btnAdd').click(function () {
        let townName=$('#townName').val();
        let townsList=$('#towns');
        let option=$('<option>');
        option.append(townName);
        $('#towns').append(option);
        $("#townName").val('');
        $('#result').text(`${townName} added.`)
    })


}
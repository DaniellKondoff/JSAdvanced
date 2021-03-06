/**
 * Created by Kondoff on 24-Oct-16.
 */
function argumentInfo( ) {
    let summary={};

    for(let i=0;i<arguments.length;i++){
        let obj=arguments[i];
        let type= typeof obj;
        console.log((type + ': ' + obj));

        if(!summary[type]){
            summary[type]=1
        }
        else{
            summary[type]++
        }

    }

    let sortedTypes=[...Object.keys(summary)]
        .sort((a,b)=>summary[b]-summary[a])
        .forEach(item=>console.log(item + ' = ' + summary[item]));
}



argumentInfo('cat','dog', 42, function () { console.log('Hello world!'); });
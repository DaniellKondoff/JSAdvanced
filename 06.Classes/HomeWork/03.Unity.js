/**
 * Created by Kondoff on 02-Nov-16.
 */
class Rat{
    constructor(name){
        this.name=name;
        this.rats=[]
    }

    unite(otherRats){
        if(otherRats instanceof Rat){
            this.rats.push(otherRats)
        }
    }

    getRats(){
        return this.rats;
    }

    toString(){
        output='';
        output+=this.name + '\n';
        for (let rat of this.rats){
            output+= `##${rat}\n`;
        }

        return output
    }
}
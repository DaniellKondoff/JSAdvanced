/**
 * Created by Kondoff on 03-Nov-16.
 */
class sortedList{
    constructor(){
        this.size=0;
        this.list=[]
    }

    reSort(){
        this.list=this.list.sort((a,b)=> a- b);
    }

    add(element){
        this.list.push(element);
        this.size++;
        this.reSort()
    }

    remove(index){
        if(index>=0 && index<this.list.length){
            this.list.splice(index,1);
            this.size--;
            this.reSort()
        }
        else {
            throw new Error;
        }
    }

    get(index){
        return this.list[index]
    }
}


let l=new sortedList();
l.add(5);
l.add(2);
l.add(8);
l.get(1)
console.log(l.size);
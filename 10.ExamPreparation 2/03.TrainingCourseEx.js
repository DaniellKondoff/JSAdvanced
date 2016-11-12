/**
 * Created by Kondoff on 12-Nov-16.
 */
class TrainingCourse{
    constructor(title,trainer){
        this.title=title;
        this.trainer=trainer;
        this.list=[]
    }

    addTopic(title,date){
        let topic={title:title, date:date};
        this.list.push(topic);
        return this.list.sort((a,b)=>(a.date - b.date))
    }

    get firstTopic(){
        return this.list[0]
    };
    get lastTopic(){
        return this.list[this.list.length-1]
    }

    toString(){
        let output=`Course "${this.title}" by ${this.trainer}`;
        for(let item of this.list){
            output+=`\n * ${item.title} - ${item.date}`
        }
        if(this.list.length===0){
            output+=`\n`
        }
        return output
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);







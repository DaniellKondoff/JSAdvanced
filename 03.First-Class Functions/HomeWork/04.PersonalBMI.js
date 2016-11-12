/**
 * Created by Kondoff on 24-Oct-16.
 */
function personalBmi(name,age,weight,hight) {

    function calculateBmi(w,h) {
        h=Number(h)/100;
        w=Number(w);
        return w/(h*h)
    }

    let result={};
    result.name=name;
    result.personalInfo={
        age:age,
        weight:weight,
        height:hight
    };

    result.BMI=Math.round(calculateBmi(weight,hight));

    let status;
    switch (true){
        case result.BMI <18.5:
            status='underweight';
            break;
        case result.BMI <25:
            status='normal';
            break;
        case result.BMI <30:
            status='overweight';
            break;
        default:
            status='obese';
            break
    }

    result.status=status;

    if(status==='obese'){
        result.recommendation='admission required'
    }

    return result;
}

personalBmi('Peter', 29, 75, 182);
console.log(personalBmi('Peter', 29, 75, 182))
console.log(personalBmi('Honey Boo Boo', 9, 57, 137))
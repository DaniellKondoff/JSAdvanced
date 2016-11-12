/**
 * Created by Kondoff on 06-Nov-16.
 */
let f= (function () {
    let nextId=0;
    return class Record{
        constructor(temperature,humidity,pressure,windSpeed){
            this.id=nextId++;
            this.temperature=temperature;
            this.humidity=humidity;
            this.pressure=pressure;
            this.windSpeed=windSpeed;
        }

        toString() {
            let status = 'Not stormy';
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                status = 'Stormy'
            }
            let result = `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${status}`;
            return result
        }
    }
})()




let record1 = new f(32, 66, 760, 12);
console.log(record1.toString());
console.log("---------------")
let record2 = new f(10, 40, 680, 30);
console.log(record2.toString());

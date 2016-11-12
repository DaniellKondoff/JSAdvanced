/**
 * Created by Kondoff on 30-Oct-16.
 */
function sortedList() {
    return (function () {
        let storage =[];

        function getSize() {
            return storage.length
        }

        function add(element) {
            storage.push(element);
            reSort();
        }
        
        function remove(index) {
           if(isValidIndex(index)){
               storage.splice(index,1);
               reSort();
           }
           else {
               throw new Error;
           }
        }
        function reSort() {
            return storage.sort((a, b) => a - b);
        }

        function isValidIndex(index) {
            return index>=0 && index< storage.length;
        }
        
        function get(index) {
            if(isValidIndex(index)){
                return storage[index];
            }
            else {
                throw  new Error
            }
        }

        let result={add,remove,get};
        //result.__defineGetter__("size",getSize);

        Object.defineProperty(result,"size",{
            get:function () {
                return storage.length
            }
        });
        return result
    })();
}

let list = sortedList();
console.log(list.hasOwnProperty('size'));
list.add(5);
list.add(4);
console.log(list.get(1));
console.log(list);
console.log(list.size);
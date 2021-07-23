export class OrderID{
    randomGenerator(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        const value = Math.floor(Math.random() * (max - min + 1) + min);
        return value;
    }
}






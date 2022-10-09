function subjects(hindi, english, maths)
{
    var a = hindi+english+maths;
    return a;
};
var b = subjects(50,30,20);
console.log('Marks obtain - '+ b);

function percentage(tm){
    var c =tm/500*100;
    return c;
};
var d=percentage(b);
console.log('Perc is -'+d);



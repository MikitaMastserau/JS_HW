//У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме.

const hypotenuseСalculation = function(n, m) {
    const k = (n**2 + m**2)**(1/2);
    console.log(k);
};

hypotenuseСalculation(3, 4);

/*или

const hypotenuseСalculation = function() {
    const n = 3;
    const m = 4;
    const k = (n**2 + m**2)**(1/2);

    console.log (k);
}

hypotenuseСalculation(); */


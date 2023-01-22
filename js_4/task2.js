// С помощью функции reduce, вывести url у которого самая большая площадь
const boxarts = [
    {
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture200.jpg'
    },
    {
        width: 425,
        height: 150,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture425.jpg'
    },
    {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture150.jpg'
    },
    {
        width: 300,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture300.jpg'
    },
];

const getBiggestSquare = (boxarts) => {
    return boxarts.reduce((currentBoxart, nextBoxart) => {
        const {width, height} = currentBoxart;
        const {width: nextWidth, height: nextHeight} = nextBoxart;
 
        return (width * height) > (nextWidth * nextHeight) ? currentBoxart : nextBoxart;
    }).url;
};

console.log(getBiggestSquare(boxarts));
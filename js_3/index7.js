/* Выведите массив ids для видео у которых рейтинг 5.0. */

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }] 
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }]
    }
];

const chooseBestFilms = (films) => {
    return films.reduce((bestFilms, { id, rating }) => {
        const [ratingValue] = rating;

        if (ratingValue === 5) {
            bestFilms.push(id);
        };

        return bestFilms;
    }, [] );
};

console.log(chooseBestFilms(newReleases));

// #2

const chooseBestFilmsOtherVariant = (films) => {
    return films.reduce((bestFilms, { id, rating }) => {

        if (rating[0] === 5) {
            bestFilms.push(id);
        };

        return bestFilms;
    }, [] );
};

console.log(chooseBestFilmsOtherVariant(newReleases));
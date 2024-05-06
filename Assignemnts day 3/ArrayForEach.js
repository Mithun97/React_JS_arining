function ForEachArray(){
const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
    // Add more movies as needed
    ];
    console.log("Oscar Movie Array contains using ForEach Loop")
    let oscarMoviesforEach = oscarMovies.forEach(function(movies) {
        console.log( movies);
   });

   console.log("Oscar Movie Array contains using For Loop")
    for (let i in oscarMovies){
        console.log(oscarMovies[i]);
    }
}
export default ForEachArray;
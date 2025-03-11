const apiKey = 'c929301e';

async function getMovieData() {
    const searchInput = document.getElementById("searchInput").value.trim();
    const loader = document.getElementById("loader");
    const result = document.getElementById("movieResults");

    if (!searchInput) return alert("please enter a movie title");

    loader.style.display = "block"
    result.innerHTML = ""

    const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`;

    try {
        const response = await fatch(url);
        const data = await response.json();

        if (data.Response === "True"){
            displayMovies(data.Search);
        }else{
            result.innerHTML = `<p>No Movies found.</p>`
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
        result.innerHTML =  `<p>something went wrong</p>`
    }finally {
        loader.style.display = "none";
    }

}
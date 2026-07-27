import Movie from "./Movie";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

// Import or define your arrays here
const kdramas = [
  {
    title: "Crash Landing on You",
    releaseYear: 2019,
    badge: "New Episode",
    image:
      "https://wallpapercave.com/wp/wp6177137.png",
  },
  {
    title: "Squid Game",
    releaseYear: 2021,
    image:
      "https://i.pinimg.com/originals/92/d3/41/92d34153ce0824e3bef233b6b9925b01.jpg",
  },
  {
    title: "Parasite",
    releaseYear: 2019,
    image:
      "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Train to Busan",
    releaseYear: 2016,
    image:
      "https://i.pinimg.com/originals/1d/4d/8d/1d4d8d53d6bc41fa2387c5d07f120d79.jpg",
  },
  {
    title: "All of Us Are Dead",
    releaseYear: 2022,
    image:
      "https://cdn.wallpapersafari.com/34/15/OWhwk1.jpg",
  },
  {
    title: "Kingdom",
    releaseYear: 2019,
    image:
      "https://i.pinimg.com/originals/07/dc/39/07dc393a700d2ee516adb7047dff433c.jpg",
  },
  {
    title: "Hellbound",
    releaseYear: 2021,
    image:
      "https://m.media-amazon.com/images/I/41QMVyrwHLL.jpg",
  },
  {
    title: "Extraordinary Attorney Woo",
    releaseYear: 2022,
    image:
      "https://sarahgvincentviews.com/wp-content/uploads/2024/01/Extraordinary-Attorney-Woo-poster.jpg",
  },
  {
    title: "The Glory",
    releaseYear: 2022,
    image:
      "https://m.media-amazon.com/images/M/MV5BOGNmYWUyNjgtYzM2NC00YzkwLWFmZDUtZjlmMjcxMDM3Mzc0XkEyXkFqcGc@.jpg",
  },
  {
    title: "Hotel del Luna",
    releaseYear: 2019,
    image:
      "https://i.etsystatic.com/50677377/r/il/e780ab/5881850456/il_300x300.5881850456_e4em.jpg",
  },
  {
    title: "Goblin",
    releaseYear: 2016,
    image:
      "https://imgs.search.brave.com/GWbU_piQF2AyyYfMtOVo0jtcD5kBWr3AdYiibLISf1s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82OC9Hb2JsaW5f/UG9zdGVyLmpwZy81/MTJweC1Hb2JsaW5f/UG9zdGVyLmpwZw",
  },
  {
    title: "Vincenzo",
    releaseYear: 2021,
    image:
      "https://fr.web.img2.acsta.net/c_310_420/pictures/21/03/23/11/08/5370822.jpg",
  },
];
const indianMovies = [
  {
    title: "3 Idiots",
    releaseYear: 2009,
    badge: "Recently added",
    image: "https://m.media-amazon.com/images/I/61NSZeiNF3L.jpg",
  },
  {
    title: "RRR",
    releaseYear: 2022,
    image: "https://wallpaperaccess.com/full/6222142.jpg",
  },
  {
    title: "Dangal",
    releaseYear: 2016,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@.jpg",
  },
  {
    title: "Baahubali 2: The Conclusion",
    releaseYear: 2017,
    image:
      "https://media5.bollywoodhungama.in/wp-content/uploads/2017/05/Baahubali-2-The-Conclusion-5-255x191.jpg",
  },
  {
    title: "KGF: Chapter 2",
    releaseYear: 2022,
    image: "https://wallpapercave.com/wp/wp11435820.jpg",
  },
  {
    title: "Jawan",
    releaseYear: 2023,
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-16x9.jpg?VersionId=Ddej.9DLpQW91sSb7YB6E_5yd7e1xypP&size=690:388",
  },
  {
    title: "Pathaan",
    releaseYear: 2023,
    image:
      "https://a.thumbs.redditmedia.com/iNs8XYMko45aJ2eaRIz6p5eqWzgf7aMZVxYqp7ad2T4.jpg",
  },
  {
    title: "Animal",
    releaseYear: 2023,
    image:
      "https://cdn.district.in/movies-assets/images/cinema/animal-min-52059360-5c45-11ee-be8a-2b18a7a119ea.jpg?im=Resize,width=320",
  },
  {
    title: "Gangs of Wasseypur",
    releaseYear: 2012,
    image: "https://wallpaperaccess.com/full/4394046.jpg",
  },
  {
    title: "Pushpa: The Rise",
    releaseYear: 2021,
    image: "https://m.media-amazon.com/images/I/518ZYJkSzPL.jpg",
  },
  {
    title: "Kantara",
    releaseYear: 2022,
    image:
      "https://i.pinimg.com/originals/fc/4a/2a/fc4a2a3d3fd1011470e89686603fcfc1.jpg",
  },
  {
    title: "The Kashmir Files",
    releaseYear: 2022,
    image:
      "https://english.cdn.zeenews.com/sites/default/files/2023/03/19/1170064-tn.png?&im=FitAndFill=(250,140)",
  },
];
const movies = [
  {
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Godfather",
    releaseYear: 1972,
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Dark Knight",
    releaseYear: 2008,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Pulp Fiction",
    releaseYear: 1994,
    image: "https://m.media-amazon.com/images/I/51zPov-7QuL._SY741_.jpg",
  },
  {
    title: "Forrest Gump",
    releaseYear: 1994,
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Inception",
    releaseYear: 2010,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Matrix",
    releaseYear: 1999,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Interstellar",
    releaseYear: 2014,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Fight Club",
    releaseYear: 1999,
    image: "https://m.media-amazon.com/images/I/51169IVXeyL.jpg",
  },
  {
    title: "Goodfellas",
    releaseYear: 1990,
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Silence of the Lambs",
    releaseYear: 1991,
    image: "https://m.media-amazon.com/images/I/817d-ZS5GcL._AC_SY679_.jpg",
  },
  {
    title: "Gladiator",
    releaseYear: 2000,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Social Network",
    releaseYear: 2010,
    image:
      "https://assets.scriptslug.com/live/img/x/posters/2359/the-social-network-2010_2731b11b11.jpg",
  },
  {
    title: "Whiplash",
    releaseYear: 2014,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
  },
];
function MovieLine() {
  return (
    <section >
      <Movie title="🔥 Popular Movies" id="popularMovies" movieList={movies} />
      <Movie title="🇮🇳 Made in India" movieList={indianMovies} />
      <Movie title="🇰🇷 K-Dramas" movieList={kdramas} />
    </section>
  );
}

export default MovieLine;

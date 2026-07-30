import Movie from "./Movie";
import "./MovieLine.css";

function MovieLine() {
  const movies = [
    {
      title: "KGF",
      imgLink:
        "https://imgs.search.brave.com/7p6grhPEqQ8O4hhrxCvHQV9EUJBVhZO1I5gxCZ_Gw2Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQva2dm/LTRrLXJvY2t5LW1h/aW4tY2hhcmFjdGVy/LXRtMnc2Z2FhdmIy/bGs4c2guanBn",
      year: "2022",
    },
    {
      title: "Saahoo",
      imgLink:
        "https://imgs.search.brave.com/yNsTxyQa9zDXhqMLUCTHj-4ysH_QOWoZUc6cpssivxA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg5/MDc1My5qcGc",
      year: "2022",
    },
    {
      title: "Vikram",
      imgLink:
        "https://imgs.search.brave.com/WMk9ysR31d1aAJcC0nnxHYLU5BeTFDWLyRHx1TB-qgw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzM4/OTQzMS5qcGc",
      year: "2022",
    },
    {
      title: "Titanik",
      imgLink:
        "https://imgs.search.brave.com/tSV1iSSm7x6iJRhjrUQEkhUqfDAjhtswss2MzftAofY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdGl0/YW5pYy1hZXN0aGV0/aWMtamFjay1hbmQt/cm9zZS1qMzF5ODdj/eXk5NWpiMXRrLmpw/Zw",
      year: "2022",
    },
  ];

  return (
    <div className="movieLine">
      <h2>K-drama Movies</h2>

      {movies.map((e) => (
        <Movie title={e.title} imgLink={e.imgLink} year={e.year} />
      ))}
    </div>
  );
}

export default MovieLine;

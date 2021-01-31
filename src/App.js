import React,{ useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState("");
  const [review, setreview] = useState("");
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response) =>{
      setMovieList(response.data)
    })
  })

  const submitReview = ()=> {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    }).then(()=>{
      alert('successfully insert');
    })
    console.log("worked");
  }


  return (
    <div className="App">
      <h1>CRUD APP</h1>

      <div className="form">
        <label>Movie Name</label>
        <input 
              type="text" 
              name="movieName"
              onChange= {(e) =>{
                setMovieName(e.target.value);
              }}
              />
        <label>Review</label>
        <input type="text" name="review" 
                onChange= {(e) =>{
                setreview(e.target.value);
              }}/>

        <button onClick={submitReview}> Submit </button>


        {movieReviewList.map((val)=>{
          return (
            <p>
              MovieName: {val.movieName} || Movie Review: {val.movieReview}
            </p>
          )
        })}

      </div>
    </div>
  );
}

export default App;

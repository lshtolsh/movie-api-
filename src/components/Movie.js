import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, title, year, summary , poster, genres}){
    return (
        <div className = "movie">
            <img src={poster} alt={title} title = {title}/>

        <div className = "movie_data">
            <h2 className = "movie_title" style = {{backgroundColor: 'blue'}}>{title}</h2>
            <h3 className = "movie_year">{year}</h3>
  
            <ul className="movie_genres">
                {genres.map((genre, index) =>{
                    return <li key={index} className="movie_genre">{genre}</li>
                })}
            </ul>
            <p className = "movie_summary">{summary}</p>
        </div></div>
    );
}

Movie.propTypes= {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,//포스터는 링크로 받으므로 string(문자열)로 받음.
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
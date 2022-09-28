import React from "react";
import PropTypes  from 'prop-types';

function  Beijing()
{
    return <h3>Wǒ ài Běijīng Tiān'ānmén</h3>;
}

function  Food({name, picture, rating}){
  return (
    <div>
      < h3>legend({name})</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
  
}

const food_i_like = [
{
  id: 1,
  name:'kimchi',
  image:'https://post-phinf.pstatic.net/MjAyMDA3MjBfMTA1/MDAxNTk1MjQwMDM3MTU4.K6nyAPKnhZZBQMrukdhyKEfQuaE59GQNOfPbHwBaTxYg.Rb9MwKmKN7vhShZAytdiQkDm7Fw1xlRojWmKsCjq_Lgg.JPEG/52977029_113463103133671_4931183520270778368_n_113463099800338.jpg',
  rating:5,
},
{
  id: 2,
  name:'pork',
  image:'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
  rating:4.9,
},
]; //배열만듬


function App() 
{
  return <div>
    <h1>살려줘!!</h1>
    <Beijing />
    {food_i_like.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;

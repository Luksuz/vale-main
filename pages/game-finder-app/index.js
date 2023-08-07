import 'bootstrap/dist/css/bootstrap.min.css';
import storeIDs from '../../storeIDs';
import GameCard from '../../components/GameCard';
import { useState } from 'react';
import axios from 'axios';
import { FloatingLabel, Form } from 'react-bootstrap';


export default function App() {
  const [gameDeals, setGameDeals] = useState([]);
  const [currentGameChoice, setCurrentGameChoice] = useState('');


  const fetchGameDeals = async () => {
    const options = {
      method: 'GET',
      url: 'https://cheapshark-game-deals.p.rapidapi.com/deals',
      params: {
        lowerPrice: '0',
        steamRating: '0',
        title: currentGameChoice,
        desc: '0',
        output: 'json',
        steamworks: '0',
        sortBy: 'Deal Rating',
        AAA: '0',
        pageSize: '60',
        exact: '0',
        upperPrice: '50',
        pageNumber: '0',
        onSale: '0',
        metacritic: '0',
        'storeID[0]': '1,2,3'
      },
      headers: {
        'X-RapidAPI-Key': 'ef103b29afmshfd7681ec3fb106fp1f9256jsn8f8de43db23b',
        'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setGameDeals(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  function handleInputChange(input) {
    setCurrentGameChoice(input);
    console.log("change")
  }

  function handleButtonClick(input){
    setCurrentGameChoice(input)
    fetchGameDeals();
    console.log("click")
  }


  const mappedGames = gameDeals.map((game) => {
    return (
      <GameCard
        key={game.dealID}
        gameID={game.gameID}
        gameTitle={game.title}
        price={game.normalPrice}
        gameImg={game.thumb}
        store={storeIDs[game.storeID - 1].storeName}
      />
    );
  });

  return (
      <div className="d-flex flex-column container justify-content-center align-items-center text-center">
        <div>
        <FloatingLabel
        value={currentGameChoice}
        controlId="floatingInput"
        label="Game title"
        className=""
        onChange={(e) => handleInputChange(e.target.value)}
        >
        <Form.Control type="text" placeholder="Search..." />
        <button type="button" onClick={() => handleButtonClick(currentGameChoice)} class="btn btn-outline-light">Search</button>
      </FloatingLabel>
        
      </div>
      <div className='row align-items-center justify-content-center'>
        {mappedGames}
      </div>
    </div>
  );
}
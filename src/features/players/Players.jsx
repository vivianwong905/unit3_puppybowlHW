// Import the React library
import React from "react";

// Import the generated hook from our RTK Query API slice
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";

// Import the CSS styles for this component
import "../../index.css";

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      <div class="intro">
        <h1>Welcome to the Puppy Bowl Event!</h1>
        <p>Come and join us for a fun-filled day of adorable puppy football!</p>
        <p>Get ready to meet the talented pups competing in this year's Puppy Bowl... and here they are:</p>
      </div>

      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          {/* Display the player's image, with the player's name as alt text */}
          <img className="player-image" src={player.imageUrl} alt={player.name} />
          <div className="player-details">
            {/* Display the player's name */}
            <h2>{player.name}</h2> 
            {/* Display the player's breed */}
            <p><b>Breed:</b> {player.breed}</p> 
            {/* Display the player's status */}
            <p><b>Status:</b> {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Players;

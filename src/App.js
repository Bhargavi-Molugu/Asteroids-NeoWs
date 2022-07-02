import React, { useState } from "react";
import AsteroidsForm from "./Components/AsteroidsForm";
import AsteroidDataResult from "./Components/AsteroidDataResult";

const App = () => {
  const [asteroidData, setAsteroidData] = useState({});
  const [isDisplayResult, setIsDisplayResult] = useState(false);

  const updateAsteroidData = (data) => {
    setAsteroidData(data);
    setIsDisplayResult(true);
  };

  return (
    <div>
      <header className="bg-primary py-2 text-center">
        <h1>NASA's Asteroids - NeoWs</h1>
      </header>
      <section className="container">
        {!isDisplayResult && (
          <AsteroidsForm updateAsteroidData={updateAsteroidData} />
        )}
        {isDisplayResult && <AsteroidDataResult asteroidData={asteroidData} />}
      </section>
    </div>
  );
};

export default App;

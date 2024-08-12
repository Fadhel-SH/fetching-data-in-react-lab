// src/components/StarshipList.jsx
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;

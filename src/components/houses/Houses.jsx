// ------------------------------
// File: Houses.jsx
// ------------------------------
// Description: React component for calling House.jsx to display individual houses.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import House from './House';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const WelcomeTitle = styled.div`
  font-family: 'Reenie Beanie', cursive;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: var(--font-small);

  // Code logic for adding borders
  border-bottom: 1px solid var(--color-white);
  border-top: 1px solid var(--color-white);
  margin: 1em 0;
  padding: 1em 0;
`;
const StyledHouses = styled.div`
  color: var(--color-black);
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Ensure all houses are displayed in a single line */
  padding: 20px; /* Add some padding for better appearance */
`;

const HouseContainer = styled.div`
  display: inline-block; /* Display houses in a single row */
  margin-right: 20px; /* Add some spacing between houses */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Houses() {
  const [houses, setHouses] = useState([]);

  // Fetch houses data API as soon as component mounts
  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await fetch(
          'https://francesgtz-backend-655b88691bf1.herokuapp.com/api/houses'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }

        const data = await response.json();
        setHouses(data); // Update the state with fetched houses
      } catch (error) {
        console.error(error);
      }
    }
    fetchHouses();
  }, []);
  return (
    <>
      <WelcomeTitle>Featured Houses</WelcomeTitle>
      <StyledHouses>
        {houses.length > 0 &&
          houses.map((house) => (
            <HouseContainer key={house.id}>
              <House house={house} />
            </HouseContainer>
          ))}
      </StyledHouses>
    </>
  );
}

export default Houses;

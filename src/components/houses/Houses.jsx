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
  overflow-x: hidden;
`;

const HousesArea = styled.div`
  // Code logic to cover the full screen of the device user is in
  margin: 0 auto;
  max-width: var(--width-filled-window);
`;

const HousesAreaSlider = styled.div`
  // Code logic for slider (multiple videos)
  white-space: nowrap;
  transition: ease 1100ms;
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
          'https://francesgtz-backend-e45242e4f678.herokuapp.com/api/houses'
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
        <HousesArea>
          {houses.length > 0 && (
            <HousesAreaSlider>
              {houses.map((house) => (
                <House
                  key={house.id}
                  house={house}
                  style={{ width: `${100 / houses.length}%` }}
                />
              ))}
            </HousesAreaSlider>
          )}
        </HousesArea>
      </StyledHouses>
    </>
  );
}

export default Houses;

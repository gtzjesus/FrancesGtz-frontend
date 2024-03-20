// ------------------------------
// File: Houses.jsx
// ------------------------------
// Description: React component for calling House.jsx to display individual houses.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import House from './House';

// This section has all necessary imports for the slider from react slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  border-bottom: 1px solid var(--color-white);
  border-top: 1px solid var(--color-white);
  margin: 1em 0;
  padding: 1em 0;
`;

const SliderWrapper = styled.div`
  position: relative;

  /* Hide default arrows */
  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

const HouseContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
`;

// Houses component
function Houses() {
  const [houses, setHouses] = useState([]);
  const sliderRef = useRef();

  // Fetch houses data from API
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
        setHouses(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchHouses();
  }, []);

  // Function to navigate to the previous house
  const goToPreviousHouse = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to navigate to the next house
  const goToNextHouse = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <WelcomeTitle>Featured Houses</WelcomeTitle>
      {houses.length > 0 && (
        <SliderWrapper>
          {/* Slider component with custom navigation buttons */}
          <Slider ref={sliderRef}>
            {houses.map((house) => (
              <HouseContainer key={house.id}>
                <House house={house} />
              </HouseContainer>
            ))}
          </Slider>
          {/* Custom navigation buttons */}
          <ButtonWrapper>
            <Button onClick={goToPreviousHouse}>{'<'}</Button>
            <Button onClick={goToNextHouse}>{'>'}</Button>
          </ButtonWrapper>
        </SliderWrapper>
      )}
    </>
  );
}

export default Houses;

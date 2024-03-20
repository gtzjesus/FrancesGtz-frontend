/* eslint-disable react/prop-types */
// ------------------------------
// File: House.js
// ------------------------------
// Description: React individual component for each House (the house videos will be displayed with this reusable component dynamically), using supabase integration (backend)
// ------------------------------
// Figma Designs + Video Screen Editor/Recording.
// ------------------------------
// Global Styles from /src/styles/ used for global variables.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledHouse = styled.div`
  position: relative; /* Position the container relatively */
  display: inline-block;
  overflow: hidden;
  width: var(--width-filled-window);
`;

const Video = styled.video`
  width: 100%;
  height: 70vh;
`;

const Details = styled.div`
  position: absolute; /* Position the details absolutely */
  bottom: 0; /* Position details at the vertical center */
  left: 50%; /* Position details at the horizontal center */
  transform: translate(-50%, -15%); /* Center the details */
  text-align: center;
  padding: var(--padding-xsmall) var(--padding-medium);
  background-color: rgba(21, 19, 19, 0.7); /* Semi-transparent background */
  border-radius: 10px;
`;

const Address = styled.span`
  font-size: var(--font-xxxsmall);
`;

const Price = styled.span`
  font-size: var(--font-price);
`;

const Additional = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--gap-small);
`;

const Beds = styled.span`
  font-size: var(--font-xxsmall);
`;

const Baths = styled.span`
  font-size: var(--font-xxsmall);
`;

const Sqft = styled.span`
  font-size: var(--font-xxsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the every individual house added to supabase
function House({ house, preloadVideo }) {
  // Code logic to check house object
  if (!house) {
    return <div>No house data available</div>;
  }

  // Destructure the house object
  const Home = {
    address: house.address,
    price: house.price,
    beds: house.beds,
    baths: house.baths,
    sqft: house.sqft,
    video: house.video,
  };

  return (
    <StyledHouse>
      <Video preload={preloadVideo} autoPlay loop muted playsInline>
        <source src={Home.video} type="video/mp4" />
      </Video>
      <Details>
        <Price>${Home.price.toLocaleString()}</Price>
        <hr />
        <Address>{Home.address}</Address>
        <br />
        <br />
        <Additional>
          <Beds>{Home.beds} beds</Beds>
          <Baths>{Home.baths} baths</Baths>
          <Sqft>{Home.sqft.toLocaleString()} sqft</Sqft>
        </Additional>
      </Details>
    </StyledHouse>
  );
}

export default House;

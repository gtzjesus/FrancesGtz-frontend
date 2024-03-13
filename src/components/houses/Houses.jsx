// ------------------------------
// File: Houses.jsx
// ------------------------------
// Description: React component for calling House.jsx to display individual houses.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const WelcomeTitle = styled.div`
  font-family: 'Reenie Beanie', cursive;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  // Code logic for adding borders
  border-bottom: 1px solid var(--color-white);
  border-top: 1px solid var(--color-white);
  margin: 1em 0;
  padding: 2em 0;
`;
const StyledHouses = styled.div`
  color: var(--color-black);
  overflow-x: hidden;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Houses() {
  return (
    <>
      <WelcomeTitle>Featured Houses</WelcomeTitle>
      <StyledHouses></StyledHouses>
    </>
  );
}

export default Houses;

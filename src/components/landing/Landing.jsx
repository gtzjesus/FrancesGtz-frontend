// ------------------------------
// File: Landing.js
// ------------------------------
// Description: React component for displaying landing page (first thing USER sees).
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
const StyledLanding = styled.div`
  position: relative; /* Add position relative for overlay */
  overflow: hidden; /* Ensure overlay doesn't overflow */
`;

const LandingIntroduction = styled.div`
  position: relative; /* Ensure content is stacked on top of the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Ensure content is above the overlay */
  padding-top: var(--height-navigation);
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  line-height: 3.75rem;
  color: white; /* Set text color */
  padding-top: var(--height-navigation);
`;

const SubTitle = styled.span`
  font-size: var(--font-xsmall);
  margin: 0 auto;
  text-align: center;
  padding-top: var(--padding-medium);
  color: white; /* Set text color */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Landing() {
  return (
    <StyledLanding>
      <LandingIntroduction>
        <Title>Discover the perfect home.</Title>
        <SubTitle>
          Serving through Millennium 2000, <br />
          based in El Paso, TX.
        </SubTitle>
        <SubTitle></SubTitle>
      </LandingIntroduction>
    </StyledLanding>
  );
}

export default Landing;

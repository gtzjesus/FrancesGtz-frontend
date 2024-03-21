// ------------------------------
// File: About.jsx
// ------------------------------
// Description: React individual component for about section (front-end)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledAbout = styled.div`
  height: 100vh;
  padding: var(--padding-medium);
`;

const Title = styled.span`
  font-family: 'Reenie Beanie', cursive;
  font-size: var(--font-xlarge);
`;

// ------------------------------
// Component
// ------------------------------
// Our React Component which handles the about section
function About() {
  return (
    <StyledAbout>
      <Title>About me</Title>
    </StyledAbout>
  );
}

export default About;

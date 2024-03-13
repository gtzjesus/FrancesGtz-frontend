// ------------------------------
// File: Navigation.jsx
// ------------------------------
// Description: React individual component web page navigation

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledNavigation = styled.div`
  // Code logic to arrange children
  font-family: 'Reenie Beanie', cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // Code logic for positioning fixed in all web app + header config
  position: fixed;
  background: var(--color-tan);
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  color: var(--color-white);

  // Code logic for adding borders
  border-bottom: 1px solid var(--color-white);
`;

const NavElements = styled.div`
  display: flex;
  justify-content: space-evenly; /* Distribute items evenly along the main axis */
  width: 100%; /* Expand the width to fill the parent container */
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center the flex container horizontally */
`;

const Element = styled.a`
  font-size: var(--font-small);
  border-bottom: 1px solid var(--color-white);
  margin: 0 0 1em 0;
`;
const Logo = styled.a`
  font-size: var(--font-medium);
  line-height: 2rem;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the every individual house added to supabase
function Navigation() {
  return (
    <>
      <StyledNavigation>
        <NavElements>
          <Element>houses</Element>
          <Logo>
            Frances <br />
            Gutierrez
          </Logo>
          <Element>contact</Element>
        </NavElements>
      </StyledNavigation>
    </>
  );
}

export default Navigation;

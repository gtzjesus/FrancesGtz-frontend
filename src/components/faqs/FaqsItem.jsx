/* eslint-disable react/prop-types */
// ------------------------------
// File: FaqsItem.js
// ------------------------------
// Description: React component for displaying individual frequently asked question.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledItem = styled.div`
  padding: 20px 24px;
  cursor: pointer;
  // Code logic for arranging children
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
`;

const Number = styled.p`
  font-weight: 500;
`;

const Title = styled.p`
  font-weight: 500;
`;

const Icon = styled.p`
  font-weight: 500;
`;

const Content = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
// Receives multiple parameters to be used to interact with displaying/not displaying modal

function FaqsItem({ num, title, currentOpen, onOpen, children }) {
  // Code logic to check which faq number is currently open
  const isOpen = num === currentOpen;

  // Handles opening and closing the modal (toggle)
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <>
      {/* <!-- Main Container with state dynamic class names --> */}
      <StyledItem className={`${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <Number className="number">{num < 9 ? `0${num + 1}` : num + 1}</Number>
        <Title>{title}</Title>
        <Icon>{isOpen ? '-' : '+'}</Icon>
        {isOpen && <Content>{children}</Content>}
      </StyledItem>
      <hr />
    </>
  );
}

// Export reusable Component
export default FaqsItem;
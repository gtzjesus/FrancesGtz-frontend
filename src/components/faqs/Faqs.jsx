// ------------------------------
// File: Faqs.js
// ------------------------------
// Description: React component for displaying our frequently asked questions.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import FaqsItem from './FaqsItem';
import { useState } from 'react';

// ------------------------------
// FAQs
// ------------------------------
// This section contains an array of objects. Our frequently asked questions with the provided answers
const faqs = [
  {
    title: 'What advantages come with your property valuation?',
    text: 'A few is to guide buyers in making informed purchasing choices and aid sellers in determining optimal listing prices.',
  },
  {
    title: 'How do you go about a market analysis?',
    text: 'By supporting clients in navigating the housing market, identify trends, and facilitate strategic investment decisions.',
  },
  {
    title: 'What about negotiation expertise?',
    text: ' I negotiate price, sale terms, and contract specifics on behalf of clients.',
  },
  {
    title: 'Any property marketing?',
    text: 'I help develop impactful marketing strategies to highlight properties for prospective buyers.',
  },
];

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledFaqs = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  background: var(--color-tan);
`;

const Intro = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  padding: var(--padding-large) var(--padding-small);
`;

const Title = styled.span`
  font-family: 'Reenie Beanie', cursive;
  font-size: var(--font-xlarge);
`;

const Special = styled.span`
  color: var(--color-yellow);
  font-size: var(--font-large);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Faqs() {
  // React hook useState to control user interaction when clicking on FAQ, displaying and not displaying answers
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <StyledFaqs>
      <Intro>
        <Title>
          Frequently <Special>Asked Questions</Special>
        </Title>
      </Intro>
      {/* <!-- Map all array to display every FAQ --> */}
      {faqs.map((element, index) => (
        <FaqsItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={element.title}
          num={index}
          key={element.title}
        >
          {element.text}
        </FaqsItem>
      ))}
    </StyledFaqs>
  );
}

// Export reusable Component
export default Faqs;

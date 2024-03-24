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
  padding: var(--padding-medium);
  overflow-x: hidden;
`;

const Title = styled.span`
  font-family: 'Reenie Beanie', cursive;
  font-size: var(--font-xlarge);
`;

const SectionTitle = styled.span`
  font-family: 'Reenie Beanie', cursive;
  font-size: var(--font-small);
  border-bottom: 1px solid var(--color-white);
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--gap-medium);
  padding: var(--padding-medium) 0;
`;

const SectionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--gap-medium);
`;

const Realtor = styled.img`
  height: var(--logo-height);
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

const SectionDescription = styled.span`
  font-size: var(--font-xsmall);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

// ------------------------------
// Component
// ------------------------------
// Our React Component which handles the about section
function About() {
  return (
    <StyledAbout>
      <Title>About Me</Title>
      <Details>
        <Realtor src="/backgrounds/frances.png"></Realtor>
        <Description>
          My mission is to match you with a home that complements you.
        </Description>
      </Details>
      <hr />
      <SectionDetails>
        <Section>
          <SectionTitle>Passionate</SectionTitle>
          <SectionDescription>
            For helping clients achieve home ownership goals.
          </SectionDescription>
        </Section>
        <Section>
          <SectionTitle>Dedicated</SectionTitle>
          <SectionDescription>
            With years of expertise in the real estate market.
          </SectionDescription>
        </Section>
        <Section>
          <SectionTitle>Ownership</SectionTitle>
          <SectionDescription>
            A trusted realtor for your journey on finding your dream home.
          </SectionDescription>
        </Section>
      </SectionDetails>
    </StyledAbout>
  );
}

export default About;

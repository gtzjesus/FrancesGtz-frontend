import styled from 'styled-components';

const StyledLanding = styled.div`
  min-height: 100vh;
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
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  padding-top: var(--padding-xxlarge);
  line-height: 3.75rem;
  color: white; /* Set text color */
`;

const SubTitle = styled.span`
  font-size: var(--font-xxsmall);
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  padding-top: var(--padding-small);
  color: white; /* Set text color */
`;

function Landing() {
  return (
    <StyledLanding>
      <LandingIntroduction>
        <Title>Discover the perfect home.</Title>
        <SubTitle>serving through Millennium 2000</SubTitle>
        <SubTitle>based in El Paso, TX</SubTitle>
      </LandingIntroduction>
    </StyledLanding>
  );
}

export default Landing;

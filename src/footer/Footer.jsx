import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-small);
  color: #666;
  margin-top: var(--margin-medium);
`;

const Copyright = styled.a`
  font-family: 'Reenie Beanie', cursive;
  font-size: var(--font-small);
  padding-bottom: var(--padding-xsmall);
`;

function Footer() {
  return (
    <StyledFooter>
      <Copyright href="https://www.worldhello.us" target="_blank">
        &copy; WorldHello
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;

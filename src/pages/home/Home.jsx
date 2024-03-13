/* Media query for larger devices */

import styled from 'styled-components';
import Navigation from '../../navigation/Navigation';

const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

function Home() {
  return (
    <>
      <Navigation />
      <ResponsiveContainer></ResponsiveContainer>
    </>
  );
}

export default Home;

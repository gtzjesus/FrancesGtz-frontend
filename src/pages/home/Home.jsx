/* Media query for larger devices */

import styled from 'styled-components';
import Navigation from '../../navigation/Navigation';
import Landing from '../../components/landing/Landing';
import Houses from '../../components/houses/Houses';
import About from '../../components/about/About';
import Faqs from '../../components/faqs/Faqs';
import Millennium from '../../components/millennium/Millennium';
import Form from '../../components/form/Form';

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
      <ResponsiveContainer>
        <Landing />
      </ResponsiveContainer>
      <Houses />
      <ResponsiveContainer>
        <About />
        <Faqs />
        <Millennium />
        <Form />
      </ResponsiveContainer>
    </>
  );
}

export default Home;

/* Media query for larger devices */

import styled from 'styled-components';
import Navigation from '../../navigation/Navigation';
import Landing from '../../components/landing/Landing';
import Houses from '../../components/houses/Houses';
import About from '../../components/about/About';
import Faqs from '../../components/faqs/Faqs';
import Millennium from '../../components/millennium/Millennium';
import Form from '../../components/form/Form';
import Footer from '../../footer/Footer';

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
      <ResponsiveContainer id="about-section">
        <About />
        <Faqs />
        <Millennium />
      </ResponsiveContainer>
      <ResponsiveContainer id="contact-section">
        <Form />
      </ResponsiveContainer>
      <Footer />
    </>
  );
}

export default Home;

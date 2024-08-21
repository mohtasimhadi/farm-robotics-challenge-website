import React from 'react';
import Home from './sections/Home';
import PathFollowing from './sections/PathFollowing';
import PlantCounting from './sections/PlantCounting';
import QualityAssessment from './sections/QualityAssessment';
import TheTeam from './sections/TheTeam';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif; /* Apply sans-serif font to all elements */
  }
`;

const Navbar = styled.nav`
  background-color: #4CAF50; /* Green color for the navbar */
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure the navbar is on top of other content */
  border-bottom: none; /* Ensure there's no border */
`;

const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavbarItem = styled.li`
  margin: 0 1rem;
`;

const NavbarLink = styled.a`
  color: white; /* White text color */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const Content = styled.div`
  padding-top: 60px; /* Space for the fixed navbar */
`;

const Section = styled.section`
  margin: 0;
  background-color: ${(props) => (props.even ? '#eaf2e0' : '#f9f9f9')}; /* Greenish-white for even, white for odd */
`;

const Footer = styled.footer`
  background-color: #4CAF50; /* Green color for the footer */
  color: white; /* White text color */
  text-align: center;
  padding: 1rem;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle /> {/* Apply global styles */}
      <Navbar>
        <NavbarList>
          <NavbarItem><NavbarLink href="#home">Home</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink href="#pathFollowing">Path Following</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink href="#plantCounting">Plant Counting</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink href="#qualityAssessment">Quality Assessment</NavbarLink></NavbarItem>
          <NavbarItem><NavbarLink href="#theTeam">The Team</NavbarLink></NavbarItem>
        </NavbarList>
      </Navbar>

      <Content>
        <Section id="home"> <Home /> </Section>
        <Section id="pathFollowing" even> <PathFollowing /> </Section>
        <Section id="plantCounting"> <PlantCounting /> </Section>
        <Section id="qualityAssessment" even> <QualityAssessment /> </Section>
        <Section id="theTeam"> <TheTeam /> </Section>
      </Content>

      <Footer>
        <p>&copy; 2024 Smart Systems Lab, Auburn University. All rights reserved.</p>
      </Footer>
    </div>
  );
}

export default App;

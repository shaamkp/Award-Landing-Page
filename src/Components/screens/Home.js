import React from "react";
import styled from "styled-components";
import Logo from "../includes/images/logo.png";
import SportImage from "../includes/images/spot - image.png";
import Pattern from "../includes/images/pattern - color.png";
import { ReactComponent as Apple } from "../includes/images/apple.svg";
import { ReactComponent as CrossLine } from "../includes/images/cross - line.svg";
import { ReactComponent as Arrow } from "../includes/images/arrow.svg";
import { ReactComponent as Google } from "../includes/images/google.svg";
import { ReactComponent as Freepik } from "../includes/images/freepik-logo-.svg";
import { ReactComponent as Flaticon } from "../includes/images/flaticon.svg";
import FooterImage from "../includes/images/Footer - image.png";

export default function Home() {
  return (
    <>
      <Spotlight>
        <Header>
          <Left>
            <HeadImage>
              <HeadLink>
                <Image src={Logo} alt="Logo" />
              </HeadLink>
            </HeadImage>
          </Left>
          <Right>
            <Nav>
              <NavList>
                <NavLink>Home</NavLink>
              </NavList>
              <NavList>
                <NavLink>About Us</NavLink>
              </NavList>
              <NavList>
                <NavLink>Awards</NavLink>
              </NavList>
              <NavList>
                <NavLink>Contact Us</NavLink>
              </NavList>
            </Nav>
            <HeaderButton>Get Started</HeaderButton>
          </Right>
        </Header>
        <Main>
          <MainLeft>
            <MainHeading>
              2021 Global Design <MainHeadingsub>Awards </MainHeadingsub>
              Published
            </MainHeading>
            <MainPara>
              Here we published 2021 global design awards for the design
              Competitions
            </MainPara>
            <MainBox>
              <MainBoxPara>
                Alreardy Impressed ? <br />
                <MainBoxStrong>Get Started today !</MainBoxStrong>
              </MainBoxPara>
            </MainBox>
          </MainLeft>
          <MainRight>
            <Bg>
              <BgImage src={Pattern} alt="Image" />
            </Bg>
            <SpotImg>
              <MainImg src={SportImage} alt="Image" />
            </SpotImg>
          </MainRight>
        </Main>
      </Spotlight>

      <Awards>
        <AwardItem>
          <AwardsTop>
            <Apple />
            <Date>18 june 2020</Date>
          </AwardsTop>
          <AwardHeading>Gold Winner</AwardHeading>
          <AwardMain>Apple Design Award 2020-21</AwardMain>
          <CrossLine />
          <AwardBottom>
            <Place>United States</Place>
            <Arrow />
          </AwardBottom>
        </AwardItem>

        <AwardItem>
          <AwardsTop>
            <Google />
            <Date>08 March2020</Date>
          </AwardsTop>
          <AwardHeading>Runner Up</AwardHeading>
          <AwardMain>Google Design Award 2020-21</AwardMain>
          <CrossLine />
          <AwardBottom>
            <Place>India, New Delhi</Place>
            <Arrow />
          </AwardBottom>
        </AwardItem>

        <AwardItem>
          <AwardsTop>
            <Freepik />
            <Date>18 June 2020</Date>
          </AwardsTop>
          <AwardHeading>Silver Award</AwardHeading>
          <AwardMain>Freepik Best UI Award 2019-20</AwardMain>
          <CrossLine />
          <AwardBottom>
            <Place>France</Place>
            <Arrow />
          </AwardBottom>
        </AwardItem>

        <AwardItem>
          <AwardsTop>
            <Flaticon />
            <Date>24 Feb 2020</Date>
          </AwardsTop>
          <AwardHeading>Special Jury</AwardHeading>
          <AwardMain>Flaticon Design Award 2020-21</AwardMain>
          <CrossLine />
          <AwardBottom>
            <Place>New York</Place>
            <Arrow />
          </AwardBottom>
        </AwardItem>
      </Awards>

      <Contact id="contact-us">
        <ContactBox>
          <ContactImgBox>
            <Footer src={FooterImage} alt="Image" />
            <ContactContent>
              <ContactHeading>Want to get new design news</ContactHeading>
              <ContactPara>
                Here is an comaprison chart of us with thipsum tool , but at the
                end we win.
              </ContactPara>
              <ContactForm>
                <ContactInputText
                  type="email"
                  placeholder="Your email adress"
                ></ContactInputText>
                <ContactButton>Get Started</ContactButton>
                <ImageSpan></ImageSpan>
              </ContactForm>
            </ContactContent>
          </ContactImgBox>
        </ContactBox>
      </Contact>

      <FooterDiv>
        <FooterLeft>
          <LogoDiv>
            <FooterLogo src={Logo} alt="Logo" />
          </LogoDiv>
          <Adress>
            Apartment 0031 Broadmoor Ln <br />
            Rotonda West Wood,
            <br />
            FL,33947
          </Adress>
        </FooterLeft>
        <FooterRight>
          <Nav>
            <NavList>
              <NavLink>Home</NavLink>
            </NavList>
            <NavList>
              <NavLink>About Us</NavLink>
            </NavList>
            <NavList>
              <NavLink>Awards</NavLink>
            </NavList>
            <NavList>
              <NavLink>
                Contact Us | Designed by <Owner>www.Steyp.in</Owner>
              </NavLink>
            </NavList>
          </Nav>
        </FooterRight>
      </FooterDiv>
    </>
  );
}

const Spotlight = styled.div`
  background: #141414;
  height: 100vh;
`;
const Header = styled.div`
  background: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
`;
const Left = styled.div`
  width: 18%;
  @media all and (max-width: 480px){
    width:30%;
  }
  @media all and (max-width: 360px){
    width: 100%;
  }
`;
const HeadImage = styled.h1``;
const HeadLink = styled.a``;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  @media all and (max-width: 980px){
    display: none;
  }
`;
const NavList = styled.li`
  margin-left: 20px;
`;
const NavLink = styled.a`
  color: var(--text-black);
  cursor: pointer;
  &:hover{
    color:#fff;
  }
`;
const HeaderButton = styled.a`
  margin-left: 20px;
  cursor: pointer;
  color: var(--orange);
  border: 1px solid #92083be0;
  padding: 10px;
  border-radius: 10px;
  @media all and (max-width: 360px){
    display: none;
  }
`;
const Main = styled.div`
  padding: 20px 70px;
  display: flex;
  justify-content: space-between;
`;
const MainLeft = styled.div`
  width: 50%;
  @media all and (max-width: 980px){
    width: 100%;
  }
`;
const MainHeading = styled.h2`
  font-size: 40px;
  color: #fff;
  max-width: 500px;
  @media all and (max-width: 480px){
    font-size: 25px;
  }
`;
const MainHeadingsub = styled.a`
  font-size: 40px;
  color: var(--text);
`;

const MainPara = styled.p`
  font-size: 19px;
  max-width: 400px;
  color: var(--text-black);
  line-height: 1.7em;
  @media all and (max-width: 480px){
    font-size: 15px;
  }
`;
const MainBox = styled.div`
  background: linear-gradient(to right, red, purple);
  width: 30%;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  color: #fff;
  @media all and (max-width: 1280px) {
    width: 40%;
  }
  @media all and (max-width: 640px){
    width:60%;
    margin: 0 auto;
  }
  @media all and (max-width: 480px){
    width:80%;
  }
  @media all and (max-width: 360px){
    width:90%;
  }
`;
const MainBoxPara = styled.p`
  max-width: 200px;
  line-height: 1.5em;
`;
const MainBoxStrong = styled.a`
  font-weight: bold;
`;
const MainRight = styled.div`
  position: relative;
  width: 44%;
  z-index:0;
  @media all and (max-width: 980px){
    display: none;
  }
`;
const SpotImg = styled.div`
  width: 100%;
  z-index: 3;
`;

const BgImage = styled.img`
  display: block;
  width: 100%;
  filter: blur(40px);
  @media all and (max-width: 1280px) {
    filter: blur(60px);
  }
`;
const MainImg = styled.img`
  display: block;
  width: 100%;
  @media all and (max-width: 1280px) {
    display: none;
  }
`;

const Bg = styled.div`
  width: 30%;
  position: absolute;
  bottom: 5%;
  right: b;
  right: 80%;
  z-index:-1;
`;

const Awards = styled.div`
  background: #141414;
  padding: 20px 70px;
  display: flex;
  justify-content: space-between;

  transition: 0.4s ease-in-out;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
  }
`;
const AwardItem = styled.div`
  padding: 15px;
  border: 1px solid var(--orange);
  height: 350px;
  border-radius: 10px;
  &:hover {
    background: linear-gradient(
      to right bottom,
      #e34e40,
      #e14259,
      #d83d71,
      #c94087,
      #b34899
    );
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }
  @media all and (max-width: 1280px) {
    width: 45%;
    margin: 0 auto;
    margin-top: 17px;
  }
  @media all and (max-width: 768px){
    width:100%;
  } 
`;
const AwardsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;
const Date = styled.span`
  color: var(--text-black);
  font-size: 15px;
  font-weight: 300;
`;
const AwardHeading = styled.h6`
  color: var(--text-black);
`;
const AwardMain = styled.h3`
  color: #fff;
  max-width: 224px;
  margin-bottom: 70px;
`;
const AwardBottom = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Place = styled.small`
  color: #fff;
`;

const Contact = styled.section`
  background: #141414;
  padding: 100px 70px;
  position: relative;
`;
const ContactBox = styled.div`
  width: 100%;
`;
const ContactImgBox = styled.div`
@media all and (max-width: 1280px){

}
`;
const Footer = styled.img`
  width: 100%;
  display: block;
  @media all and (max-width: 1280px) {
    display: none;
  }
`;

const ImageSpan = styled.span`
  display: block;
  background: linear-gradient(359deg, #000000c4, transparent);
`;

const ContactContent = styled.div`
  position: absolute;
  padding: 20px;
  top: 27%;
  @media all and (max-width: 1280px){
    position: initial;
  }
`;
const ContactHeading = styled.h2`
  font-size: 40px;
  max-width: 470px;
  color: #fff;
  @media all and (max-width: 480px){
    font-size: 20px;
  }
`;
const ContactPara = styled.p`
  font-size: 18px;
  max-width: 410px;
  line-height: 1.4em;
  color: var(--text-black);
`;
const ContactForm = styled.form`
  margin-top: 15px;
  @media all and (max-width: 480px){
    display:none;
  }
`;
const ContactInputText = styled.input`
  width: 50%;
  padding: 15px;
  border-color: lightgrey;
  @media all and (max-width: 640px){
    width:55%;
  }
`;
const ContactButton = styled.button`
  padding: 18px;
  background: linear-gradient(
    to right bottom,
    #e34e40,
    #e14259,
    #d83d71,
    #c94087,
    #b34899
  );
  margin-left: -30px;
  border-radius: 10px;
  border: black;
  boreder: none;
  color: #fff;
  font-weight: 600;
`;

const FooterDiv = styled.div`
  background: #141414;
  padding: 0px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FooterLeft = styled.div`
  width: 40%;
  @media all and (max-width: 980px){
    width: 100%;
  }
  @media all and (max-width: 640px){
    margin:0 auto;
  }
`;
const LogoDiv = styled.div`
  width: 30%;
`;
const FooterLogo = styled.img`
  display: block;
  width: 100%;
`;
const Adress = styled.p`
  font-size: 15px;
  color: var(--text-black);
`;
const FooterRight = styled.div`
  @media all and (max-width: 1080px){
    width:100%;
  }
  @media all and (max-width: 980px){
    display: none;
  }
`;
const Owner = styled.small`
  color: red;
`;

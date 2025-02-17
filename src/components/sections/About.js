import { React } from "react";
import { Typography, styled } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";

//Component styles//
const StyledScrollingContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "inherit",
  animation: "fadeInUp",
  animationDuration: "1s",

  "&::before": {
    content: "''",
    position: "absolute",
    top: "45px",
    left: "-4px",
    display: "block",
    width: "100px",
    height: "75px",
    background: `linear-gradient(90deg,${theme.palette.background.main},hsla(0,0%,100%,0))`,
    backgroundSize: "contain",
    zIndex: "1000",
  },
  "&::after": {
    content: "''",
    position: "relative",
    top: "-71px",
    left: "883px",
    [theme.breakpoints.down("lg")]: {
      position: "absolute",
      left: "unset",
      right: "0",
      top: "45px",
    },
    display: "block",
    width: "100px",
    height: "75px",
    background: `linear-gradient(270deg,${theme.palette.background.main},hsla(0,0%,100%,0))`,
    backgroundSize: "contain",
    zIndex: "1000",
  },
}));
const StyledScrollingBelt = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "3rem",
  overflow: "hidden",
  width: "98%",
  marginLeft: "0.1rem",
}));
const StyledScrollingItem = styled("div")(({ theme }) => ({
  "@keyframes moveLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-1600%)",
    },
  },
  animation: "moveLeft 22s linear infinite",
  background: theme.palette.backgroundSecondary.main,
  marginRight: "3rem",
  borderRadius: "1rem",
  padding: "1rem",
  minWidth: "8rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginRight: "2.2rem",
    padding: "0.9rem 0.6rem 0.75rem 0.9rem",
  },
  [theme.breakpoints.down("xs")]: {
    marginRight: "1.6rem",
    padding: "0.7rem 0.5rem 0.7rem 0.5rem",
    minWidth: "5rem",
  },
}));
const StyledScrollingText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem !important",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem !important",
  },
}));
//End component styles

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const technologiesArr = [
    "JavaScript",
    "React",
    "Swift",
    "AWS",
    "Material-UI",
    "SASS",
    "CSS",
    "GraphQL",
    "PostgresSQL",
    "MongoDB",
    "SwiftUI",
    "Git",
    "Python",
    "Java"
  ];

  return (
    <Scroll.Element name="About">
      <StyledGenericRoot>
        <StyledGenericContainer
          style={{ overflow: "hidden" }}
          ref={aboutContainer}
          sx={
            aboutContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            aboutContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <StyledGenericTitle component="h1">
            About Me
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="h1">
            Hi! I’m Devyn, and I’ve been building mobile and web applications
            for around 5 years, with a strong focus on React. I’m passionate
            about creating intuitive and engaging user interfaces, and
            currently, I specialize in developing web applications with React
            and mobile apps with Swift. Below, you’ll find a list of the
            technologies and tools I’ve worked with.
          </StyledGenericSubText>
          <StyledScrollingContainer>
            <StyledScrollingBelt>
              {technologiesArr.map((item, index) => (
                <StyledScrollingItem key={index}>
                  <StyledScrollingText component="h1">
                    {item}
                  </StyledScrollingText>
                </StyledScrollingItem>
              ))}
            </StyledScrollingBelt>
          </StyledScrollingContainer>
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default About;

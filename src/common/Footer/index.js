import {
  Wrapper,
  Header,
  SubHeader,
  Container,
  Info,
  StyledLink,
} from "./styled";
import { ReactComponent as Github } from "./icons/Github.svg";
import { ReactComponent as Facebook } from "./icons/Facebook.svg";
import { ReactComponent as LinkedIn } from "./icons/LinkedIN.svg";
import { ReactComponent as Instagram } from "./icons/Instagram.svg";
import { EMAIL } from "../../features/PersonalHomepage/email";

const Footer = () => (
  <>
    <Wrapper>
      <SubHeader>Let's talk!</SubHeader>
      <Header href={`mailto:${EMAIL}`}>{EMAIL}</Header>
      <Info>
        I'm always open to new projects.
      </Info>
    </Wrapper>
    <Container>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://github.com/GulnazLesbay"
      >
        <Github />
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/"
      >
        <Facebook />
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/"
      >
        <LinkedIn />
      </StyledLink>
      <StyledLink
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/"
      >
        <Instagram />
      </StyledLink>
    </Container>
  </>
);

export default Footer;

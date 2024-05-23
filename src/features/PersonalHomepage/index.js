import { ThemeSwitch } from "../../features/Theme/ThemeSwitch";
import { Container } from "./Container/styled";
import { skills } from "../../common/Tile/skills";
import { skillsToLearn } from "../../common/Tile/skillsToLearn";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Portfolio from "./Portfolio";
import Tile from "../../common/Tile";

const PersonalHomepage = () => {
  return (
    <Container>
      <ThemeSwitch />
      <Header />
      <Tile title="My skillset includes 🛠️" skills={skills} />
      <Tile title="Currently focusing on 🚀" skills={skillsToLearn} />
      <Portfolio />
      <Footer />
    </Container>
  );
};

export default PersonalHomepage;

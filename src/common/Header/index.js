import { useState } from 'react';
import {
  Wrapper,Image,Content,  SubHeader,Name,  Info,  Message,  ButtonWrapper,  ButtonListWrapper,  DownloadButton,  Person,  List,  ListItem,  PolishFlag,  EnglishFlag,
} from './styled';
import photo from '../Header/images/me.jpg';
import { ButtonLink } from '../ButtonLink';
import { EMAIL } from '../../features/PersonalHomepage/email';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Wrapper>
      <Image
        src={photo}
        alt='me'
      />
      <Content>
        <SubHeader>This is</SubHeader>
        <Name>Lesbay Gulnaz</Name>
        <Info>
          👨🏻‍💻💻 I'm a passionate Frontend Developer in love with React. Right now
          I'm focused at learning the TypeScript and Node.js, currently looking
          for new job opportunities.
        </Info>
        <ButtonWrapper>
          <ButtonLink href={`mailto:${EMAIL}`}>
            <Message />
            Hire me
          </ButtonLink>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default Header;

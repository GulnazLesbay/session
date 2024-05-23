import styled from 'styled-components';
import { ReactComponent as MessageItem } from './icons/hireme.svg';
import { ReactComponent as PersonIcon } from './icons/person.svg';
import { ReactComponent as EnglishFlagIcon } from './icons/gb.svg';
import { ReactComponent as PolishFlagIcon } from './icons/pl.svg';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 66px;
  align-items: center;
  margin-bottom: 63px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 13px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  transition: 0.7s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 133px;
    height: 133px;
  }
`;

export const Content = styled.div``;

export const SubHeader = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.site.text};
`;

export const Name = styled.header`
  font-weight: 900;
  font-size: clamp(22px, 5vw, 38px);
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: clamp(17px, 5vw, 20px);
  line-height: 1.4;
  max-width: 633px;
  margin-top: 35px;
  margin-bottom: 32px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.site.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
  }
`;

export const Message = styled(MessageItem)`
  width: 19.23px;
  height: 17.12px;
`;

export const Person = styled(PersonIcon)`
  width: 22px;
  height: 22px;
`;

export const EnglishFlag = styled(EnglishFlagIcon)`
  width: 22px;
  height: 22px;
`;

export const PolishFlag = styled(PolishFlagIcon)`
  width: 22px;
  height: 22px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: max-content;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 8px 0 0 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ButtonListWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DownloadButton = styled.a`
  padding: 12px 16px;
  gap: 16px;
  position: relative;
  width: fit-content;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.buttonLink.text};

  &:hover {
    box-shadow:
      2px -2px 0px #8cc2ff,
      -2px 2px 0px #8cc2ff,
      2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }
`;

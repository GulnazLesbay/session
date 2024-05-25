import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../../Theme/themeSlice";
import {
  Wrapper,
  StyledButton,
  StyledText,
  Container,
  IconWrapper,
  Icon,
} from "./style";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <StyledButton onClick={() => dispatch(toggleTheme())}>
        <StyledText>Dark mode {isDarkTheme ? "on" : "off"}</StyledText>
        <Container>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Container>
      </StyledButton>
    </Wrapper>
  );
};

//Создание компонента, использующего useContext
const UserContext = React.createContext(); //тек Провайдер пайдаланылады,seb useContext ілгегі арқылы қатынасады.

const UserInfo = () => {
  const user = React.useContext(UserContext); //kod oku lenildetedi
  return <p>User: {user.name}</p>;
};

const UserPage = () => {
  const user = { name: "Gulnaz" };

  return (
    <div>
      <h1>User Page</h1>
      <UserContext.Provider value={user}>
        <UserInfo />
      </UserContext.Provider>
    </div>
  );
};

//Использование порталов/HOCs
const PortalModal = ({ children }) => { //React Portals көмегімен көрсетілетін модальды терезені жасайды
  const portalRoot = document.getElementById("portal-root");
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null; //ReactDOM.createPortal ark portal sozd,portalRoot элементінде childrendi korsetu ushin
};

const Modal = () => {
  return (
    <PortalModal>
      <div id="portal-root">
      </div>
    </PortalModal>
  );
};

const PageWithModal = () => {
  return (
    <div id="portal-root">
      </div>
  );
};

export { UserPage, PageWithModal };

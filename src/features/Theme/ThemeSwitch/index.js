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

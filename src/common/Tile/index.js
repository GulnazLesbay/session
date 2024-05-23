import { StyledTile, Title, StyledList, Item, Dot } from "./styled";

const Tile = ({ title, skills }) => (
  <StyledTile>
    <Title>{title}</Title>
    <StyledList>
      {skills.map((skill) => (
        <Item key={skill}>
          <Dot />
          {skill}
        </Item>
      ))}
    </StyledList>
  </StyledTile>
);

export default Tile;

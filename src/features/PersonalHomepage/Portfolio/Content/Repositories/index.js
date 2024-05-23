import {
  Wrapper,
  Container,
  Title,
  Description,
  LinkContainer,
  Text,
  DatesContainer,
  StyledLink,
  Tags,
  TagsContainer,
} from './styled';
import moment from 'moment/moment';

export const Repositories = ({ repositories }) => {
  const sortedRepositories = repositories
    .filter((repositories) => repositories.topics && repositories.topics.length)
    .slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  console.log(sortedRepositories);

  return (
    <Wrapper>
      {sortedRepositories.map(
        ({
          id,
          name,
          description,
          html_url,
          homepage,
          topics,
          created_at,
          updated_at,
        }) => (
          <Container key={id}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <LinkContainer>
              <Text>Demo:</Text>
              <StyledLink
                target='_blank'
                rel='noreferrer'
                href={homepage}
              >
                Visit page
              </StyledLink>
            </LinkContainer>
            <LinkContainer>
              <Text>Code:</Text>
              <StyledLink
                target='_blank'
                rel='noreferrer'
                href={html_url}
              >
                Browse repository
              </StyledLink>
            </LinkContainer>
            <DatesContainer>
              <Text key={created_at}>
                Created at:&nbsp;{moment(created_at).format('DD.MM.YYYY')}
              </Text>
              <Text key={updated_at}>
                Updated at:&nbsp;{moment(updated_at).format('DD.MM.YYYY')}
              </Text>
            </DatesContainer>
            <TagsContainer>
              {topics.map((topic) => (
                <Tags key={topic.id}>{topic}</Tags>
              ))}
            </TagsContainer>
          </Container>
        ),
      )}
    </Wrapper>
  );
};

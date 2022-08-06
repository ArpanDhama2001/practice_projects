import { Link } from "react-router-dom";
import { Container, ListItem, OrderedList, Text } from "@chakra-ui/react";
import projectList from "../ProjectList";
const Home = () => {
  return (
    <Container>
      <Text as="h1" fontSize="4xl" mb={8}>
        Projects
      </Text>
      <OrderedList>
        {projectList.map((project) => {
          return (
            <ListItem key={project.id}>
              <Link to={`${project.id}`}>{project.title}</Link>
            </ListItem>
          );
        })}
      </OrderedList>
    </Container>
  );
};

export default Home;

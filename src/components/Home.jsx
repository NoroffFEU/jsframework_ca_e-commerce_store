import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturedItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Button = styled.button`
  background-color: #2196f3;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0d8bf0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SearchBar = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

function Home() {
  return (
    <>
      <h2>Welcome to our store!</h2>
      <SearchBar type="text" placeholder="Search" />
      <CenteredContainer>
        <GridContainer>
          <FeaturedItem>
            <Image src="https://via.placeholder.com/300x200" alt="Featured Item" />
            <Title>Featured Item Title</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec enim vel
              mauris interdum vestibulum.
            </Description>
            <Button>Shop Now</Button>
          </FeaturedItem>
          <FeaturedItem>
            <Image src="https://via.placeholder.com/300x200" alt="Featured Item" />
            <Title>Featured Item Title</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec enim vel
              mauris interdum vestibulum.
            </Description>
            <Button>Shop Now</Button>
          </FeaturedItem>
          <FeaturedItem>
            <Image src="https://via.placeholder.com/300x200" alt="Featured Item" />
            <Title>Featured Item Title</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec enim vel
              mauris interdum vestibulum. 
            </Description>
            <Button>Shop Now</Button>
          </FeaturedItem>
        </GridContainer>
      </CenteredContainer>
    </>
  );
}

export default Home;

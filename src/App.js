import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API, POSTS } from "./constants";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";


function ImageSquare({ deal }) {
  const { image, id } = deal;
  return (
    <Link
    to={"deal/" + id }
    style={{
      width: "18rem",
      marginLeft: "1rem",
      marginTop:  "2rem",
    }}
    >
      <Image
        src={image}
        style={{
          objectFit: "cover",
          width: "18rem",
          height: "18 rem",
        }}
      />
    </Link>
  );
}

function App() {
  const [deals, setDeals] = useState([]);
  async function getDeals() {
    try {
      const response = await axios.get(API + POSTS);
      const deals = response.data;
      console.log(deals);
      setDeals(deals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDeals();
  }, []);

  const ImagesRow = () => {
    return deals.map((deal, index) => <ImageSquare key={index} deal={deal} />);
  }

  return (
    <>
    <Navbar variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">DealsGoWhere</Navbar.Brand>
        <Nav>
          <Nav.Link href="/add">Add Deal</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <ImagesRow />
      </Row>
    </Container>
    </>
  );
}


export default App;
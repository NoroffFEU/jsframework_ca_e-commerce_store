import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image, Button } from 'react-bootstrap';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);

  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Response data is not an array.');
        }
      })
      .catch(error => console.error(error));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderProducts = currentProducts.map(product => (
    <Card key={product.id} className="m-3 shadow" style={{ width: '18rem' }}>
      <Image src={product.image_url} alt={product.title} fluid className="p-3" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">${product.price}</Button>
      </Card.Body>
    </Card>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => (
    <li key={number} className="page-item">
      <a href="!#" className="page-link" onClick={() => setCurrentPage(number)}>
        {number}
      </a>
    </li>
  ));

  return (
    <>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        {renderProducts}
      </Container>
      <nav>
        <ul className="pagination justify-content-center">
          {renderPageNumbers}
        </ul>
      </nav>
    </>
  );
};

export default Product;

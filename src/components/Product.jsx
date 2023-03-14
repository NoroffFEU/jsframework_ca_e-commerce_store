import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #e6e6e6;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;

const Image = styled.img`
  display: block;
  height: 200px;
  margin: 0 auto;
  object-fit: cover;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop/products')
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

  return (
    <Container>
      {products.map(product => (
        <Card key={product.id}>
          <Image src={product.image_url} alt={product.title} />
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>${product.price}</Price>
        </Card>
      ))}
    </Container>
  );
};

export default Product;
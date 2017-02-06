import React from 'react';
import styled from 'styled-components';
import Color from 'goethe';

const backgroundColor = '#FFBD24';
const borderColor = Color('#FFBD24').opacity(0.3).toString();

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Item = styled.a`
  display: block;
  cursor: pointer;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: ${backgroundColor};
  box-shadow: 0 0 0 0.6rem ${borderColor};
  font-size: 1.5rem;
  text-align: center;
  line-height: 3rem;
  vertical-align: middle;
  user-select: none;

  &:active {
    background: ${Color(backgroundColor).darken(0.3).toString()};
    color: ${Color('white').darken(0.3).toString()};
    box-shadow: 0 0 0 0.5rem ${borderColor};
  }
`;

const Voting = ({ answers, onClick }) => (
  <Row>
    {
      answers.map(({ id }, key) => (
        <Item
          key={key}
          onClick={() => onClick(id)}
        >
          +1
        </Item>
      ))
    }
  </Row>
);

export default Voting;

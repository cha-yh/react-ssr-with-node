import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { increase, decrease } from '@actions/counterAction';
import styled from 'styled-components';

function Home() {
  const number = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      My Home
      <h3 style={{ color: 'black' }}>{moment().format('YYYY MM DD, h:mm:ss a')}</h3>
      <div>counter: {number}</div>
      <Button type="button" onClick={() => dispatch(increase())}>
        increase
      </Button>
      <Button type="button" onClick={() => dispatch(decrease())}>
        decrease
      </Button>
    </div>
  );
}

const Button = styled.button`
  background: red;
  padding: 1rem;
  margin-right: 1rem;
`;

export default Home;

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      mission_name
    }
  }
`;


const Title = styled('h1')`
  margin: 0;
  font-size: 20px;
  color: orange;
`;

const News = () => {
  const { loading, error, data } = useQuery<{launches: {id: number, mission_name: string}[]}>(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log('error', error);
    return <p>Error :(</p>;
  }
  if(data) {
    console.log('data', data);
  }
  return (
    <div>
      <Helmet>
        <title>News</title>
      </Helmet>
      <Title>News</Title>
      <>
        {data?.launches.map(list => <p>{list.id} / {list.mission_name}</p>)}
      </>
    </div>
  )
};

export default News;

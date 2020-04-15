import React, { useCallback } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;


const DogPhoto: (breed: any) => any = ({ breed }) => {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed }
  });

  const [getDog, { loading: dogLoading, data: dogData}] = useLazyQuery(GET_DOG_PHOTO);


  if (loading) return null;
  if (dogLoading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => getDog({ variables: {breed: 'bulldog'}})}>Refetch!</button>
      {dogData && <img src={dogData.dog.displayImage} style={{ height: 100, width: 100 }} />}
    </div>
  );
};
export default DogPhoto;
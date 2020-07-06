import React, { useState, useCallback, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './App.css';

interface Props { }

const GET_ALL_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

const READ_ALL_query: React.FC<Props> = ({ }) => {
  const [todoText, setTodoText] = useState<string>('');

  //fetch all the todos
  const { error, loading, data: allTodos } = useQuery(GET_ALL_TODOS);
  
  {
    if (error) return <p>Something's wrong</p>;
    if (loading) return <p>Loading...</p>;
    console.log(allTodos)
  }


  return (
    <div className="App">
      <form >
        <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />

        <ADD_mutation type={todoText} />

        <button>update Todo</button>
      </form>
    </div>
  );
}

export default READ_ALL_query;

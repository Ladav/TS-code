import React, { useState, useEffect, useCallback } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation, useLazyQuery, useApolloClient } from '@apollo/react-hooks';

interface Props { }

const GET_ALL_TODOS = gql`
  query allTodos {
    todos {
      id
      title
      completed
    }
  }
`;

const sur = gql`
  mutation sign {
  signUp (username: "someone", email: "a@a.com", password: "dsfsa") {
    username
    email
    id
  }
}
`;


const App: React.FC<Props> = ({ }) => {
  const client = useApolloClient();
  const [todoText, setTodoText] = useState<string>('');
  // const { error, loading, data } = useQuery(GET_ALL_TODOS);
  const [runmu, {loading}] = useMutation(sur);
  console.log(runmu())

  // fetch all todos initialy
  // const [loadTodos, { called, loading, data }] = useLazyQuery(GET_ALL_TODOS);
  // const loadAllTodods = useCallback(() => {
  //   const alldata = loadTodos();
  //   console.log(alldata)
  // }, [loadTodos]);

  // useEffect(() => {
  //   loadAllTodods()
  // }, [loadAllTodods]);


  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <form >
        <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
        <button>Add todo</button>
        <button>update Todo</button>
      </form>
      <ul style={{ display: 'flex', flexFlow: 'column' }}>
        {
          // data.todos.map((todo: { id: string, type: string }) => {
          //   return <li key={todo.id}>id:{todo.id} and todo:{todo.type}</li>
          // })
        }
      </ul>
    </div>
  );
};

export default App;
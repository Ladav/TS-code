import React, { useMemo, useState } from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import axios from "axios";

const fetchData = async () => {
  let { data } = await axios(
    "https://gorest.co.in/public-api/users?access-token=W0fWjVki_HosI5GhU6pdcfdwKjna-FNmDwAA"
  );

  return data;
};

const updateData = async (variables: any) => {
  let { data } = await axios.post(
    "https://gorest.co.in/public-api/users?access-token=W0fWjVki_HosI5GhU6pdcfdwKjna-FNmDwAA",
    variables
  );

  return data;
};

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [mutation, { data, isLoading, isError }] = useMutation(updateData);

  if (data && !isLoading && !isError) {
    const oldData = queryCache.getQueryData('result')

    console.log(oldData)
    //update cache internally

  }

  const sumbmitHandler = async () => {
    await mutation({
      first_name: firstName,
      last_name: lastName,
      email,
      gender,
    });
  };

  return (
    <>
      <p>add new User</p>
      <div style={{ display: "flex" }}>
        <p>First Name: </p>
        <input
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <p>Last Name: </p>
        <input
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <p>Gender: </p>
        <input
          type="text"
          value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
      </div>
      <div>
        <p>Email: </p>
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <button onClick={sumbmitHandler}>ADD USER</button>
    </>
  );
};

const Render = () => {
  const { data, error, status } = useQuery({
    queryKey: "result",
    queryFn: fetchData,
    config: {
      retry: 1,
    },
  });

  const content = useMemo(() => {
    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (status === "error") {
      // @ts-ignore
      return <p>error: {error?.message}</p>;
    }

    if (data) {
      // @ts-ignore
      const { result } = data;
      return (
        <div>
          {result.map((item: any) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 260,
              }}
            >
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
            </div>
          ))}
        </div>
      );
    }
  }, [status, data]);

  return (
    <>
      <AddUser />
      {content}
    </>
  );
};

function App() {
  return (
    <>
      <Render />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;

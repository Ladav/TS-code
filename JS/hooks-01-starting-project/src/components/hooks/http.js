import { useReducer, useCallback } from "react";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  extras: null,
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { isLoading: true, error: null, data: null, extras: null };
    case "RESPONSE":
      return {
        isLoading: false,
        data: action.responseData,
        extras: action.extras,
      };
    case "ERROR":
      return { isLoading: false, error: action.errorMessage };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Can't Do this!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => {
    dispatchHttp({type: 'CLEAR'});
  }, []);

  const sendRequest = useCallback((url, method, body, extras) => {
    dispatchHttp({ type: "SEND" });
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      header: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData, extras);
        dispatchHttp({
          type: "RESPONSE",
          responseData: { ...resData },
          extras: extras,
        });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorMessage: error.message });
      });
  }, []);

  return {
    isLoading: httpState.isLoading,
    error: httpState.error,
    data: httpState.data,
    reqExtras: httpState.extras,
    sendRequest: sendRequest,
    clear: clear
  };
};

export default useHttp;
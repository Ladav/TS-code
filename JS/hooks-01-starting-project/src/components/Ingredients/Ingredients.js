import React, {
  useReducer,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../hooks/http";

const ingredientsReducer = (curIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...curIngredients, action.ingredient];
    case "DELETE":
      return curIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Can't Do this!");
  }
};

const Ingredients = (props) => {
  const { isLoading, error, data, reqExtras, sendRequest, clear } = useHttp();
  const [getIngredients, dispatch] = useReducer(ingredientsReducer, []);
  
  useEffect(() => {
    console.log(data, reqExtras)
    if(reqExtras && !isLoading && !error) dispatch({ type: "DELETE", id: reqExtras });
    else if(data && !isLoading && !error) dispatch({type: 'ADD', ingredient: data});
  }, [data, reqExtras, isLoading, error]);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest(
      'https://testing-e7dc9.firebaseio.com/ingredients.json',
      'POST',
      ingredient
    );
  }, [sendRequest]);

  const removeIngredientHandler = useCallback((id) => {
    console.log(id)
      sendRequest(
        `https://testing-e7dc9.firebaseio.com/ingredients/${id}.json`,
        'DELETE',
        null,
        id
      );
    },
    [sendRequest]
  );

  const setSearchedIngredients = useCallback((ings) => {
    dispatch({ type: "SET", ingredients: ings });
  }, []);

  const ingredientlist = useMemo(() => {
    return (
      <IngredientList
        ingredients={getIngredients}
        onRemoveIngredient={removeIngredientHandler}
      />
    );
  }, [getIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        isLoading={isLoading}
        onAddIngredient={addIngredientHandler}
      />
      <section>
        <Search setSearchIngredients={setSearchedIngredients} />
        {ingredientlist}
      </section>
    </div>
  );
};

export default Ingredients;

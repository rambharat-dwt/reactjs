import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import User from "./components/User";
import Effect from "./components/UseEffect";
import Datastrore from "./components/DataStore";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";
import Validation from "./components/Validation";

import Login from "./components/Login";
import { useDispatch } from "react-redux";
import Counter from "./components/Counter";

import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import NewUser from "./components/newTutes/Todos";
import Class from "./components/Class";

const dummyExpenses = [
  {
    id: "e1",
    title: "School Fee",
    amount: 300,
    date: new Date(2022, 8, 23),
  },
  {
    id: "e2",
    title: "House Rent",
    amount: 600,
    date: new Date(2022, 10, 12),
  },
  {
    id: "e3",
    title: "Books",
    amount: 200,
    date: new Date(2022, 5, 15),
  },
  {
    id: "e4",
    title: "Foods",
    amount: 400,
    date: new Date(2022, 11, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const dispatch = useDispatch();

  const addExpenseHandler = (expense) => {
    // console.log(expenses);
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <>
      <div className="app">
        <NewUser />
        {/* <Class /> */}

        {/* <BrowserRouter>
          <Header />
          <Routes>
          <Route path="/" element={<ProductList />} /> 
            {/* <Route path="/product/:productId" element={<ProductDetail />} /> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}
        {/* <ProductList /> */}

        {/* <Counter></Counter>
        <Product></Product>
        <Login></Login> */}
        {/* <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} /> */}
        {/* <Validation></Validation> */}
        {/* <User></User> */}
        {/* <Redux></Redux> */}
        {/* <Effect /> */}
        {/* <Datastrore></Datastrore> */}
      </div>
    </>
  );
}

export default App;

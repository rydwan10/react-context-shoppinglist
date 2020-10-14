import React from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import ItemContextProvider from './contexts/ItemContext';

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Header />
        <ShoppingList />
        <AddItem />
      </ItemContextProvider>
      <Footer />
    </div>
  );
}

export default App;

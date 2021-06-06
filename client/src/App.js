import {useState} from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import { Provider } from 'react-redux';
import store from './store';
import AddCategory from './components/AddCategory';
import AddItem from './components/AddItem';
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [showAddCategory, setShowAddCategory] = useState(false)

  const toggleState = () => {
    setShowAddCategory(!showAddCategory)
  }

  return (
    <Provider store = {store}>
      <div className="container">
      <Header text='Categories' onAdd={toggleState} changeColor={showAddCategory}/>
      {showAddCategory && <AddCategory/>}
      {/*<Categories categories = {categories} onDelete = {deleteCategory} onToggle = {toggleReminder}/>*/}
      <Categories/>
      </div>
    </Provider>
  );
}

export default App;

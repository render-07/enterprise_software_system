import {useState} from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const [showAddCategory, setShowAddCategory] = useState(false)

  const changeState = () => {
    setShowAddCategory(!showAddCategory)
  }

  return (
    <Provider store = {store}>
      <div className="container">
      <Header text='Categories' onAdd={changeState} changeColor={showAddCategory}/>
      {/*<Categories categories = {categories} onDelete = {deleteCategory} onToggle = {toggleReminder}/>*/}
      <Categories/>
      </div>
    </Provider>
  );
}

export default App;

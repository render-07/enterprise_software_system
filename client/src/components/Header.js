import AddCategoryButton from './AddCategoryButton'

const Header = ({text, onAdd, changeColor}) => {
    return (
        <header className='header'>
            <h1>{text}</h1>
            <AddCategoryButton 
                text = {changeColor ? 'Close' : 'Add category'}
                onAdd = {onAdd}
                color = {changeColor ? 'red' : 'green'}/>
        </header>
    )
}

export default Header

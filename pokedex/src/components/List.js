import './List.css';
import ControlPage from './ControlPage'


function List (){
  return(
    <div className='list'>
      <p className='logo'>Pokemons</p>
      
      <ControlPage />
    </div>
  );
}

export default List;
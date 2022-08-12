import './List.css';
import ControlPage from './ControlPage'
import Api from './Api'


function List (){
  return(
    <div className='list'>
      <p className='logo'>Pokemons</p>

      <Api />
      
      <ControlPage />
    </div>
  );
}

export default List;
import '../styles/List.css';
import ControlPage from './ControlPage';
import Nav from './Nav';


function List (){
  return(
    <div className='list'>
      <p className='logo'>Pokemons</p>

      <Nav />

      <ControlPage />
    </div>
  );
}

export default List;
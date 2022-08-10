import './Description.css';

function Description (){
  return(
    <div className='description'>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" className='image'></img>
      <p className='name'>Charizard</p>
      <p className='type'>Fire</p>
      <p className='status'>a</p>
    </div>
  );
}

export default Description;
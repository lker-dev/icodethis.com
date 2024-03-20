const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);


const options = [
  "Login",
  "Join",
  "Change Language",
  "Image and Video API",
  "Apps and Plugins",
  "FAQ",
  "Partnerships",
  "Inprint and Terms",
]

function Menu({handleClick}) {

  return(
    <menu className="absolute rounded p-2 bg-purple-800 text-yellow-100">
      <button  onClick={handleClick}>
	{options.map(option => 
	<li className="p-1 cursor-pointer hover:bg-purple-600 rounded">
	  {option}
	</li>
	  )
	}
      </button>
    </menu>
  ) 
}

function CardOptions({symbol}) {
  const [menu, setMenu] = React.useState(false);

  function handleClick() {
    setMenu(!(menu))
  }

  return(
    <div>
      <span className="material-symbols-outlined -translate-y-2 border border-purple-800 rounded min-w-8 aspect-square flex items-center justify-center cursor-pointer 
      hover:bg-yellow-500 ">
	<button onClick={handleClick}>
	  {symbol}
	</button>
      </span>
      {(symbol==="more_horiz" && menu) ? <Menu handleClick={handleClick}/> : null}
      </div>
  )
}

function Card() {
  return(
    <div className="space-y-4 bg-yellow-300 border-purple-900 rounded border-4 text-purple-800 p-4 shadow-lg shadow-purple-500 flex flex-col justify-center items-center">
      <img src="https://raw.githubusercontent.com/walker-style/icodethis.com/main/src/assets/jonathanwalker.jpg" className="rounded-full bg-white border-2 border-purple-800 aspect-square w-32"/>
      <h1 className="font-semibold text-lg">Jonathan Walker</h1>
      <p className="italic">Aspiring to Inspire. Inspired to Aspire</p>
      <div className="flex space-x-8 pt-8">
	<CardOptions symbol="person"/>      
	<CardOptions symbol="edit"/>    
	<CardOptions symbol="more_horiz"/>      
      </div>
    </div>

  )
}

function Home() {
  return(
    <div className="bg-yellow-100 min-h-screen flex justify-center items-center">
      <Card/>    
    </div>
  )
}

root.render(<Home/>);

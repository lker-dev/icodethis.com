

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

function Rainbow() {
	return(
		<div className="bg-[linear-gradient(to_right,#6b21a8,#fb923c,#c084fc,#6b21a8)] h-6 w-96">
		</div>
	)
}
	


function Card() {
	return(
		<div className="bg-yellow-400 border-l-8 border-b-8 border-r-8 border-purple-800 flex w-96 min-h-96 rounded-lg overflow-clip">
			<Rainbow/>

		</div>
	
	)

}


function Home() {
  return(
    <div className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center *:m-4">
			<Card/>
    </div>
  )
}

root.render(<Home/>);

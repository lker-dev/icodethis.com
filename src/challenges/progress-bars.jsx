
const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

function Checked() {
  return(
    <div className="bg-purple-800 rounded-full w-8 shadow aspect-square text-yellow-300 flex justify-center items-center"> 
      <span className="material-symbols-outlined">
	check
      </span>

    </div>
  )
}

function Unchecked() {
  return(
    <div className="bg-yellow-300 rounded-full w-8 shadow aspect-square flex justify-center items-center"> 
    <div className="bg-purple-800 rounded-full w-4 aspect-square flex justify-center items-center"> 

    </div>
    </div>
  )
}

function PercentProgress({percent, children}) {
  return(
    <progress max="100" value={percent} className="bg-yellow-300 rounded border-none [&::-webkit-progress-bar]:bg-violet-400 [&::-moz-progress-bar]:bg-purple-800">
      {children}

    </progress>
  )
    

}

function CheckedProgress() {

  return(
    <div className="flex w-96 justify-between from-purple-800 to-yellow-300 bg-gradient-to-r h-2 items-center m-4" >
      <span><Checked/></span>
      <span><Unchecked/></span>
      <span><Unchecked/></span>

    </div>
  )
    

}




function Home() {
  return(
    <div className="bg-slate-200 min-h-screen flex flex-col justify-center items-center *:m-4">
      <Checked/>
      <Unchecked/>
      <PercentProgress percent="40"/>
      <CheckedProgress/>
    </div>
  )
}

root.render(<Home/>);

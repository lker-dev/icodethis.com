      const domNode = document.getElementById('app');
      const root = ReactDOM.createRoot(domNode);

      function DurationOption({duration}) {
	return(
	    <span className="flex space-x-4"> 
	    <input type="radio" name="duration" id={duration}/>
	    <label for={duration}>Billed {duration}</label>
	    </span>
	)
      }

      function Duration() {
	return(
	  <div className="w-48 aspect-square justify-center flex flex-col p-4">
	    <DurationOption duration="Yearly"/>
	    <DurationOption duration="Monthly"/>
	  </div>
	)
      }

      function Complete({who}) {
	return(
	  <div className="flex flex-col items-center">
	    <button className="border-purple-800 border-4 rounded m-2 p-1">
	      {who==="teams" ? "Try for free" : "Buy Now"}
	    </button> 
	    {who==="teams" ? 
	    <p>or buy now</p>
	      :
	      null
	    }
	  </div>
	)
      }

      function PurchaseOptions({who, price, period}) {
	return(
	  <div className="w-48 aspect-square justify-center flex flex-col p-4 items-center ">
	      <h2>For {who}</h2>
	      <h3>{price} / {period}</h3>
	      <Complete who={who}/>
	  </div>
	  )
	  }

      function Pricing() {
	return(
	  <div className="divide-x-4 divide-purple-800 flex bg-yellow-300 rounded border-purple-800 shadow-lg shadow-purple-500 border-4">
	    <Duration/>
	    <PurchaseOptions who="individuals" price="$9.99" period="month"/>
	    <PurchaseOptions who="families" price="$16.99" period="month"/>
	    <PurchaseOptions who="teams" price="$16.58" period="month"/>
	  </div>
	)
      }

      function Home() {
	return(
	  <div className="min-h-screen bg-yellow-100 justify-center items-center flex text-purple-800">
	    <Pricing/>
	  </div>);
      }

      root.render(<Home/>);

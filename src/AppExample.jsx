import { useState } from "react";
import CarsPageOne from './CarsPageOne';
import CarsPageTwo from './CarsPageTwo';


function AppExample() {
  const [currentPage, setCurrentPage] = useState(<CarsPageOne/>)


  return (
    <div className="wrap">
      <div className="controls">
        <button 
          className="button"
          onClick={() => setCurrentPage(<CarsPageOne/>)}
          >
            Страница 1
        </button>

        <button 
          className="button"
          onClick={() => setCurrentPage(<CarsPageTwo/>)}
          >
            Страница 2
        </button>
      </div>

      {currentPage}
    </div>
  )
}


export default AppExample;

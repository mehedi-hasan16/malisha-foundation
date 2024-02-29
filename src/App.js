import React,{useState,useEffect} from "react";
import UseDarkMode from "./hooks/useDarkMode/UseDarkMode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./layout/main/Main";
import { MutatingDots } from "react-loader-spinner";
function App() {
  const [loader,setLoader] = useState(true)
  const [colorTheme,setTheme]= UseDarkMode()

  useEffect(()=>{
    
    setTimeout(()=>{
      setLoader(false)
    },500)
  },[loader])
  return (
      <div className="App">
        {
          loader ?
          <MutatingDots
            height="100"
            width="100"
            color="#FDAE2D"
            secondaryColor= '#da291c'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass="h-100 justify-center items-center"
            visible={true}
          />
          :
          <BrowserRouter>
          <Main/>
         </BrowserRouter>
        }
        
          
      </div>
  );
}

export default App;

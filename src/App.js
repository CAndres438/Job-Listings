import { Fragment } from "react";
import GlobalStyle from "./stylesComponents/GlobalStyle";
import { AppRouter } from './routers/AppRouter'



function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <AppRouter/>
    </Fragment>
  
    
  );
}

export default App;

import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    
    <Provider store={store}>
      <div>

    
        <Head />
        <Body />
      </div>
      {/* 
    # heading
    #side bar
    #body
      >filter tag
      >cards video card
      >
    
    
     */}
      </Provider>

      
    
  );
}

export default App;

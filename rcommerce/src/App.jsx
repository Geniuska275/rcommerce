import { Route, BrowserRouter, Routes, } from "react-router-dom";
import Home from "./views/Home";
import Nav from "./components/Nav";
import OfferBanner from "./components/OfferBanner";
import { Provider } from 'react-redux'
import store from "./redux/store";


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <OfferBanner />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter >
    </>
  )
}

export default App

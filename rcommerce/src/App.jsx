import { Route, BrowserRouter, Routes, } from "react-router-dom";
import Home from "./views/Home";
import Nav from "./components/Nav";
import OfferBanner from "./components/OfferBanner";
import { Provider } from 'react-redux'
import store from "./redux/store";
import Login from "./views/Login";
import Recover from "./views/Recover";
import CreateAccount from "./views/CreateAccount";


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <OfferBanner />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/login/recover" element={<Recover />} />
            <Route path="/account/create" element={<CreateAccount />} />
          </Routes>
        </Provider>
      </BrowserRouter >
    </>
  )
}

export default App

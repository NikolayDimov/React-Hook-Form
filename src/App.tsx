import { Routes, Route } from "react-router-dom";
import { routes } from "./static/routes";
import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
import { GlobalStyles } from "./components/BaseLayout.style";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path={routes.login} element={<Login />} />
                {/* <Route path={routes.register} element={<Register />} /> */}
            </Routes>
        </>
    );
}

export default App;

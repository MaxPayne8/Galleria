import logo from "./logo.svg";
import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Browse from "./components/Browse";
import AddNewCard from "./components/AddNewCard";
import UpdateCard from "./components/UpdateCard";
import CardPrev from "./components/CardPrev";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Browse /> },
      { path: "/addcard", element: <AddNewCard /> },
      { path: "/edit/:id", element: <UpdateCard /> },
      { path: "/cardpreview/:id", element: <CardPrev /> },
    ],
  },
]);

export default App;

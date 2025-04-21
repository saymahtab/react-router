import Link from "./components/Link";
import Route from "./components/Route";
import { BrowserRouter } from "./context/RouterContext";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
    </BrowserRouter>
  );
}

export default App;
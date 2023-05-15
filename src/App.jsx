import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { SearchBar } from "./SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Trailhead</h1>
      <div className="search-bar-container" />
      <SearchBar />
      <div>SearchResults</div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

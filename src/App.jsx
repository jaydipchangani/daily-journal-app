import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div class="flex flex-col min-h-screen">
        <div className="flex flex-col ">
          <Header />
        </div>
        <div className="flex-grow ">
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

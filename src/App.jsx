// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header title={"MY Test"} >
        <p style={{color:"#fff"}}>HEY i am a child</p>
      </Header>
      <Content />
      <Sidebar />
      <Sidebar />
      <Sidebar />
      <Footer />
    </div>
  );
}

function Content() {
  return <main>This Is the conetent</main>;
}

export default App;

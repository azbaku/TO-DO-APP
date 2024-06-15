import "./App.css";
import Content from "./components/Content/Content";
import ContentFooter from "./components/Content/ContentFooter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <div className='App'>
      <Header />

      {/* BODY AREA */}
      <main className='py-3'>
        <Container>
          {/* <h1>Welcome To Dark Secret fragrance</h1> */}
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;

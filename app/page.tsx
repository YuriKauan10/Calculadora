import Quadrado from "./components/Quadrado";
import Main from "./components/Main";
import Numero from "./components/Numero";
import Header from "./components/Header";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="res">
      <Nav/>
      <Header/>
      <Numero/>
      <Main/>
      <Quadrado/>
    </div>
  );
}

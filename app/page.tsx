import Quadrado from "./components/Quadrado";
import Main from "./components/Main";
import Numero from "./components/Numero";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="res">
      <Header/>
      <Numero/>
      <Main/>
      <Quadrado/>
    </div>
  );
}

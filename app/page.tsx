import Quadrado from "./components/Quadrado";
import Main from "./components/Main";
import Numero from "./components/Numero";

export default function Home() {
  return (
    <div className="res">
      <Numero/>
      <Main/>
      <Quadrado/>
    </div>
  );
}

import Image from "next/image"

export default function Nav(){
    return (
        <div className="fundo div4">
           <div className="titleIcon">
            <img className ='imagem' src="/imgs/calculadora.png" alt="" />
            <p>Calculadora</p>
           </div>

            <div className="select">
                <p className="pzinhos">–</p>
                <p  className="pzinhos">☐</p>
                <p  className="pzinhos">X</p>
            </div>
        </div>
    )
}
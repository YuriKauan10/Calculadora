import Image from "next/image"

export default function Nav(){
    return (
        <div className="fundo div4">
           <div className="titleIcon">
            <img className ='imagem' src="/imgs/calculadora.png" alt="" />
            <p>Calculadora</p>
           </div>

            <div className="select">
                <p className="pzinhos hover:bg-zinc-700">–</p>
                <p  className="pzinhos hover:bg-zinc-700">☐</p>
                <p  className="pzinhos hover:bg-red-500 hover:text-white">X</p>
            </div>
        </div>
    )
}
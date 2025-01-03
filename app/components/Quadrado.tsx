const caracters = ['%', 'CE', 'C','⌫', '¹/ₓ', '𝑥²', '²√𝑥','÷', '7', '8', '9','X', '4', '5', '6', '-', '1', '2', '3', '+','+/-', '0', ',']

export default function Quadrado(){
    return (
        <div className="pai">
            {caracters.map((item,index) => {
               return (
                <div key = {index} className="filho bg-zinc-600 hover:bg-zinc-700">{item}</div>
               ) 
            })}
            
           
            <div className="filho bg-pink-300 hover:bg-opacity-90 text-black">=</div>
        </div>
    )
}
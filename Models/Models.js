class Palabra {
    palabras=[]

    create=async(palabra)=>{
        this.palabras.push(palabra);
        return this.palabras[this.palabras.length-1]
    };

    getAll=async()=>{
        
        return this.palabras.join(" ")
    };

    borrar=async(palabra)=>{
        const isPalabra=this.palabras.includes(palabra)
        if (isPalabra){
        return this.palabras=this.palabras.filter(value=> value!=palabra)
        }
        return isPalabra? palabra: isPalabra;
    };
}

export default Palabra;
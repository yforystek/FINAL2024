
import Palabra from "../Models/Models.js"
import Models from "../Models/Models.js"
class Service {

    palabraModel=new Palabra()

    ingresarPalabraService=async(palabra)=>{
        try {
           // if (!palabra) throw  error;
        const palabraValidate= /^[a-zA-z]+$/.test(palabra)
        if (!palabraValidate)  throw error;
            const data= await this.palabraModel.create(palabra);
            return data;
           

        }catch(error){
            throw error;
           
        } 
    }
     
    listarPalabraService=async()=>{
        try {
       
            const data= await this.palabraModel.getAll();
            return data;
           

        }catch(error){
            throw error;
           
        } 
    }
     
    borrarPalabraService=async(palabra)=>{
        try {
           // if (!palabra) throw  error;
        const palabraValidate= /^[a-zA-z]+$/.test(palabra)

        if (!palabraValidate)  throw error;
        const data= await this.palabraModel.borrar(palabra);
        

        //if (!data)  throw error;
            
            return data;
           

        }catch(error){
            throw error;
           
        } 

    }
    listarApiPalabraService=async(cantidad)=>{
        try {
            const cantidadValidate= /^[0-9]+$/.test(cantidad)
            if (!cantidadValidate)  throw error;
            const apiData= await fetch("https://texto.deno.dev/palabras?cantidad=${cantidad)")
            const apiDataJson= await apiData.json()  

            if (!data) throw error   
            return apiDataJson;
           

        }catch(error){ 
            throw error;
           
        } 
    }
}

export default Service

import Service from "../Services/Services.js"


class Controller {
    service=new Service() ; 

    ingresarPalabra=async(req, res)=>{
        try{
            const {palabra}= req.body 
            const data= await this.service.ingresarPalabraService(palabra)
            res.status(200).send({Msg:data} )

        }catch(error){
             res.status(422).send({errorMsg:"no valida"} )
        }
    }



    listarPalabra =async(req, res)=>{
        try{
            
            const data= await this.service.listarPalabraService()
            res.status(200).send({Msg:data} )

        }catch(error){
             res.status(422).send({errorMsg:"no valida"} )
        }
    }
    borrarPalabra =async(req, res)=>{
        try{
            const {palabra}= req.params;
            const data= await this.service.borrarPalabraService(palabra)
            res.status(200).send({Msg:data} )

        }catch(error){
             res.status(422).send({errorMsg:"no valida"} )
        }
    }

    allApiPalabras =async(req, res)=>{
        try{
            const {cantidad}= req.params;
            const data= await this.service.listarApiPalabraService(cantodad)
            res.status(200).send({Msg:data} )
            //prueba

        }catch(error){
             res.status(422).send({errorMsg:"no valida"} )
        }
    }

}

export default Controller
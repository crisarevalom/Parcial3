const refriService = require("../services/servicesRef")
const refriServices = new refriService();

function create(req,res){
    try {

        let refri = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            color: req.body.color,
            size: req.body.size,
            nPuertas: req.body.nPuertas
        }

        refriServices.create(refri,(validar)=>{
            if (validar) {
                res.status(201).json({result: "success", msg: "Nueva refri"})
            } else {
                Response.status(500).json({result: "error", msg: "no se pudo crear"})
            }
        });
        
    } catch (error) {
        res.status(500).json({
            result: "error", 
            msg: "no se creó"
        })
    }
}

module.exports.createRefri = create;

function update(req, res){
    try {
        console.log("Req.body: ");
        console.log(req.body);

        var refris = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            color: req.body.color,
            size: req.body.size,
            nPuertas: req.body.nPuertas
        };
        
        refriServices.update(refris, validar => {
            if (validar) {
                res.status(201).json({ result: "success", msg: "Refri actualizada" });
            } else {
                res.status(500).json({ result: "error", msg: "No se pudo actualizar" });
            }
        });
    } catch (error) {
        console.log("Error: ");
        console.log(error);
        res.status(500).json({ result: "error", msg: "No se pudo actuallizar" });
    }
}

module.exports.updateRefri = update;

function deleteRef(req,res){
    try {
        refriServices.delete(req.body.modelo,validar =>{
            if (validar) {
                res.status(201).json({ result: "succes", msg: "usuario eliminado"});
            } else {
                res.status(500).json({ result: "error", msg: "no se pudo eliminar"});
                
            }
        });
        
    } catch (error) {
        console.log("Error: ");
        console.log(error);
        res.status(500).json({ result: "error", msg: "No se pudo eliminar" })
    }

}

module.exports.deleteRefris = deleteRef;

function getRefrig(req,res){
    try {
        refriServices.getRefrig((validar, refri)=>{
            if (validar) {
                res.status(200).json(refri);
            } else {
                res.status(500).json({});
            }
        });
    } catch (error) {
        console.log("Error: ");
        console.log(error);
        res.status(500).json({});
    }
}

module.exports.getRefri = getRefrig;

function getFiltRef(req,res){
    try {
        console.log("params", req.query.filtros);
        refriServices.get(
            req.query.filtros,
            parseInt(req.query.page),
            (validar, docs, pags)=>{
                if (validar) {
                    var respuesta = {
                        docs: docs,
                        paginas: parseInt(pags)
                    };
                    res.status(500).json(respuesta);
                } else {
                    res.status(500).json({docs:{},paginas: 0});
                }
            }
        );
    } catch (error) {
        res.status(500).json({docs: {}, paginas: 0})
        
    }
}

module.exports.getRefris = getFiltRef;


const dbRef = require("../models/refris");

class refService{
    constructor(){
        this.dbR = dbRef;
    }

    create(refri, cb) {
        try {
          const newRef = new this.dbR(refri);
          newRef.save((err, result) => {
    
            if (err) {
              console.log(err);
              cb(false);
            } else {
    
              console.log(result);
              cb(true);
            }
          });
        } catch (error) {
          console.log(error);
        }
    }

    update(refri, cb) {
        //TODO: method to update labs
        try {
          var query = { "modelo": refri.modelo };
          this.dbL.findOneAndUpdate(query, refri, { upsert: true }, function (
            err,
            doc
          ) {
            if (err) {
              console.log("Error: ", err);
              cb(false);
            } else {
              console.log("Document: ");
              console.log(doc);
              cb(true);
            }
          });
        } catch (error) {
          console.log(error);
          cb(false);
        }
    }

    delete(idRef, cb) {
        //TODO: method to delete labs
        try {
          this.dbR.remove({ _id: idRef }, function (error) {
            if (error) {
              console.log("Error ");
              console.log(error);
              cb(false);
            } else {
              cb(true);
            }
          });
        } catch (error) {
          console.log("Error en delete: ");
          console.log(error);
          cb(false);
        }

    }

    get(filtros, pags, cb) {
        try {
          let filtrosMade = {};
          if (filtros == "") {
          } else {
            filtrosMade = {
              name: /filtros/
            };
          }
    
          this.dbR
            .find(filtrosMade, function (err, docs) {
              if (err) {
                console.log("Paginas: ");
                console.log("Error: ");
                console.log(err);
                cb(false, {}, 0);
              } else {
    
                dbRef.find(filtrosMade, (err, docs2) => {
                  if (!err) {
                    var paginas = docs2.length;
                    paginas = Math.ceil(paginas / 10);
                    cb(true, docs, paginas);
                  } else {
                    cb(false, {}, 0);
                  }
                });
              }
            }).skip(10 * (pags - 1)).limit(10);
        } catch (error) {
          cb(false, {}, 0);
          console.log("Error: ");
          console.log(error);
        }
    }

    getRef(cb){
        try {
          this.dbR.find({}, function (err, docs) {
              if (err) {
                console.log("Paginas: ");
                console.log("Error: ");
                console.log(err);
                cb(false, {});
              } else {
                let lista = docs.map(function (e){
                    return {name: e.name, code: e.code}
                });
                cb(true, lista);
              }
            });
        } catch (error) {
          cb(false, {}, 0);
          console.log("Error: ");
          console.log(error);
        }
    }


}
module.exports = refService;


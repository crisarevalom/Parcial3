urlMod = "/mod";

options = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  };

  borraRef = (id, formulario,totalpaginas,e)=>{
    e.preventDefault();
    let options_and_body = {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    };
    options_and_body["body"] = JSON.stringify({
      _id: id
    });
    
    fetch(URL_API_LABORATORIOS, options_and_body)
    .then(res => res.json())
    .catch(error => {
      console.log("error: ", error);
      Swal.fire("NO SE PUDO BORRAR", error, "error");
    })
    .then(response => {
      console.log("success: ", response);
      Swal.fire(response.msg, "SIGUE MODIFICANDO", response.ok);
    })
    .then(() => { })
    .then(() => {
      setTimeout(() => {
        getRef("", 1, totalPaginas, bodytable, e);
      }, 500);
    });
};

getRef = (filtros, pagina, paginatotales, tabla, formulario, e) => {
    if (e) {
      e.preventDefault();
    }
    let params = {
      filtros: filtros,
      page: pagina
    };
  
    let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
    let options_and_body = {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    };

}
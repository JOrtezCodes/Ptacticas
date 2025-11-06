const aplicacion = (() => {
  let configuracion = null;
  
  function inicializar() {
    if (configuracion === null) {
      configuracion = {
        tema: "oscuro",
        idioma: "español",
        notificaciones: true
      };
      console.log('Configuración inicializada por primera vez');
    } else {
      console.log('La configuración ya existe, no se inicializa nuevamente');
    }
    return configuracion;
  }
  
  return {
    obtenerConfiguracion: inicializar,
    mostrarConfiguracion: function() {
      if (configuracion) {
        console.log('Configuración actual:', configuracion);
      } else {
        console.log('No hay configuración');
      }
    }
  };
})();

aplicacion.obtenerConfiguracion();
aplicacion.mostrarConfiguracion();
aplicacion.obtenerConfiguracion();
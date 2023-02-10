const reproduciendo = {
  reproducing: function(id) {
    console.log(`Reproducing ${id}`);
  },
  pausar: function(id) {
    console.log(`Pausing ${id}`);
  },
  borrar: function(id) {
    console.log(`Removing ${id}`);
    },
  playList: function(id) {
    console.log(`Creando ${id}`);
  },
  reproducirPlayList: function(id) {
    console.log(`Reproduciendo ${id}`);
  }
}


reproduciendo.reproducing(20);
reproduciendo.pausar(30);
reproduciendo.borrar(20);

reproduciendo.playList("Heavy metal");
reproduciendo.playList("Instrumental");
reproduciendo.reproducirPlayList("Heavy metal");
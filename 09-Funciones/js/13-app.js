const reproductor = {
  canccion: 'https://www.youtube.com/watch?v=dQw4w9',
  reproducing: (id) => console.log(`Reproducing ${id}`),
  pausar: (id) => console.log(`Pausing ${id}`),
  borrar: (id) => console.log(`Removing ${id}`),
  playList: (id) => console.log(`Creando ${id}`),
  reproducirPlayList: (id) => console.log(`reproductor ${id}`),
  set nuevaCancion (cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${this.cancion}`);
  },

  get obtenerCancion(){
    console.log(`Obteniendo ${this.cancion}`);
  }


}
reproductor.nuevaCancion = 'Cancion 1';
reproductor.obtenerCancion;

reproductor.reproducing(20);
reproductor.pausar(30);
reproductor.borrar(20);

reproductor.playList("Heavy metal");
reproductor.playList("Instrumental");
reproductor.reproducirPlayList("Heavy metal");
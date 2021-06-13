let iifePatrMod = (() => {
    let inyectarTodo = (url, id) => {
      id.setAttribute("src", url);
      id.style.display = "block";
    };
    return {
      mostrarTodo: (url, id) => inyectarTodo(url, id),
    };
  })();
  
  // let acordeon = document.querySelector("button");
  // acordeon.addEventListener("click", iifePatrMod.mostrarTodo);
  
  // Objetos
  class Multimedia {
    constructor(url) {
      let _url = url;
      this.getUrl = () => _url;
    }
    get url() {
      return this.getUrl();
    }
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video.";
    }
  }
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      let _id = id;
      this.getId = () => _id;
    }
    playMultimedia() {
      iifePatrMod.mostrarTodo(this.url, this.getId());
    }
    setInicio(tiempo) {
      this.getId().setAttribute("src", `${this.url}?start=${tiempo}`);
    }
  }
  
  let idMusica = document.getElementById("musica");
  let idPeliculas = document.getElementById("peliculas");
  let idSeries = document.getElementById("series");
  
  let playMusica = new Reproductor(
    "https://www.youtube.com/embed/SDiKKrvTzQY",
    idMusica
  );
  playMusica.playMultimedia();
  playMusica.setInicio(3130);
  
  let playPelicula = new Reproductor(
    "https://www.youtube.com/embed/W_KruQhfvW4",
    idPeliculas
  );
  playPelicula.playMultimedia();
  
  let playSerie = new Reproductor(
    "https://www.youtube.com/embed/o2R-DPhzfFY",
    idSeries
  );
  playSerie.playMultimedia();


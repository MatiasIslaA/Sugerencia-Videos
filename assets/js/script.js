class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  get id() {
    return this._id;
  }
  playMultimedia() {
    recibirVideo(this.url, this.id);
  }
  setInicio(inicio) {
    const ids = document.querySelector(this.id);
    ids.setAttribute("src", `${this.url}?start=${inicio}`);
  }
}

const recibirVideo = (() => {
  const funcionInterna = (url, id) => {
    const ids = document.querySelector(id);
    ids.setAttribute("src", url);
  };
  const recibirVideoPublico = (url, id) => funcionInterna(url, id);
  return recibirVideoPublico;
})();

let urlMusica = "https://www.youtube.com/embed/0S5Opir0vIs";
let urlPelicula = "https://www.youtube.com/embed/_2PyxzSH1HM";
let urlSerie = "https://www.youtube.com/embed/TdBfgwHmQsQ";

const musica = new Reproductor(urlMusica, "#iframeMusica");
const pelicula = new Reproductor(urlPelicula, "#iframePeliculas");
const serie = new Reproductor(urlSerie, "#iframeSeries");
musica.setInicio(3);
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

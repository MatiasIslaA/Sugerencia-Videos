const recibirVideo = (() => {
  const funcionInterna = (url, id) => {
    const ids = document.getElementById(id);
    ids.setAttribute("src", url);
  };
  const recibirVideoPublico = (url, id) => funcionInterna(url, id);
  return recibirVideoPublico;
})();

class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }
}

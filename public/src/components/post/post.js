class Post extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/post/style.css">

        <section class="fondoDePantalla">

        <img id="logo" src="./assets/Yourlogo.png">
        <h1 id="Username">Bela__04</h1>
        <img id="Moreinfo" src="./assets/Moreinfo.png">

        <img id="Group" src="./assets/Group.png">

        <h1 id="Likes">1.000 likes</h1>
        <p id="Comentario1">
        Bella__04 por finnnn es gracias a leider :)
        </p>
        
       

        <img id="Hearticon" src="./assets/Hearticon.png">
        <img id="Commenticon" src="./assets/Commenticon.png">
        <img id="Shareicon" src="./assets/Shareicon.png">

        <img id="Saveicon" src="./assets/Saveicon.png">
        

        </section>

        `;
  }
}

customElements.define("my-post", Post);
export default Post;

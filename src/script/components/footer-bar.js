import logo from "../../assets/logo.png";

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="w-full absolute mx-auto right-0 footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <img src="${logo}" alt="Logo" class="lg:w-40">
      </div> 
      <div>
        <p>Copyright © 2023 HolyBar Indonesia. All Rights Reserved</p>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-bar", Footer);

import logo from "../../assets/logo.png";

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="flex items-center justify-between pt-10 pb-4" id="home" >

      <div class="flex items-center justify-center gap-2" data-aos="fade-up">
        <img src=${logo} alt="logo" class="xl:w-40 w-100"/>
      </div>

      <div class="md:flex items-center justify-center gap-4 hidden">
        <div class="flex items-center justify-center gap-10 font-medium xl:text-lg text-sm " data-aos="fade-up"  data-aos-duration="800">
          <a href="#home" class="hover:text-accent text-primary transition-all duration-200">Beranda</a>
          <a href="#searchFood" class="hover:text-accent text-primary transition-all duration-200">Cari</a>
          <a href="#category-list-up" class="hover:text-accent text-primary transition-all duration-200">Daftar Menu</a>
          <a href=""></a>
        </div>
      </div>

    </nav>
    `;
  }
}

customElements.define("nav-bar", NavigationBar);

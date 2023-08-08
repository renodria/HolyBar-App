class Barmenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="md:my-8">
      <div class="xl:h-[300px] lg:h-[100px] h-[200px] bg-accent relative ">
        <div class="flex flex-col items-center h-full justify-center w-full basis-1/2 text-white gap-4 translate-y-3 relative z-50">
          <h1 class="xl:text-4xl md:text-3xl text-xl font-semibold" data-aos="fade-up" data-aos-duration="600">Selamat datang di </h1>
          <h1 class="block xl:text-5xl md:text-4xl text-2xl font-bold" data-aos="fade-up" data-aos-duration="800">HolyBar Indonesia</h1>
          <div class="flex items-center justify-center gap-2 md:text-lg text-sm mb-2" data-aos="fade-up" data-aos-duration="600">
            <u>Bar dan Resto terbaik Se-Asia</u>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("menu-bar", Barmenu);

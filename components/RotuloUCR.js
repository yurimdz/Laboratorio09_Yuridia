import './RotuloFila.js';

class RotuloUCR extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=Poppins:wght@400;600&display=swap');

        :host {
          display: block;
          width: 360px;
          background: #0d2a5c;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
          animation: slideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .encabezado {
          padding: 20px 22px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .encabezado h3 {
          color: #3ec1d3;
          font-family: 'Fredoka', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .encabezado p {
          color: rgba(255,255,255,0.5);
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
        }

        .footer {
          background: #f2f4f8;
          color: #0d2a5c;
          text-align: center;
          padding: 22px 0 18px;
          border-top-left-radius:  60% 30px;
          border-top-right-radius: 60% 30px;
        }

        .footer h2 {
          font-family: 'Fredoka', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.08em;
        }

        .footer small {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 0.65rem;
          color: #0d2a5c;
          opacity: 0.55;
          margin-top: 2px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
      </style>

      <div class="encabezado">
        <h3>Sede de Guanacaste</h3>
        <p>Dirección de instalaciones</p>
      </div>

      <slot></slot>

      <div class="footer">
        <h2>UCR</h2>
        <small>Universidad de Costa Rica</small>
      </div>
    `;
  }
}

customElements.define('rotulo-ucr', RotuloUCR);
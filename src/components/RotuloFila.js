class RotuloFila extends HTMLElement {
  static get observedAttributes() {
    return ['destino', 'direccion'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback() {
    this.#render();
  }

  #render() {
    const destino   = this.getAttribute('destino')   ?? 'Destino';
    const direccion = this.getAttribute('direccion') ?? '➜';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .fila {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          color: white;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
          letter-spacing: 0.02em;
        }

        .fila:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateX(6px);
        }

        .flecha {
          transition: transform 0.25s;
          font-size: 1.2rem;
        }

        .fila:hover .flecha {
          transform: translateX(8px);
        }

        .separador {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 0 16px;
        }
      </style>

      <div class="fila" part="fila">
        <span class="texto">${destino}</span>
        <span class="flecha">${direccion}</span>
      </div>
      <div class="separador"></div>
    `;
  }
}

customElements.define('rotulo-fila', RotuloFila);
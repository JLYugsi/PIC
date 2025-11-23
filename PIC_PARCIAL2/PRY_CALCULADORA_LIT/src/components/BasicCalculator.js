import { LitElement, html, css } from 'lit';

export class BasicCalculator extends LitElement {
    
    static properties = {
        displayValue: { type: String },
        _lastWasResult: { state: true }
    };

    constructor() {
        super();
        this.displayValue = '0';
        this._lastWasResult = false;
    }

    get buttons() {
        return [
            ['C', 'btn-danger col-12 fw-bold', 'clear'],
            ['1', 'btn-warning', 'num'], ['2', 'btn-warning', 'num'], ['3', 'btn-warning', 'num'], ['+', 'btn-light', 'op'],
            ['4', 'btn-warning', 'num'], ['5', 'btn-warning', 'num'], ['6', 'btn-warning', 'num'], ['-', 'btn-light', 'op'],
            ['7', 'btn-warning', 'num'], ['8', 'btn-warning', 'num'], ['9', 'btn-warning', 'num'], ['*', 'btn-light', 'op'],
            ['.', 'btn-info', 'num'],    ['0', 'btn-warning', 'num'], ['=', 'btn-success fw-bold', 'igual'], ['/', 'btn-light', 'op']
        ];
    }

    handleClick(value, type) {
        if (type === 'clear') {
            this.displayValue = '0';
            this._lastWasResult = false;
        } 
        else if (type === 'igual') {
            try {
                const result = eval(this.displayValue); 
                this.displayValue = String(result);
                this._lastWasResult = true;
            } catch (e) {
                this.displayValue = 'Error';
                this._lastWasResult = true;
            }
        } 
        else {
            if (this.displayValue === '0' && type === 'num') {
                this.displayValue = value;
            } else if (this._lastWasResult && type === 'num') {
                 this.displayValue = value;
                 this._lastWasResult = false;
            } else {
                this._lastWasResult = false;
                this.displayValue += value;
            }
        }
    }

    render() {
        return html`
            <!-- Inyectamos Bootstrap directamente al Shadow DOM para aislamiento total -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <div class="card p-3 shadow-sm" style="max-width: 400px; margin: 0 auto; background-color: #2c3034;">
                <div class="card-header mb-2 p-0 border-0 bg-transparent">
                    <input type="text" 
                           class="form-control form-control-lg text-end fs-2 fw-bold bg-dark text-white border-secondary" 
                           .value="${this.displayValue}" 
                           readonly>
                </div>
                <div class="row g-2">
                    ${this.buttons.map(([label, cssClass, type]) => html`
                        <div class="${label === 'C' ? 'col-12' : 'col-3'}">
                            <button 
                                class="btn ${cssClass} w-100 p-3 fs-5"
                                @click="${() => this.handleClick(label, type)}">
                                ${label}
                            </button>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}
customElements.define('basic-calculator', BasicCalculator);
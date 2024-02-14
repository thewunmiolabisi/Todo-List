class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
      
      </style>
    `;
  }
}
class BackArrow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .back-arrow {
          display: flex;
          cursor: pointer;
          color: #b2b2ee;
          fill: #b2b2ee;
          font-size: 20px;
          align-items: center;
          margin-bottom: 10px;
        }
        .back-arrow img {
          width: 30px;
          height: 20px;
          margin-right: 5px;
        }
        span{
          color: #e6e5f5;
        }
      </style>
      <div class="back-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        <span>Back to List</span>
      </div>
    `;
  }
}

class TodayButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
      div{
       display: flex;
       padding: 10px;
       margin: 10px
      }
        .today-button {
          border-radius: 50%;
          color: #000;
          padding: 6px;
          width: 40px;
          background: #fff;
          height: 35px;
          cursor: pointer;
          border: 1px solid #b2b2ee;
          margin: 10px 10px;
          
      }
        h1{
          margin: 5px 0;
        }
        .today-button svg{
          fill: #b2b2ee;
          width: 20px;
        }
      </style>
      <div>
      <h1>Today</h1>
      <button class="today-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
      </button>
      </div>
    `;
  }
}

class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .progress-bar {
          width: 200px;
          height: 20px;
          background-color: #ccc;
          border-radius: 30px;
          overflow: hidden;
          margin: 20px;
          padding: 2px
        }
      </style>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
    `;
  }
}

class TaskList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        ul{
          list-style: none;
          padding: 10px;
          margin: 10px;

        }
        li{
          display: flex;
          align-items: center;
          color: #b2b2ee;
          font-size: 18px;
          input{
            margin: 15px;
            padding: 10px;
            width: 50px;
          }
          input[type="checkbox"] {
            appearance: none;
            outline: none;
            border-radius: 50%;
            border: 1px solid #b5e981; 
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
          input[type="checkbox"]:checked {
            background-color: #b5e981 ;
        }
        input[type="checkbox"]::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: white;
            transition: background-color 0.3s ease;
        }
        }
      </style>
      <ul>
        <li><input type="checkbox"> Meditation</li>
        <li><input type="checkbox"> Pick up Arena</li>
        <li><input type="checkbox"> Set up for Jay</li>
        <li><input type="checkbox"> Finish Daily UI</li>
        <li><input type="checkbox"> Second edits on article</li>
        <li><input type="checkbox"> Email Chris</li>
      </ul>
    `;
  }
}

class TextElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
    p{
    color: #e1e2ef;
    font-size: 16px;
    }
    hr{
      color: #e1e2ef;
      width: 100%;
    }
    </style>
    <hr></hr>
      <p>Pull from Recurring Lists</p>
    `;
  }
}

class ActionButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    `;
  }
}

customElements.define('back-arrow', BackArrow);
customElements.define('today-button', TodayButton);
customElements.define('progress-bar', ProgressBar);
customElements.define('task-list', TaskList);
customElements.define('text-element', TextElement);
customElements.define('action-button', ActionButton);

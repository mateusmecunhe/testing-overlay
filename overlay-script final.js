window.addEventListener('load',
  (event) => {

    document.body.insertAdjacentHTML('afterbegin',
      `
    

    <div class="modal" id="modal">
    <div class="close-button-container">
        <button id='overlay-close-btn' data-close-button class="close-button">close &times;</button>
      </div>
    <iframe style="display: none; height: 90vh; width: 100%; padding: 5px;" id="ifr" src="" frameborder="0"></iframe>
    <div id="internal">
      

      <div class="modal-header">

        <img class='header-logo' src="https://donate.unhcr.org/themes/custom/donate/white-logo.svg" alt="">
        <div class="title">Our home page for the million who can't go home</div>
      </div>

      <div class="modal-body">
        Today on UN International Day of Conscience, we’re giving the dilemma of millions of refugees a temporary home
        on our home page.​ We hope you will join us in supporting refugees with a donation to the UNHCR. The UN’s
        refugee agency.​
      </div>

      <div class="cta">Together we can help those who can't go home</div>

      
        <div class="donate-btn-container">

          <div class="donate-btn" onclick="callIframe()">Donate</div>
        </div>
      
    </div>
  </div>

    <style>
    *, *::after, *::before {
      box-sizing: border-box;
    }
    
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 200ms ease-in-out;
      /* border: 1px solid black; */
      border-radius: 10px;
      z-index: 10;
      background-color: #0072bc;
      color: #fff;
      width: 500px;
      max-width: 80%;
      font-family: proximanova,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,liberation sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
    }
    
    .modal {
      overflow-y: auto;
    }
    
    .modal.active {
      transform: translate(-50%, -50%) scale(1);
      height: auto;
      max-height: 90%;
    }
    
    .modal-header {
      flex-direction: column;
      padding: 0px 10px 15px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .modal-header .title {
      font-size: 1.25rem;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }
    
    .modal-header .header-logo {
      margin: 30px auto;
    }
    
    .close-button-container{
      text-align: end;
    }
    
    .close-button {
      cursor: pointer;
      color: white;
      border: none;
      outline: none;
      background: none;
      font-size: 0.6rem;
      font-weight: bold;
      margin-left: auto;
    }
    
    .modal-body {
      padding: 10px 15px;
    }
    
    .cta {
      padding: 10px 15px;
      font-weight: bold;
    }
    
    .donate-btn-container{
      padding: 15px;
    }
    
    .donate-btn{
    
      cursor: pointer;
      color: #212529;
      border-color: #faeb00;
      background-color: #faeb00;
      border: 2px solid transparent;
      text-align: center;
      vertical-align: middle;
      border-radius: 0.25rem;
      font-size: calc(1.2625rem + 0.15vw);
      line-height: 1.5;
      padding: 0.625rem 2.5rem;
      font-weight: bold;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    
    }
    
    .donate-btn:hover {
      color: #212529;
      border-color: #c7bb00;
      background-color: #d4c700;
    }
    
    .donate-btn:active{
      color: #212529;
      border-color: #baaf00;
      background-color: #c7bb00;
      outline: #000 solid 2px;
    }
    
    
    #overlay {
      position: fixed;
      opacity: 0;
      transition: 200ms ease-in-out;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      pointer-events: none;
    }
    
    #overlay.active {
      opacity: 1;
      pointer-events: all;
    }
    
    .modal::-webkit-scrollbar {
      width: 5px;
    }
    
    
    .modal::-webkit-scrollbar-track {
      background: #0072bc;        /* color of the tracking area */
    }
    
    .modal::-webkit-scrollbar-thumb {
      background-color: #0072bc;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid #fae900d8;  /* creates padding around scroll thumb */
    }
    
    .blur :not(#modal, #modal *) {
      filter: blur(1px);
      opacity: .7;
      transition: 1000ms ease-out;
    
    }
    </style>

  `)
    //TODO store in session
    const closeButton = document.getElementById('overlay-close-btn')
    closeButton.addEventListener('click', () => {
      closeModal(modal)
    })
    openModal(modal)
    sessionStorage.setItem('donation-overlay', 'active')
  })

function openModal(modal) {
  if (modal == null) return
  if (sessionStorage.getItem('donation-overlay') == 'active') return
  document.body.classList.add('blur')

  modal.classList.add('active')
}

function closeModal(modal) {
  document.body.classList.remove('blur')
  modal.classList.remove('active')
}

function callIframe(value) {
  const iframe = document.getElementById('ifr')
  const internal = document.getElementById('internal')

  internal.style.display = 'none'
  iframe.style.display = 'block'
  iframe_url = 'https://give.unhcr.org/int/payment-confirmation-ukr-ogilvy'
  iframe.src = value > 0 ? iframe_url + '?amount=' + value + '00' : iframe_url;
  iframe.style.height = '100 em'
}

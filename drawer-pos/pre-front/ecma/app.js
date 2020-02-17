import {MDCTopAppBar} from '../../../webpack/node_modules/@material/top-app-bar';
import {MDCList} from '../../../webpack/node_modules/@material/list';
import {MDCDrawer} from '../../../webpack/node_modules/@material/drawer';
import {MDCDialog} from '../../../webpack/node_modules/@material/dialog';
import {MDCTabBar} from '../../../webpack/node_modules/@material/tab-bar';
import {MDCTextField} from '../../../webpack/node_modules/@material/textfield';
import {MDCDataTable} from '../../../webpack/node_modules/@material/data-table';
import {MDCChipSet} from '../../../webpack/node_modules/@material/chips';
import {MDCRipple} from '../../../webpack/node_modules/@material/ripple';


import {table, print_kot_button, payment_content} from './drawer-components';



const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.listen('MDCTopAppBar:nav', () => {
	drawer.open = !drawer.open;  
});

// const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
// let tabBar = [].map.call(document.querySelectorAll('.mdc-tab-bar'), function(el) {
//   return new MDCTabBar(el);
// });

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// let textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
//   return new MDCTextField(el);
// });

// let dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

// const chipSetEl = document.querySelector('.mdc-chip-set');
// const chipSet = new MDCChipSet(chipSetEl);

//ripples

let selector = '.mdc-fab';
let ripples = [].map.call(document.querySelectorAll(selector), function(el){
    return new MDCRipple(el);
});


  function tableGenerator() {
        var d1 = document.getElementsByClassName('row')[0];
        var tableHTML = table;
        d1.insertAdjacentHTML('beforeend', tableHTML);


      let elements = document.getElementsByClassName('mdc-card');
      let target = elements[elements.length - 1];
      target.scrollIntoView({behavior: "smooth"});

        let tabBar = [].map.call(document.querySelectorAll('.mdc-tab-bar'), function(el) {
  return new MDCTabBar(el);

  //Had put some lines here, below the return statement. It didn't work for obvious reasons.

});

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

let textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new MDCTextField(el);
});

let dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));


      }

     




window.tableGenerator = tableGenerator;

function addOrderForm(obj){
	let card = obj.closest('.mdc-card');
	let orderContent = card.querySelector('.order_content').querySelector('.mdc-layout-grid');
  let orderFormHTML = ' <div class="mdc-layout-grid__inner row">\
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-8-tablet">\
                  <div class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--outlined text_field">\
                    <i class="material-icons mdc-text-field__icon">fastfood</i>\
                    <input type="text" id="tf-outlined" class="mdc-text-field__input">\
                      <div class="mdc-notched-outline">\
                        <div class="mdc-notched-outline__leading"></div>\
                        <div class="mdc-notched-outline__notch">\
                          <label for="tf-outlined" class="mdc-floating-label">Menu Item</label>\
                        </div>\
                        <div class="mdc-notched-outline__trailing"></div>\
                      </div>\
                  </div>\
\
\
                </div>\
\
\
\
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-8-tablet">\
                <div class="mdc-text-field mdc-text-field--outlined text_field">\
                  \
                  <input type="text" id="tf-outlined" class="mdc-text-field__input">\
                  <div class="mdc-notched-outline">\
                    <div class="mdc-notched-outline__leading"></div>\
                    <div class="mdc-notched-outline__notch">\
                      <label for="tf-outlined" class="mdc-floating-label">Quantity</label>\
                    </div>\
                    <div class="mdc-notched-outline__trailing"></div>\
                </div>\
              </div>\
            </div>\
            <br>\
            </div>\
            ';
	orderContent.insertAdjacentHTML('beforeend', orderFormHTML);
  textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  return new MDCTextField(el);

});

}


function removeOrderForm(obj){
  let card = obj.closest('.mdc-card');
  let fields = card.querySelector('.order_content').querySelector('.mdc-layout-grid').querySelectorAll('.row');
  let target_field = fields[fields.length-1];
  target_field.remove();
}



let kotHTML = '\
      <tr class="mdc-data-table__row">\
        <td class="mdc-data-table__cell">item</td>\
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">quantity</td>\
     \
      </tr>\
     \
    ';




function kotGenerator(obj) {
  let card = obj.closest('.mdc-card');
  let orderContent = card.querySelector('.order_content');
  // let tabIndicator = card.querySelector('.mdc-tab-indicator');
  // tabIndicator.style.display = "none";

  [].map.call(card.querySelectorAll('.mdc-tab-indicator'), function(el) {
   
   el.style.visibility = "hidden";

});


  orderContent.style.display= "none";
  let payment = card.querySelector('.payment_content');

  payment.style.display = "none";
  let kot = card.querySelector('.kot');

 
  kot.style.display = "block";


 
  let rows = card.querySelectorAll('.row');

  kot.querySelector('tbody').remove();


  kot.querySelector('table').insertAdjacentHTML('beforeend', '<tbody class="mdc-data-table__content"></tbody>')


let i; 
  let tbody;
   for(i=0; i<rows.length; i++) {
     let inputs_pair = rows[i].querySelectorAll('input');

      let kotHTML1 = kotHTML.replace('item', inputs_pair[0].value);
      console.log(kotHTML1);
      let kotHTML2 = kotHTML1.replace('quantity', inputs_pair[1].value);
      console.log(kotHTML);

      kot.querySelector('tbody').insertAdjacentHTML('beforeend', kotHTML2);

     
     console.log(inputs_pair[0].value, inputs_pair[1].value);

     kot.style.overflowY = 'auto';


     
     }

     console.log(print_kot_button);
     card.querySelector('.order_buttons').style.display = "none";
     card.insertAdjacentHTML('beforeend', print_kot_button);
     // let identifierContent = card.querySelector('.identifier_content');
     // identifierContent.style.display = "none";



}


function payment(obj){
      let card = obj.closest('.mdc-card');
      let identifierContent = card.querySelector('.identifier_content');
      card.querySelector('.order_content').style.display = "none";
      card.querySelector('.identifier_content').style.display = "none";
      card.querySelector('.kot').style.display = "none";
      card.querySelector('.payment_content').style.display = "inline-flex";
      identifierContent.style.display = "none";
      [].map.call(card.querySelectorAll('.mdc-tab-indicator'), function(el) {
   
   el.style.visibility = "visible";

    card.querySelector('.order_buttons').style.display = "none";
    let printKotButton = card.querySelector('.print_kot_button');
        if (printKotButton){
          printKotButton.remove();
        }

});

      card.querySelector('.payment_content').insertAdjacentHTML('beforeend', payment_content);

    }

      function order(obj) {
        let card = obj.closest('.mdc-card');
        let orderContent = card.querySelector('.order_content');
        console.log(orderContent);
        let identifierContent = card.querySelector('.identifier_content');

        orderContent.style.display = "inline-flex";
        identifierContent.style.display = "none";

        //added these two lines to fix the disapperance of the scrollbar. (overflow: auto;) brings in the additional X scroller.
        orderContent.style.overflowX = "hidden";
        orderContent.style.overflowY = "auto";



        card.querySelector('.payment_content').style.display = "none";
        card.querySelector('.identifier_content').style.display = "none";
        card.querySelector('.kot').style.display = "none";
        card.querySelector('.order_buttons').style.display = "inline-flex";

        
        [].map.call(card.querySelectorAll('.mdc-tab-indicator'), function(el) {
   
   el.style.visibility = "visible";

});

        card.querySelector('.order_buttons').style.display = "inline-flex";


        let printKotButton = card.querySelector('.print_kot_button');
        if (printKotButton){
          printKotButton.remove();
        }

      }


function identifier(obj) {
  let card = obj.closest('.mdc-card');
  let orderContent = card.querySelector('.order_content');
  let paymentContent = card.querySelector('.payment_content');
  let kotContent = card.querySelector('.kot');
  let orderButtons = card.querySelector('.order_buttons');
  let identifierContent = card.querySelector('.identifier_content');

  identifierContent.style.display = "inline-flex";
  orderContent.style.display = "none";
  paymentContent.style.display = "none";
  orderButtons.style.display = "inline-flex";
  kotContent.style.display = "none";
  card.querySelector('.order_buttons').style.display = "none";
  let printKotButton = card.querySelector('.print_kot_button');
        if (printKotButton){
          printKotButton.remove();
        }


}





// function inputListener(obj) {
//   let card = obj.closest('.mdc-card');
//   let kot = card.querySelector('.kot');
//   let rows = card.querySelectorAll('.row');
//   let inputs = [];
//   let i; 
//   let tbody;
//   for(i=0; i<rows.length; i++) {
//     let inputs_pair = rows[i].querySelectorAll('input');
//     console.log(inputs_pair[0].value);
//     console.log(inputs_pair[1].value);
    

  
//   }
//   let kot_items = kot.querySelectorAll('.mdc-data-table__cell');

  

// }





window.addOrderForm = addOrderForm;
window.removeOrderForm = removeOrderForm;
window.kotGenerator = kotGenerator;
window.payment = payment;
window.order = order;
window.identifier = identifier;
// window.inputListener = inputListener;


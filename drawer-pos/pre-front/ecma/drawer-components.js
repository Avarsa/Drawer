const print_kot_button = `
						<div class="print_kot_button mdc-card__action">
              <div class="mdc-card__action-buttons">
     <button onclick = "print_view_kot(this)" class="mdc-fab mdc-fab--extended" aria-label="Add">
          <div class="mdc-fab__ripple"></div>
          <span class="mdc-fab__icon material-icons">print</span>
          <span class="mdc-fab__label">Print KOT</span>
        </button>
  </div>
            
            </div>


`;

const payment_content = `
							<div class="mdc-layout-grid">

              <div class="mdc-layout-grid__inner row">

              <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop">

						              					<div class="mdc-form-field">
						  <div class="mdc-radio">
						    <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked>
						    <div class="mdc-radio__background">
						      <div class="mdc-radio__outer-circle"></div>
						      <div class="mdc-radio__inner-circle"></div>
						    </div>
						    <div class="mdc-radio__ripple"></div>
						  </div>
						  <label for="radio-1">Cash</label>
						</div>

              </div>

              </div>
              </div>
`;


const table = `
			         <div class="mdc-layout-grid__cell">


          <!-- Table -->
          <div class="mdc-card mdc-elevation--z4 table">




         



            <!-- Table Tab -->
            <div class="mdc-tab-bar" role="tablist">

              <div class="mdc-tab-scroller">

                <div class="mdc-tab-scroller__scroll-area">

                  <div class="mdc-tab-scroller__scroll-content">

                      <button onclick = "identifier(this)" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__icon material-icons" aria-hidden="true">
                        person
                        </span>
                        <span class="mdc-tab__text-label">
                          
                        </span>
                      </span>
                      <span class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                          
                        </span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>



                    <button onclick = "order(this)" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__icon material-icons" aria-hidden="true">
                        fastfood
                        </span>
                        <span class="mdc-tab__text-label">
                          Order
                        </span>
                      </span>
                      <span class="mdc-tab-indicator">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                          
                        </span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>

                    <button onclick = "payment(this)" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="1">
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__icon material-icons" aria-hidden="true">
                        payment
                        </span>
                        <span class="mdc-tab__text-label">
                          Payment
                        </span>
                      </span>
                      <span class="mdc-tab-indicator">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                          
                        </span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>

                  </div>








                </div>
              </div>
            </div>

<!-- Table Tab Ends -->

          

<!-- Table Body -->



             <div class="identifier_content" style="height: 90%;">
              
            <div style = 'margin-top: 10%;' class="mdc-layout-grid table_content">
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet">


                  <br>


                     <div class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--outlined text_field">
                    <i class="material-icons mdc-text-field__icon">deck</i>
                    <input type="text" class="mdc-text-field__input menu_item">
                      <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__notch">
                          <label for="tf-outlined" class="mdc-floating-label">Table</label>
                        </div>
                        <div class="mdc-notched-outline__trailing"></div>
                      </div>
                  </div>



             

                    <br> <br> <br>


                         <div class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--outlined text_field">
                    <i class="material-icons mdc-text-field__icon">person</i>
                    <input type="text" class="mdc-text-field__input menu_item">
                      <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__notch">
                          <label for="tf-outlined" class="mdc-floating-label">Name</label>
                        </div>
                        <div class="mdc-notched-outline__trailing"></div>
                      </div>
                  </div>

                  <br><br><br>

                     <div class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--outlined text_field">
                    <i class="material-icons mdc-text-field__icon">phone</i>
                    <input type="text" class="mdc-text-field__input menu_item">
                      <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__notch">
                          <label for="tf-outlined" class="mdc-floating-label">Phone Number</label>
                        </div>
                        <div class="mdc-notched-outline__trailing"></div>
                      </div>
                  </div>

                   <br> <br> <br>

                     <div class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--outlined text_field">
                    <i class="material-icons mdc-text-field__icon">email</i>
                    <input type="text" class="mdc-text-field__input menu_item">
                      <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__notch">
                          <label for="tf-outlined" class="mdc-floating-label">Email</label>
                        </div>
                        <div class="mdc-notched-outline__trailing"></div>
                      </div>
                  </div>


                   







                </div>

<!-- visual table -->

                <!-- <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>


                </div>

                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>

                </div>

                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>

                </div>

                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>


                </div>

                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>

                </div>

                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>

                </div>

                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>

                </div>

                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone">
                  
                  <i style= 'font-size: 48px;'  class="material-icons mdc-text-field__icon">deck</i>

                </div>
 -->


          
            </div>
            <br>
            </div>


            

            


            </div>
          




            

              
          <div class="order_content" style="height: 90%;">
              
            <div class="mdc-layout-grid table_content">
              <br>
              <div class="mdc-layout-grid__inner row">

                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet">

                  <div class="mdc-text-field mdc-text-field--with-leading-icon mdc-text-field--outlined text_field">
                    <i class="material-icons mdc-text-field__icon">fastfood</i>
                    <input type="text" class="mdc-text-field__input menu_item">
                      <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__notch">
                          <label for="tf-outlined" class="mdc-floating-label">Menu Item</label>
                        </div>
                        <div class="mdc-notched-outline__trailing"></div>
                      </div>
                  </div>


                </div>



            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-8-tablet">
                <div class="mdc-text-field mdc-text-field--outlined text_field">
                  
                  <input type="text" class="mdc-text-field__input quantity">
                  <div class="mdc-notched-outline">
                    <div class="mdc-notched-outline__leading"></div>
                    <div class="mdc-notched-outline__notch">
                      <label for="tf-outlined" class="mdc-floating-label">Quantity</label>
                    </div>
                    <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>
            </div>
            <br>
            </div>


            

            


            </div>

            


          </div>



<!-- KOT -->

          <div class="kot" style="height: 90%;">
              <br>





                <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      

           <div class="mdc-data-table ">
  <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
      <tr class="mdc-data-table__header-row">
        <th class="mdc-data-table__header-cell " role="columnheader" scope="col">Item</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Quantity</th>
        
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      
    </tbody>
  </table>
</div>




    </div>
    
  </div>
</div>








          </div>

<!-- KOT Ends -->




          


<!-- payment -->




          <div class="mdc-card__primary-action payment_content" style="height: 90%;">






          </div>


<!-- payment ends -->

          <br>   

            <div class="order_buttons mdc-card__action">
              <div class="mdc-card__action-buttons">
     <button onclick = "kotGenerator(this)" class="mdc-fab mdc-fab--extended" aria-label="Add">
          <div class="mdc-fab__ripple"></div>
          <span class="mdc-fab__icon material-icons">outdoor_grill</span>
          <span class="mdc-fab__label">Kitchen Order Ticket</span>
        </button>
  </div>
              <div class="mdc-card__action-icons">
                <div class="mdc-touch-target-wrapper">
                    <button onclick="addOrderForm(this)" class="mdc-fab mdc-fab--mini mdc-fab--touch">
                    <div class="mdc-fab__ripple"></div>
                    <span class="material-icons mdc-fab__icon">add</span>
                    <div class="mdc-fab__touch"></div>
                  </button>
                   <button onclick="removeOrderForm(this)" class="mdc-fab mdc-fab--mini mdc-fab--touch">
                    <div class="mdc-fab__ripple"></div>
                    <span class="material-icons mdc-fab__icon">remove</span>
                    <div class="mdc-fab__touch"></div>
                  </button>
                
                </div>
              </div>
            </div>


            </div>
            <!-- Table Body Ends -->

             
            
          <!-- Table Ends -->



     
        </div>

`;

export {print_kot_button,
		payment_content,
		table
	};
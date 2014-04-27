var MenuPool = new Array();


function Menu(id, trayId){
	this.id = id;
	this.trayId = trayId;
	this.deals = new Array();

	MenuPool[id] = this;

	this.getdeals = function(){
		var deals = new Array();
		var deal = new MenuDeal("1", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("2", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("3", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("4", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("5", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("6", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("7", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		var deal = new MenuDeal("8", "Deal Title", "./images/fb.jpg", 50);
		deals[deal.id] = deal;
		return deals;
	}


	this.dealHTML = function(_deal){
		var deal = this.deals[_deal];

		var str = "<div class='row'>	\
                    <div class='col-md-12'>	\
                      <div class='well menu-item'>	\
                        <div class='row'>	\
                          <div class='col-md-2'>	\
                            <div class='row'>	\
                              <img src='./images/fb.jpg' alt='thumb' class='img-circle img-thumb'>	\
                            </div>	\
                          </div>	\
                          <div class='col-md-10'>	\
                            <div class='row'>	\
                              <div class='col-md-8'>	\
                                <h3>" + deal.title + "</h3>	\
                              </div>	\
                              <div class='col-md-4'>	\
                                <input id = '" + this.id + "_" + deal.id +"_quantity' class='menu-quantity-spinner text-center' type='number' value='1'>	\
                              </div>	\
                            </div>	\
                            <div class='row'>	\
                              <div class='col-md-12'>	\
                                <div class='row'>	\
                                  <div class='col-md-8'>	\
                                    Price: " + deal.price +" Rs.	\
                                  </div>	\
                                  <div class='col-md-4 pull-right'>	\
                                    <button onclick = \"addToTray('" + deal.id + "', '" + this.id + "')\" class='btn btn-sm btn-primary'>	\
                                      Add to Tray 	\
                                    </button>	\
                                  </div>	\
                                </div>	\
                              </div>	\
                            </div>	\
                          </div>	\
                        </div>	\
                      </div>	\
                    </div>	\
                  </div>";

		/*var str = "<div class='catdeal'> \
					<div class='catdealContainer'> \
						<div class='left'> \
							<div class='thumbnail'>\
								<img src='" + deal.thumbnail + "'> \
							</div> \
						</div> \
						<div class='middle'> \
							<h3>" + deal.title + "</h3> \
							<p class='description'>"
								+ deal.description +
							"</p> \
						</div> \
						<div class='right'> \
								<p class='price'>"
									+ deal.price + " Rs. \
								</p> \
								<div class='addToCart'> \
									<table> \
										<tr> \
											<td> \
												<label> \
													Quantity: \
												</label> \
											</td> \
											<td> \
												<input id = '" + this.id + "_" + deal.id +"_quantity' type='text' value='1'> \
											</td> \
										</tr> \
										<tr> \
											<td> \
												<button onclick = \"addToCart('" + deal.id + "', '" + this.id + "')\" type='button'>Add to cart</button> \
											</td> \
										</tr> \
									</table> \
								</div> \
						</div> \
					</div> \
				</div>"; */
				return str;
	}


	this.render = function(){
		if(this.deals.length == 0)
			this.deals = this.getdeals();

		var html = "<div class='col-md-6 border-right'>";
		var count = 1;
		var mid = 4;
		for(var deal in this.deals){
			html += this.dealHTML(deal);
			if(count == mid){
				html += "</div>";
				html += "<div class='col-md-6'>"
			}
			count++;
		}

		html += "	</div>	\
				 </div>";
		var div = document.getElementById(this.id);
		div.innerHTML = html;
	}


	this.addToTray = function(dealId){
		var deal = this.deals[dealId];
		var quantity = document.getElementById(this.id + "_" + dealId + "_quantity");
		var trayDeal = new TrayDeal(deal, parseInt(quantity.value, "10"));
		if(isNaN(quantity.value) || quantity.value < 1)
			alert("Invalid Quantity");
		else if(this.trayId in trayPool)
			trayPool[this.trayId].addToTray(trayDeal);
		else
			alert("Invalid tray");
	}
}


function addToTray(dealId, catId){
		MenuPool[catId].addToTray(dealId);
}
var trayPool = new Array();

function Tray(id, div){
	this.id = id;
	this.div = div;
	this.dealCount = 0;
	this.deals = new Array();
	trayPool[id] = this;


	this.getSubtotal = function(deal){
		return deal.quantity * deal.price;
	}


	this.render = function(){
		var total = 0;
		var dealCountStr = this.dealCount;
		if(this.dealCount < 10)
			dealCountStr = "0" + this.dealCount;
		var head =  "<div id = '" + this.id + "_trayDropdown' class='btn-group'>	\
	                  <button type='button' class='btn btn-default btn-lg dropdown-toggle' data-toggle='dropdown'>	\
	                  	<span class='badge'>" + dealCountStr + "</span>	\
	                    <img class='tray-icon' src='images/tray-icon.png'/>	\
	                    <span class='caret'></span>	\
	                  </button>	\
	                  <ul class='dropdown-menu dropdown-menu-right tray-detail' data-stopPropagation='true' role='menu'>	\
	                    <li>	\
	                      <table class='table' data-stopPropagation='true'>	\
	                        <tr class='active'> \
	                          <th>	\
	                            Quantity 	\
	                          </th>	\
	                          <th>	\
	                            Title 	\
	                          </th>	\
	                          <th>	\
	                            SubTotal 	\
	                          </th>	\
	                          <th>	\
	                            <p class='text-center'>Delete</p>	\
	                          </th>	\
	                        </tr>";
		var body ="";
		var subtotal;

		for(var i in this.deals){
			deal = this.deals[i];

			body += "       <tr> \
	                          <td class='tray-quantity'>	\
	                          	<input id = '" + this.id + "_" + deal.id + "_quantity' onchange = \"updateQuantity('" + this.id + "', '" + deal.id + "')\" class='text-center tray-quantity-spinner' data-stopPropagation='true' type='number' value='" + deal.quantity + "'>	\
	                          </td>	\
	                          <td>"
	                            + deal.title +
	                          "</td>	\
	                          <td>";

	        subtotal = this.getSubtotal(deal);
	        total += subtotal;
	        body +=			  	subtotal +
	                          "</td>	\
	                          <td class='pull-left' style='width:100%'>	\
	                            <button type='button' class='close' aria-hidden='true' data-stopPropagation=\"true\" onclick = \"removeDeal('" + this.id + "', '" + deal.id + "')\">&times;</button>	\
	                          </td>	\
	                        </tr>";
	    }

		var foot =  "		<tr>	\
	                          <th>	\
	                            Total \
	                          </th>	\
	                          <td>	\
	                          </td>	\
	                          <th>"
	                            + total +
	                          "</th>	\
	                          <td>	\
	                            <button class='pull-right btn btn-sm btn-primary'> Place Order </button>	\
	                          </td>	\
	                        </tr>	\
	                      </table>	\
	                    </li>	\
	                    <div class='row'>	\
	                    </div>	\
	                  </ul>	\
	                </div>";

		var trayDiv = document.getElementById(this.id);
		trayDiv.innerHTML = head + body + foot;
		$(function() {
		    $("ul.dropdown-menu").on("click", "[data-stopPropagation]", function(e) {
		        e.stopPropagation();
		    });
		});
	}

	this.openDropdown = function(){
		var id = this.id + "_trayDropdown";
		id = "#" + id;
		$(id).addClass("open");
	}


	this.addToTray = function(traydeal){
		this.dealCount += traydeal.quantity;
		if(traydeal.id in this.deals){
			this.deals[traydeal.id].quantity += traydeal.quantity;
		} else {
			this.deals[traydeal.id] = traydeal;
		}
		this.render();
	}


	this.removeDeal = function(dealId){
		this.dealCount -= this.deals[dealId].quantity;
		delete this.deals[dealId];
		this.render();
		this.openDropdown();
	}


	this.updateQuantity = function(dealId){
		var inp = document.getElementById(this.id + "_" + dealId + "_quantity");
		var quantity = parseInt(inp.value, "10");

		if(isNaN(quantity) || quantity < 1){
			alert("Invalid Quantity");
			inp.value = this.deals[dealId].quantity;
		} else {
			var diff = quantity - this.deals[dealId].quantity;
			this.dealCount += diff;
			this.deals[dealId].quantity = quantity;
			this.render();
			this.openDropdown();
		}
	}
}

function updateQuantity(trayId, dealId){
	trayPool[trayId].updateQuantity(dealId);
}


function removeDeal(trayId, dealId){
	trayPool[trayId].removeDeal(dealId);
}

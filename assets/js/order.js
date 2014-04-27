function Order(orderObj, ordersPanelId){
	this.id = orderObj.id;
	this.phone = orderObj.phone;
	this.deals = orderObj.deals;
	this.address = orderObj.address;
	this.ordersPanelId = ordersPanelId;
	this.closed = false;

	this.ordersPanelHtml = function(){
		var head = "\
			<li>	\
	            <div class='order text-left'>	\
	                <div class='order-body'>	\
	                  <b>#" + this.id  + "</b>	\
	                  <div class='order-deals'>	\
	                    <table class='table table-condensed'>	\
	                      <thead>	\
	                        <tr>	\
	                          <th class='col-md-3'>	\
	                            <input id = '" + this.prefix() + "_checkall' onchange='updateOrderDealAll(\"" + this.ordersPanelId + "\", \"" + this.id + "\")' type='checkbox'>	\
	                            <span id='" + this.prefix() + "_checkedCount'>0</span>\/"+ this.deals.length +
	                          "</th>	\
	                          <th class='col-md-7'>	\
	                            Title	\
	                          </th>	\
	                          <th class='text-right col-md-2'>	\
	                            Quantity	\
	                          </th>	\
	                        </tr>	\
	                      </thead>	\
	                      <tbody>";
	    var body = "";
	    for(var i = 0; i < this.deals.length; i++){
			body += 	"	<tr>	\
	                          <td>	\
	                            <input id='" + this.prefix() + "_" + i + "_checkbox' onchange='updateOrderDeal(\"" + this.ordersPanelId + "\", \"" + this.id + "\", \"" + i + "\")' type='checkbox'/>	\
	                          </td>	\
	                          <td> \
	                          	<span id = '" + this.prefix() + "_" + i + "_title'>"
	                          		+ this.deals[i].title +
	                          	"</span>	\
	                          </td>	\
	                          <td class='text-right'>"
	                          + this.deals[i].quantity +
	                          "</td>	\
	                        </tr>";
	    }

	    var foot = "</tbody>	\
	                    </table>	\
	                  </div>	\
	                    <table class='table order-info'>	\
	                      <thead>	\
	                        <tr>	\
	                          <th> 	\
	                            Phone: " + this.phone +"	\
	                          </th>	\
	                          <th class='text-right'>	\
	                            ETA: 00:00	\
	                          </th>	\
	                        </tr>	\
	                      </thead>	\
	                      <tbody>	\
	                        <tr>	\
	                          <td>	\
	                            <button class='btn btn-xs btn-success'>Address</button>	\
	                          </td>	\
	                          <td class='text-right'>	\
	                            <button class='btn btn-xs btn-warning'>Close</button>	\
	                          </td>	\
	                        </tr>	\
	                      </tbody>	\
	                    </table>	\
	                </div>	\
	              </div>	\
	            </li>";
		return head + body + foot;
	}

	this.historyPanelHtml = function(){
		return "Nothing here";
	}

	this.html = function(){
		if(this.closed)
			return this.historyPanelHtml();
		else
			return this.ordersPanelHtml();
	}

	this.prefix = function(){
		return this.ordersPanelId + "_" + this.id;
	}

	this.setCheckedCount = function(value){
		var id = "#" + this.prefix() + "_checkedCount";
		$(id).text(value);
	}

	this.getCheckedCount = function(){
		var id = "#" + this.prefix() + "_checkedCount";
		var number = parseInt($(id).text(), 10);
		return number;
	}

	this.allDealsChecked = function(){
		return this.getCheckedCount() == this.deals.length;
	}

	this.updateDeal = function(dealId){
		var id = "#" + this.prefix() + "_" + dealId + "_title";
		var checkbox_id = "#" + this.prefix() + "_" + dealId + "_checkbox";
		var checkbox_all_id = this.prefix() + "_checkall";
		if($(checkbox_id).is(':checked')){
			$(id).addClass("deal-checked")
			this.setCheckedCount(this.getCheckedCount() + 1);
			if(this.allDealsChecked())
				document.getElementById(checkbox_all_id).checked=true;
		} else{
			$(id).removeClass("deal-checked");
			document.getElementById(checkbox_all_id).checked=false;
			this.setCheckedCount(this.getCheckedCount() - 1);
		}
	}

	this.checkAllDeals = function(){
		for(var i = 0; i < this.deals.length; i++){
			var id = "#" + this.prefix() + "_" + i + "_title";
			var checkbox_id = this.prefix() + "_" + i + "_checkbox";
			document.getElementById(checkbox_id).checked=true;
			$(id).addClass("deal-checked")
		}
		this.setCheckedCount(this.deals.length);
	}

	this.uncheckAllDeals = function(){
		for(var i = 0; i < this.deals.length; i++){
			var title_id = "#" + this.prefix() + "_" + i + "_title";
			var checkbox_id = this.prefix() + "_" + i + "_checkbox";
			document.getElementById(checkbox_id).checked=false;
			$(title_id).removeClass("deal-checked");
		}
		this.setCheckedCount(0);
	}

	this.updateAllDeals = function(){
		var checkbox_id = "#" + this.prefix() + "_checkall";
		if($(checkbox_id).is(':checked')){
			this.checkAllDeals();
		} else{
			this.uncheckAllDeals();
		}
	}
}
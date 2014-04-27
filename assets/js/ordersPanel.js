var ordersPanelPool = new Array()

function OrdersPanel(divId){
	this.id = divId;
	this.processed = 0;
	this.orders = {};
	ordersPanelPool[this.id] = this;

	this.load = function(){
		var jsonString ='{ "id": 1,' +
						  '"deals":[{"title":"Deal 1", "quantity":1}, {"title":"Deal 1", "quantity":1}, {"title":"Deal 1", "quantity":1}],' +
						  '"phone":"+9323283838",' +
						  '"address":"Address information"}';

		var orderData = eval ("(" + jsonString + ")");

		var order = new Order(orderData, this.id);
		this.orders[order.id] = order;
		orderData.id = 2;
		order = new Order(orderData, this.id);
		this.orders[order.id] = order;
		
		orderData.id = 3;
		order = new Order(orderData, this.id);
		this.orders[order.id] = order;
		
		orderData.id = 4;
		order = new Order(orderData, this.id);
		this.orders[order.id] = order;
		
		orderData.id = 5;
		order = new Order(orderData, this.id);
		this.orders[order.id] = order;
	}
	
	this.render = function(){
		if($.isEmptyObject(this.orders))
			this.load();
		var head = "<div class='panel-heading'>	\
		                <h3 class='panel-title'>	\
							In Queue: <span>" + this.orders.length + "</span>	\
							<div class='pull-right'>	\
								Processed today: <span>" + this.processed + "</span>	\
							</div>	\
						</h3>	\
					</div>	\
					<div class='panel-body'>	\
						<div class='orders-div'>	\
							<ul class='list-inline'>";

		var body = "";
		if ($.isEmptyObject(this.orders))
			body = "<center>Orders queue is empty</center>";
		else
			for(var order in this.orders){
				body += this.orders[order].html();
			}
		var div = document.getElementById(this.id);

		var foot =			 "</ul>	\
						</div>	\
					</div>";

		div.innerHTML = head + body + foot;
	}

	this.addOrder = function(order){
		this.orders.push(order);
	}

	this.updateOrderDeal = function(orderId, dealId){
		this.orders[orderId].updateDeal(dealId);
	}

	this.updateOrderDealAll = function(orderId){
		this.orders[orderId].updateAllDeals();
	}
}

function updateOrderDeal(ordersPanelId, orderId, dealId){
	ordersPanelPool[ordersPanelId].updateOrderDeal(orderId, dealId);
}

function updateOrderDealAll(ordersPanelId, orderId){
	ordersPanelPool[ordersPanelId].updateOrderDealAll(orderId);
}
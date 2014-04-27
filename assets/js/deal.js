function MenuDeal(id, title, thumbnail, price){
	this.id = id;
	this.title = title;
	this.thumbnail = thumbnail;
	this.price = price;
}


function TrayDeal(mDeal, quantity){
	this.id = mDeal.id;
	this.title = mDeal.title;
	this.thumbnail = mDeal.thumbnail;
	this.price = mDeal.price;
	this.quantity = quantity;
}

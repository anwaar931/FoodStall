<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
</br>
<div class="container">
<div id="myCarousel" class="carousel banner slide"  data-ride="carousel">
      <!-- Indicators -->
      <div class="carousel-inner ">
        <div class=" banner item active ">
            <div class="carousel-caption pos">
              <h1>Step 1</h1>
              <p>Sign up today for free</p>
            </div>
          </div>
        
        <div class="item banner">
            <div class="carousel-caption pos">
              <h1>Step 2</h1>
              <p>Order today</p>
              </div>
          </div>
        <div class="item banner">
            <div class="carousel-caption pos">
              <h1>Step 3</h1>
              <p>Enjoy food at home</p>
              </div>
          </div>
             </div>
             <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
      <div class="col-lg-6 col-lg-offset-3">
    <h3 class="text-center">Please select a location to continue</h3>
    <form class="" id="form1" name="form1" method="post" action="" >
       <label class="col-lg-4  col-lg-offset-2 check control-label">Current location :</label>
      <div class="btn-group">
          <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
            Select your location
        <span class="caret"></span>
        <span class="sr-only"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Milaad Street</a></li>
                    <li><a href="#">Kotha Pind</a></li>
                    <li><a href="#">G1</a></li>
                    <li><a href="#">G4</a></li>
        </ul>
      </div>
      <div class="form-group col-lg-8  col-lg-offset-5">
        <input name="add" type="" data-toggle="modal" data-target="#myModal" value="Add location" class="btn btn-primary btn-sm but1"/>
        <input name="view" type="submit" value="View Menu"  class="btn btn-primary btn-sm but2" role="button"/>
      </div>
		
	</form>
</div>
<div class="please_add_location col-lg-7 col-lg-offset-4">
                            <span class=" label label-info">**Please add a location before viewing the menu</span>
                        </div>
   
  </div>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog_position">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <div class="pop-cont">
             <h3 class="home-title">Please pin your location to add</h3>
            
            <!--<div class="search-div">
              <div class="input-append">
                <input class="span2" id="appendedInputButton" type="text">
                <button type="submit" class="btn"> <i class="icon-search"></i> </button>
              </div>
            </div>-->
            <div class="map-div">
              <div class="col-lg-4">
                          <input id="pac-input" class="form-control" type="search" placeholder="Search Box">  
                        </div>
    <div id="map-canvas"></div>
            </div>
            <div class="">
              <div class="col-lg-6">
              <input class="form-control" id="name-inp" type="text">
            </div>
              <button type="button" class="btn btn-primary">Add Location</button>
            </div>
            <div class="yourlocation-area">
            <div class="yourlocation">Your Location "Home" has been added.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</br>

<div class="clearfix">
</div>

<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* Author: Jorge Torres
 * Description: Login controller class
 */
class Landing extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		
	}
	
	public function index(){
		$this->load->view('common/header');
		$this->load->view('main/landing');
		$this->load->view('common/footer');
	}
}
?>
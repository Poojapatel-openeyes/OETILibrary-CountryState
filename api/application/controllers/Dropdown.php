<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Dropdown extends CI_Controller {


	public function __construct() {
	
		parent::__construct();		
		$this->load->model('Dropdown_model');
		
	}

	public function getAllDefaultData()
	{
		//$data="";
		$data['country']=$this->Dropdown_model->getlist_country();
		$data['state']=$this->Dropdown_model->getlist_state();
		echo json_encode($data);
	}
	public function getStateList($country_id = NULL) {
		
		if(!empty($country_id)) {
			
			$result = [];
			$result = $this->Dropdown_model->getStateList($country_id);			
			echo json_encode($result);				
		}			
	}
	
}

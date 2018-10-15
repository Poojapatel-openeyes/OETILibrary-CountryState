<?php

class Country_model extends CI_Model
 {

	public function add_Country($post_Country) {
	
		if($post_Country) {	

						
			$Country_data = array(				
				'CountryName' => trim($post_Country['CountryName']),
				'CountryAbbreviation' => trim($post_Country['CountryAbbreviation'])
				
			);
			
			$res = $this->db->insert('tblmstcountry',$Country_data);
		
				
			if($res) {
				// $log_data = array(
				// 	'UserId' => trim($post_Country['UpdatedBy']),
				// 	'Module' => 'Country',
				// 	'Activity' =>'Add'
				// );
				// $log = $this->db->insert('tblactivitylog',$log_data);

				$log_data = array(
					//'user_id' => trim($post_Country['id']),
					'new_value' => trim($post_Country['CountryName']),
					'field_name'=>'Country',
					'activity' =>'add'
				);
				$log = $this->db->insert('audit_log',$log_data);
				return true;
			} else {
				return false;
			}	
		} else {
			return false;
		}
	
	
	}
	
	public function getlist_Country() {

		$this->db->select('c.CountryId,c.CountryName,c.CountryAbbreviation');
		$this->db->order_by('c.CountryId','asc');
		$result = $this->db->get('tblmstcountry as c');
	
				
		$res = array();
		if($result->result()) {
			$res = $result->result();
		}
		return $res;

	
		
	}
	
	public function getlist_audit() {

		$this->db->select('c.id,c.user_id,c.field_name,c.old_value,c.new_value,c.activity,c.modified,c.modified_by_user_id');
		$this->db->order_by('c.id','DESC');
		$result = $this->db->get('audit_log as c');
	
				
		$res = array();
		if($result->result()) {
			$res = $result->result();
		}
		return $res;

	
		
	}
	
	public function get_Countrydata($Country_Id = NULL)
	{
		
		if($Country_Id) {			
			$this->db->select('c.CountryId,c.CountryName,c.CountryAbbreviation');
			$this->db->where('c.CountryId',$Country_Id);
			$result = $this->db->get('tblmstcountry as c');
			
			$Country_data = array();
			foreach($result->result() as $row) {
				$Country_data = $row;
			}
			return $Country_data;			
		} else {
			return false;
		}
	
	}
	
	
	public function edit_Country($obj) {

	
		$post_Country = $obj['new'];
		$old_Country = $obj['old'];

		if($post_Country) {
			
			$Country_data = array(
				'CountryName' => trim($post_Country['CountryName']),
				'CountryAbbreviation' => trim($post_Country['CountryAbbreviation'])		
			);
			
			$this->db->where('CountryId',$post_Country['CountryId']);
			$res = $this->db->update('tblmstcountry',$Country_data);
			
			if($res) {
				 IF ($post_Country['CountryName'] != $old_Country['old_CountryName'])
					{
						$log_data = array(
							 //'user_id' => trim($post_Country['UserId']),
							'field_name' => 'CountryName',
							 'old_value' =>trim($old_Country['old_CountryName']),
							  'new_value'=>trim($post_Country['CountryName']),
							  'activity'=>'update'
							// 'modified'=>'abc',
						
						);
						$log = $this->db->insert('audit_log',$log_data);
				
				} 
				IF ($post_Country['CountryAbbreviation'] != $old_Country['old_CountryAbbreviation'])
				{
					$log_data = array(
						 //'user_id' => trim($post_Country['UserId']),
						'field_name' => 'CountryAbbreviation',
						 'old_value' =>trim($old_Country['old_CountryAbbreviation']),
						  'new_value'=>trim($post_Country['CountryAbbreviation']),
						  'activity'=>'update'
						// 'modified'=>'abc',
					
					);
					$log = $this->db->insert('audit_log',$log_data);
			
			}
			
				
				
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	
	}
	
	
	public function delete_Country($post_Country) {
	
	

			$this->db->where('CountryId',$post_Country['id']);
			$res = $this->db->delete('tblmstcountry');

			
			if($res) {
	
				return true;
			} else {
				return false;
			}
		
		
	}
	public function isActiveChange($post_data) {
	try{
		if($post_data) {
			if(trim($post_data['IsActive'])==1){
				$IsActive = true;
			} else {
				$IsActive = false;
			}
			$data = array(
				'IsActive' => $IsActive,
				'UpdatedBy' => trim($post_data['UpdatedBy']),
				'UpdatedOn' => date('y-m-d H:i:s'),
			);			
			$this->db->where('CountryId',trim($post_data['CountryId']));
			$res = $this->db->update('tblmstcountry',$data);
			$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) { 
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}
			if($res) {
				$log_data = array(
					'UserId' => trim($post_data['UpdatedBy']),
					'Module' => 'Category',
					'Activity' =>'Update'
				);
				$log = $this->db->insert('tblactivitylog',$log_data);
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}	
	}
	catch(Exception $e){
		trigger_error($e->getMessage(), E_USER_ERROR);
		return false;
	}
	}
}

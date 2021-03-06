<?php

class State_model extends CI_Model
{
	public function add_state($post_state)
	{
	
		if($post_state)
		{
			$state_data=array(
				"CountryId"=>trim($post_state['CountryId']),
				"StateName"=>trim($post_state['StateName']),
				"StateAbbreviation"=>trim($post_state['StateAbbreviation']),
				'UpdatedOn' => date('y-m-d H:i:s')
		
				
			);	
				
				$res=$this->db->insert('tblmststate',$state_data);
				if($res)
				{
					
					return true;
				}
				else
				{
					return false;
				}
		}
		else
		{
				return false;
		}
	}
	
	public function get_statedata($state_id=Null)
	{
	  if($state_id)
	  {
		 $this->db->select('StateId,StateName,StateAbbreviation,CountryId,IsActive');
		 $this->db->where('StateId',$state_id);
		 $result=$this->db->get('tblmststate');
		 $company_data= array();
		 foreach($result->result() as $row)
		 {
			$company_data=$row;
			
		 }
		 return $company_data;
		 
	  }
	  else
	  {
		  return false;
	  }
	}
	
	 public function edit_state($post_state) {
		
		if($post_state) {
			
			$state_data = array(
				"CountryId"=>trim($post_state['CountryId']),
				"StateName"=>trim($post_state['StateName']),
				"StateAbbreviation"=>trim($post_state['StateAbbreviation'])
	
	
				
			);
			
			$this->db->where('StateId',trim($post_state['StateId']));
			$res = $this->db->update('tblmststate',$state_data);
			
			if($res) 
			{
				
				return true;
			} else
				{
				 return false;
			    }
		}
		else 
		{
			return false;
		}	
	
	}
	
	function getlist_state()
	{
		$this->db->select('st.StateId,st.StateName,st.StateAbbreviation,st.IsActive,con.CountryName');
			$this->db->join('tblmstcountry con', 'con.CountryId = st.CountryId', 'left');
		 // $this->db->select('st.StateId,st.StateName,st.StateAbbreviation,st.IsActive,con.CountryName');
		 // $this->db->join('tblmstcountry con','st.StateId = st.StateId', 'left');
		// $this->db->where('IsActive="1"');
		$result=$this->db->get('tblmststate st');
		
		$res=array();
		if($result->result())
		{
			$res=$result->result();
		}
		return $res;
	}
	
	public function delete_state($post_state) 
	{
	
		if($post_state) 
		{
			
			$this->db->where('StateId',$post_state['id']);
			$res = $this->db->delete('tblmststate');
			
			if($res) {
				
				return true;
			} else {
				return false;
			}
		} 
		else 
		{
			return false;
		}
		
	}
	
	public function getlist_country() {
	
		$this->db->select('CountryId,CountryName,CountryAbbreviation,PhonePrefix,IsActive');

		$this->db->where('IsActive=1');

		//$this->db->where('IsActive="1"');
		$result = $this->db->get('tblmstcountry');
		
		$res = array();
		if($result->result()) {
			$res = $result->result();
		}
		return $res;
		
	}
	
	
}
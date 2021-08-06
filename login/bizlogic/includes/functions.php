 <?php

    function escape_error($val)
        {
    	$magic_quotes =get_magic_quotes_gpc();
    
    			if($magic_quotes)
    			{
                    $val = addslashes($val);
    			}	
    	return $val;
        }
		
		
	function connectBase(){
		try {
		return  new PDO ('mysql:host=localhost;dbname=login', 'kavi', '56jhuhguftyd666');
		}
		catch (PDOException $e) {
			print "Erreur !: " . $e->getMessage() . "<br/>";
			die();
}
    }



?> 
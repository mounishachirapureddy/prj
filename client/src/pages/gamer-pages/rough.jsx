 {/* const ShowQuantity = useCallback(async () => {
      const userid = profile._id;
      if (!userid) {
        return;
      }
    
      const config = {
        url: `http://localhost:3004/api/cart/getquantity?uid=${userid}&itemId=${props.itemId}`,
        method: "get",
        headers: { Authorization: token },
      };
    
      try {
        const response = await fetchData(config, { showSuccessToast: false });
        return response; // Return the fetched data
      } catch (err) {
        console.log(err);
        return null; // Handle error or return a default value
      }
    }, [fetchData, token]);  
    
    useEffect(() => {
      const fetchQuant = async () => {
        try {
          const response = await ShowQuantity();
          if (response) {
            setQuantity(response.quantity);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchQuant();
    }, [ShowQuantity]);*/}
    



    <input
          style={{
            width: "30px",
            height: "30px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
          value={quantity}
          readOnly
        />
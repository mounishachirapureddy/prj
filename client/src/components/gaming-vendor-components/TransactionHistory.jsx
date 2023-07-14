import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TransactionHistory(props) {
  const [vendorId, setVendorId] = useState("");
  const [transactions, setTransactions] = useState([]);

  const getVendorId = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/gaming-vendor-auth/verify-user",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (response.ok && data.success) {
        setVendorId(data.vendor_id);
      } else {
        window.location.href = "/gaming-vendor-login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVendorId();
  }, []);

  const getTransactionHistory = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/gaming-vendor-transactions/history/${vendorId}`
      );
      const data = await response.json();
      if (response.ok) {
        const sortedTransactions = data.transactions.sort((a, b) => {
          const dateA = new Date(a.transaction_date);
          const dateB = new Date(b.transaction_date);
          return dateB - dateA;
        });
        setTransactions(sortedTransactions);
      } else {
        console.log("Failed to retrieve transaction history");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactionHistory();
  }, [vendorId]);

  const searchTransactions = async (vendorId, keyword) => {
    try {
      const response = await fetch(
        `http://localhost:3001/gaming-vendor-transactions/search-transactions/${vendorId}/${keyword}`
      );
      if (response.ok) {
        const data = await response.json();
        const sortedTransactions = data.searchResults.sort((a, b) => {
          const dateA = new Date(a.transaction_date);
          const dateB = new Date(b.transaction_date);
          return dateB - dateA;
        });
        setTransactions(sortedTransactions);
      } else {
        console.log("Failed to search transactions");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.searchKeyword === "") {
      getTransactionHistory();
    } else {
      searchTransactions(vendorId, props.searchKeyword);
    }
  }, [vendorId, props.searchKeyword]);

  return (
    <ul id="transaction-list" style={{ listStyleType: "none", paddingRight: "30px" }}>
      {transactions.map((transaction) => {
        const transactionDate = new Date(transaction.transaction_date)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, ".");

        return (
          <div className="row py-3 px-3 mx-2 rounded form-group border">
            <div className="alignleft mt-4 my-3 mx-1 d-flex justify-content-center col-1">
              <Link to="#0">
                <figure>
                  <img
                    src="assets/img/apple-touch-icon-57x57-precomposed.png"
                    className={`lazy`}
                    alt=""
                    height="50px"
                  />
                </figure>
              </Link>
            </div>
            <div
              className="text-start col-6 w-75"
              style={{ marginTop: "20px", color: "white" }}
            >
              <h7 className="my-1">
                Transaction id: {" "}
                <Link to="#" title="">
                  {"#" + transaction.transaction_id}
                </Link>
                <br />
              </h7>
              <h7 className="my-1">
                Date of transaction: <Link to="#"> {transactionDate}</Link>
                <br />
              </h7>
              <h7 className="my-1">
                Amount: <Link to="#"> {transaction.snappcoin_count} Snapps</Link>
                <br />
              </h7>
              <h7 className="my-1">
                Status:{" "}
                <span
                  className={`badge ${
                    transaction.transaction_status === "success"
                      ? "bg-success"
                      : transaction.transaction_status === "pending"
                      ? "bg-warning"
                      : "bg-danger"
                  } text-light`}
                >
                  {transaction.transaction_status}
                </span>
              </h7>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default TransactionHistory;

import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [walletAddr, setWalletAddr] = useState("");
  const [buttonText, setButtonText] = useState("Connect");
  const handleWalletChange = async () => {
    const { ethereum } = window;
    try {
      if (ethereum) {
        ethereum.request({ method: "eth_requestAccounts" }, []).then((res) => {
          setWalletAddr(res[0]);
          setButtonText(walletAddr);
        });
      } else {
        setButtonText("Install Metamask");
      }
    } catch (error) {
      console.log(`Error Occured ${error}`);
    }
    console.log("Wallet Connected");
  };
  return (
    <>
      <div className="parent flex justify-around items-center bg-gradient-to-r from-[#c94b4b] to-[#4b134f] p-5">
        <span className="text-white text-3xl font-medium">To-do-List App</span>
        {walletAddr ? (
          <button
            className="bg-white text-red-500 p-4 rounded-xl text-xl font-medium "
            onClick={handleWalletChange}
          >
            {`${walletAddr.slice(0, 8)}....${walletAddr.slice(-3)}`}
          </button>
        ) : (
          <button
            className="bg-white text-red-500 p-4 rounded-xl text-xl font-medium "
            onClick={handleWalletChange}
          >
            {buttonText}
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;

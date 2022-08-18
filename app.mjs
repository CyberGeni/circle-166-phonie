function startApp() {
  // Select Dom Elements
  let numberInput = document.querySelector("#number");
  let networkImage = document.querySelector(".network-provider");

  // Prefixes of all network providers
  const mtnPrefix = [
    "0703",
    "0706",
    "0803",
    "0806",
    "0810",
    "0813",
    "0814",
    "0816",
    "0903",
    "0906",
    "0913",
  ];

  const gloPrefix = ["0805", "0807", "0811", "0705", "0815", "0905"];

  const airtelPrefix = [
    "0802",
    "0808",
    "0812",
    "0701",
    "0902",
    "0907",
    "0901",
    "0708",
  ];

  const etisalatPrefix = ["0809", "0818", "0817", "0908", "0909"];

  // Check if input match network prefix
  const checkNetworkPrefix = () => {
    let phoneNumber = numberInput.value.substring(0, 4);

    if (mtnPrefix.includes(phoneNumber)) {
      networkImage.src = "Image/MTN_Logo.png";
    } else if (gloPrefix.includes(phoneNumber)) {
      networkImage.src = "Image/glo-logo.jpg";
    } else if (airtelPrefix.includes(phoneNumber)) {
      networkImage.src = "Image/airtel.jpeg";
    } else if (etisalatPrefix.includes(phoneNumber)) {
      networkImage.src = "Image/9mobile.png";
    }
  };

  numberInput.addEventListener("input", () => {
    console.log("confirm network");
    checkNetworkPrefix();
  });
}
// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //

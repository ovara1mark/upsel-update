import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

// // ****** Get Countries
// export const GetCountries = async ({ setLoading, setCountries }) => {
//   try {
//     let res = await axios.get(
//       `https://api.apilayer.com/number_verification/countries`,
//       {
//         headers: {
//           apikey: "0bc99ARJFhkrAZo5QSqHvktgWwmAS5aR",
//         },
//       }
//     );
//     if (res) {
//       setLoading(false);
//       setCountries(res.data);
//       console.log(res.data);
//     }
//   } catch (error) {
//     console.log(error.response.data.message);
//     setLoading(false);
//   }
// };

// console.log(GetCountries(res.data));

// // ***** Validate number
// export const ValidateNumber = async ({
//   phoneFull,
//   setButtonLoad,
//   setValidate,
// }) => {
//   try {
//     setButtonLoad(true);
//     let res = await axios.get(
//       `https://api.apilayer.com/number_verification/validate?number=${phoneFull}`,
//       {
//         headers: {
//           apikey: "0bc99ARJFhkrAZo5QSqHvktgWwmAS5aR",
//         },
//       }
//     );
//     if (res) {
//       setButtonLoad(false);
//       setValidate(res.data);
//       console.log(red.data);
//     }
//   } catch (error) {
//     alert(error.response.data.message);
//     setButtonLoad(false);
//   }
// };

// // ******* Send message
// export const SendMessage = async ({
//   fullName,
//   email,
//   phone,
//   message,
//   setSend,
// }) => {
//   try {
//     const datas = { fullName, email, phone, message };
//     let res = await axios.post(`${URL}/send`, datas);
//     if (res) {
//       setSend(res.data);
//     }
//   } catch (error) {
//     alert(error.response.data.msg);
//   }
// };

console.log(axios.isCancel("something"));
console.log("good");

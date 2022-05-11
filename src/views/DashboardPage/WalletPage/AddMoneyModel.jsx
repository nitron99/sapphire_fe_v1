// import React, { useState, useEffect } from "react";
// import useStyles from "./styles";
// import * as actionTypes from "../../../store/actionTypes";
// import { useDispatch, useSelector } from "react-redux";
// import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";
// import Close from "@mui/icons-material/Close";
// import InputField from "../../../components/formElements/InputField/InputField";
// import { CreateBid } from "../../../store/actions/TradeAction";

// import {
//     CardElement,
//     Elements,
//     useElements,
//     useStripe
//   } from "@stripe/react-stripe-js";
//   import { loadStripe } from "@stripe/stripe-js";
  
//   import { Formik } from "formik";

// const Data = { artId: "" ,biddingAmount: ""};

// const PaymentModal = ({
//     visible,
//     onCancel,
//     onOk,
//     totalPrice,
//     userStore,
//     totalSMS,
//     withOutTax,
//     modalStore
//   }) => {
//     const [cardsList, setCardsList] = useState();
//     const {
//       getAllGatewayPlans,
//       getCards,
//       fetchMySpecialPlans,
//       customPayment
//     } = userStore;
//     useEffect(() => {
//       getAllGatewayPlans();
//       fetchMySpecialPlans();
//       getCards().then(({ data }) => {
//         data.length > 0 && setCardsList(data);
//       });
//     }, []);
  
//     return (
//       <Modal
//         title={<h4 className="fw-bold">Pay Invoice</h4>}
//         visible={visible}
//         onOk={onOk}
//         onCancel={onCancel}
//         footer={null}
//         width={500}
//         closable={false}
//         bodyStyle={{ padding: "0px" }}
//         centered
//       >
//         <div className={`w-100 my-3`}>
//           <button
//             className={`${styles.btn} w-100 py-2`}
//             style={{ fontSize: "1.3em" }}
//           >
//             <i className="fab fa-cc-mastercard me-2" style={{ height: "16px" }} />
//             CREDIT/DEBIT CARD
//           </button>
//           {/* <button
//             className={`${styles.btn} w-50 py-2 ${styles.btnNotActive}`}
//             style={{ fontSize: "1.3em" }}
//           >
//             <i className="fas fa-credit-card me-2" style={{ height: "16px" }} />
//             CREDIT
//           </button> */}
//         </div>
//         <Row>
//           <Col span={12} className="text-center py-2">
//             <h5 className="fw-bold m-0">Payable Amount</h5>
//           </Col>
//           <Col span={12} className={`${styles.amountBg} text-center`}>
//             <h5 className="fw-bold m-0">{`$${totalPrice}`}</h5>
//           </Col>
//         </Row>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm
//             totalPrice={totalPrice}
//             totalSms={totalSMS}
//             cardsList={cardsList}
//             customPayment={customPayment}
//             modalStore={modalStore}
//             withOutTax={withOutTax}
//           />
//         </Elements>
//       </Modal>
//     );
//   };
  
//   export default inject(stores => ({
//     userStore: stores.store.userStore,
//     modalStore: stores.store.modalStore
//   }))(observer(PaymentModal));

// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//       base: {
//         iconColor: "#000",
//         fontWeight: 500,
//         fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//         fontSize: "16px",
//         fontSmoothing: "antialiased",
//         ":-webkit-autofill": {
//           color: "#fff"
//         },
//         "::placeholder": {
//           color: "#000"
//         }
//       },
//       invalid: {
//         iconColor: "#ff001a"
//       }
//     }
//   };
// const CardField = ({ onChange }) => (
//     <CardElement
//       options={CARD_OPTIONS}
//       className="border-info border p-3 rounded"
//       onChange={onChange}
//     />
//   );
  

// const CheckoutForm = props => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const history = useHistory();
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const {
//     totalPrice,
//     totalSms,
//     cardsList,
//     customPayment,
//     modalStore,
//     withOutTax
//     } = props;
//     //////////////////////////////////////////////////////////////////////////////////////////////////////////
//     const handleSubmit = async values => {
//     values.amount = totalPrice;
//     values.smsCredit = totalSms;
//     values.amountWithOutTax = withOutTax;
//     setLoading(true);
//     if (values.card === "NewCard") {
//         stripe.createToken(elements.getElement(CardElement)).then(result => {
//         const { token, error } = result;
//         if (error) {
//             setLoading(false);
//             messageToast.error(error.message);
//         } else {
//             values.source = token.id;
//             customPayment(values)
//             .then(statusM => {
//                 const status = toJS(statusM);
//                 if (
//                 status.statusCode === 400 ||
//                 status.statusCode === 401 ||
//                 status.statusCode === 402 ||
//                 status.statusCode === 403
//                 ) {
//                 messageToast.error(`${status.raw.message}`);
//                 setLoading(false);
//                 history.push("/buy-gateway-credit");
//                 modalStore.toggleModal("showPaymentModal", false);
//                 } else {
//                 messageToast.success(status.message);
//                 setLoading(false);
//                 history.push("/invoice");
//                 modalStore.toggleModal("showPaymentModal", false);
//                 }
//             })
//             .catch(() => setLoading(false));
//         }
//         });
//     } else {
//         customPayment(values)
//         .then(statusM => {
//             const status = toJS(statusM);
//             if (
//             status.statusCode === 400 ||
//             status.statusCode === 401 ||
//             status.statusCode === 402 ||
//             status.statusCode === 403
//             ) {
//             messageToast.error(`${status.raw.message}`);
//             setLoading(false);
//             history.push("/buy-gateway-credit");
//             modalStore.toggleModal("showPaymentModal", false);
//             } else {
//             messageToast.success(status.message);
//             setLoading(false);
//             history.push("/invoice");
//             modalStore.toggleModal("showPaymentModal", false);
//             }
//         })
//         .catch(() => setLoading(false));
//     }
//     };
//   <Formik
// initialValues={{
//     name: "",
//     city: "",
//     card: ""
// }}
// //   validationSchema={Yup.object().shape({
// //     name: Yup.string().required("Name is required!"),
// //     card: Yup.string().required("Please Choose a payment option"),
// //     city: Yup.string()
// //   })}
// onSubmit={(values, { setSubmitting }) => {
//     handleSubmit(values);
//     setSubmitting(false);
// }}
// >
// {({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleSubmit,
//     setFieldValue
// }) => {
//     return (
//     <form onSubmit={handleSubmit} className="p-3">
//         <Box gutter={20}>
//         <Box span={24}>
//             <h6 className="fw-bold mb-3">Fill the form Below</h6>
//         </Box>
//         </Box>
//         <Box gutter={20}>
//         <Box span={24}>
//             <InputField
//             placeholder="Card Holder Name"
//             type="text"
//             name="name"
//             onChange={handleChange}
//             value={values.name}
//             error={errors.name}
//             touched={touched.name}
//             />
//         </Box>
//         </Box>
//         <Box gutter={20}>
//         <Box span={24}>
//             <Form.Item
//             validateStatus={errors.card && touched.card ? "error" : ""}
//             help={errors.card && touched.card ? errors.card : null}
//             className="m-0"
//             >
//             <Radio.Group
//                 onChange={e => setFieldValue("card", e.target.value)}
//                 value={values.card}
//                 name="card"
//                 className="ant-row w-100"
//             >
//                 {cardsList &&
//                 cardsList.map(card => (
//                     <Radio className="ant-col-24" value={card.id}>
//                     <div className="border rounded border-info p-3 d-flex justify-content-between align-items-center">
//                         <span className="fs-6">
//                         **** **** **** {card.last4}
//                         </span>
//                         <kbd>{card.brand}</kbd>
//                     </div>
//                     </Radio>
//                 ))}
//                 <Radio value="NewCard" className="ant-col-24 w-100">
//                 <span className="mr-5 fw-bold">Add New Card</span>
//                 <CardField
//                     onChange={e => {
//                     setError(e.error);
//                     setFieldValue("card", "NewCard");
//                     }}
//                 />
//                 </Radio>
//             </Radio.Group>
//             </Form.Item>
//         </Box>
//         </Box>
//         <Box>
//         <Box>
//             <InputField
//             placeholder="City"
//             type="text"
//             name="city"
//             onChange={handleChange}
//             value={values.city}
//             error={errors.city}
//             touched={touched.city}
//             />
//         </Box>
//         </Box>
//         <Box gutter={20} className="text-center">
//         <Box span={24}>
//             <AppButton
//             type="submit"
//             className="rounded-pill w-50 shadow-sm"
//             label={loading ? <LoadingOutlined /> : "Submit"}
//             />
//         </Box>
//         </Box>
//   </form>
// );
// }}
// </Formik>
 

// const AddMoneyModel = ({open, setOpen, title, id}) => {
//   const scroll = "paper";
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const [enableSave, setEnableSave] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState(Data);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const descriptionElementRef = React.useRef(null);

//   useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//     setEnableSave(false);
//     setLoading(false);
//     setErrors({});
//   }, [open]);

// //   useEffect(() => {
// //     if (passwordChange !== null) {
// //       if (passwordChange?.success) {
// //         setLoading(false);
// //       }
// //     }
// //   }, [passwordChange]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (enableSave) {
//     //   console.log(id);
//     //   console.log(formData.biddingAmount)
//       setErrors(errors);
//       setEnableSave(false);
//       dispatch(CreateBid({ ...formData, artId: id}))
//     }
//     setEnableSave(false);
//   };


//     const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setEnableSave(true);
//     setLoading(false);
//   };

//   return (
//     <Dialog open={open} fullWidth
//     maxWidth="xs" onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
//       <DialogTitle id="scroll-dialog-title">
//         {title}
//         <IconButton
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 12,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <Close />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent dividers={scroll === "paper"}>
//         <DialogContentText sx={{ whiteSpace: "pre-wrap" }} id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
//           {/* <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} className={classes.changepwd_form}> */}
         
//           <CheckoutForm
//             totalPrice={totalPrice}
//             totalSms={totalSMS}
//             cardsList={cardsList}
//             customPayment={customPayment}
//             modalStore={modalStore}
//             withOutTax={withOutTax}
//             />
//           {/* </form> */}
//         </DialogContentText>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddMoneyModel;
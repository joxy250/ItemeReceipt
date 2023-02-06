const customer = {
  fullname: "NYIKARUKUNDO",
};
const company = {
  iteme_agent: "Joxy",
  company_name: "RTN",
  contact: "07873233",
  
};
const taxPayment={
  amount_value:"42300 RWF",
  fees_value:"4200 RWF",
  taxes_value:"0.00 RWF",

};
const setData = () => {
  const customer_name = customer.fullname;
  const customer_contact = customer.contact;
  const agent_name = company.iteme_agent;
  const company_contact = company.contact;
  const tax_amount= taxPayment.amount_value;
  const tax_fees= taxPayment.fees_value;
  const payment_tax= taxPayment.amount_value;

  document.getElementById("customer_name").innerHTML = customer_name;
  document.getElementById("customer_contact").innerHTML = customer_contact;
  document.getElementById("agent_name").innerHTML = agent_name;
  document.getElementById("company_contact").innerHTML = company_contact;
  document.getElementById("amount_value").innerHTML=taxPayment.amount_value;
  document.getElementById("fees_value").innerHTML=taxPayment.fees_value;
  document.getElementById("taxes_value").innerHTML=taxPayment.taxes_value;
};

window.onload = setData;
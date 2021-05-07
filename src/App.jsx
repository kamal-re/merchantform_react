import React from "react";
import "./index.css";
import "./Table.js";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Email: "",
      Phone: "",
      Website: "",
      ContactName: "",
      ContactPhone: "",
      ContactEmail: "",
      Notes: "",
      Type: "",
      Category: "",
      CommissionPercentage: "",
      ActiveFrom: "",
      Logo: "",
      CriticalAccount: "",
      PaymentOptions: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const {
      Name,
      Email,
      Phone,
      Website,
      ContactName,
      ContactPhone,
      ContactEmail,
      Notes,
      Type,
      Category,
      CommissionPercentage,
      ActiveFrom,
      Logo,
      CriticalAccount,
      PaymentOptions,
    } = this.state;
    event.preventDefault();
    return (
      <table>
        <tr>{Name}</tr>
        <tr>{Email}</tr>
        <tr>{Phone}</tr>
        <tr>{Website}</tr>
        <tr>{ContactName}</tr>
        <tr>{ContactPhone}</tr>
        <tr>{ContactEmail}</tr>
        <tr>{Notes}</tr>
        <tr>{Type}</tr>
        <tr>{Category}</tr>
        <tr>{CommissionPercentage}</tr>
        <tr>{ActiveFrom}</tr>
        <tr>{Logo}</tr>
        <tr>{CriticalAccount}</tr>
        <tr>{PaymentOptions}</tr>
      </table>
    );
  }

  // Method causes to store all the values of the
  // input field in react state single method handle
  // input changes of all the input field using ES6
  // javascript feature computed property names
  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value,
    });
  }

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <header>New Business</header>
            <br />
            <strong id="name">Name</strong>
            <input
              name="Name"
              placeholder="name"
              value={this.state.Name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="email">Email</strong>
            <input
              name="Email"
              placeholder="email"
              value={this.state.Email}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="Phone">Phone</strong>
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="Website">Website</strong>
            <input
              type="text"
              name="Website"
              placeholder="website"
              value={this.state.Website}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="contactname">ContactName</strong>
            <input
              type="text"
              name="ContactName"
              placeholder="ContactName"
              value={this.state.ContactName}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="Contactphone">ContactPhone</strong>
            <input
              type="text"
              name="ContactPhone"
              placeholder="ContactPhone"
              maxLength="10"
              value={this.state.ContactPhone}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="contactemail">ContactEmail</strong>
            <input
              type="text"
              name="ContactEmail"
              placeholder="ContactEmail"
              value={this.state.ContactEmail}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="notes">Notes</strong>
            <textarea
              name="Notes"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="type">Type</strong>
            <br />
            <div>
              <input
                type="radio"
                name="Type"
                value="Small Business"
                onChange={this.handleChange}
              />{" "}
              <strong>Small Business</strong>
              <br />
              <input
                type="radio"
                name="Type"
                value="Enterprise"
                onChange={this.handleChange}
                defaultChecked={false}
              />
              <strong>Enterprise</strong>
              <br />
              <input
                type="radio"
                name="Type"
                value="Enterprenuer"
                onChange={this.handleChange}
              />
              <strong>Enterprenuer</strong>
              <br />
              <br />
            </div>
            <strong id="category">Category</strong>
            <br />
            <select
              multiple={true}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="Cloths">Cloths</option>
              <option value="Toys">Toys</option>
              <option value="Groceries">Groceries</option>
              <option value="Electronics">Electronics</option>
              <option value="Digital">Digital</option>
            </select>
            <br />
            <br />
            <strong id="commissionpercentage">Commision Percentage</strong>
            <input
              type="text"
              name="CommissionPercentage"
              placeholder="Commission Percentage"
              value={this.state.CommissionPercentage}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="Activefrom">ActiveFrom</strong>
            <input
              type="date"
              name="ActiveFrom"
              placeholder="Active From"
              value={this.state.ActiveFrom}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="Logo">Logo</strong>
            <input
              type="file"
              name="Logo"
              placeholder="logo"
              value={this.state.Logo}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <strong id="criticalaccount">CriticalAccount</strong>
            <br />
            <input
              type="checkbox"
              name="CriticalAccount"
              value="YES"
              onChange={this.handleChange}
            />{" "}
            <strong>YES</strong>
            <br />
            <input
              type="checkbox"
              name="CriticalAccount"
              value="No"
              onChange={this.handleChange}
              defaultChecked={false}
            />{" "}
            <strong>NO</strong> <br />
            <br />
            <strong id="PaymentOptions">PaymentOptions</strong>
            <br />
            <input
              name="PaymentOptions"
              type="checkbox"
              value="Cash On Delivery"
              onChange={this.handleChange}
            />
            <strong>Cash On Delivery</strong>
            <br />
            <input
              type="checkbox"
              name="PaymentOptions"
              value="UPI"
              onChange={this.handleChange}
              defaultChecked={false}
            />
            <strong>UPI</strong>
            <br />
            <input
              name="PaymentOptions"
              type="checkbox"
              value="CardPayment"
              onChange={this.handleChange}
            />
            <strong>Card Payment</strong>
            <br />
            <br />
            <button>SUBMIT</button>
            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

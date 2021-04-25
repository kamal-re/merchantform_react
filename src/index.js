import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
class MyForm extends React.Component {
  render() {
    return (
      <form>
        <center>
          <h1>New Business</h1>
          <strong>Name</strong>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <br />
          <br />
          <strong>Email</strong>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <br />
          <br />
          <strong>Phone</strong>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone no"
            maxlength="10"
            required
          />
          <br />
          <br />
          <strong>Website</strong>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="Your website"
            required
          />
          <br />
          <br />
          <strong>Contact Name</strong>
          <input
            type="text"
            id="contactname"
            name="contactname"
            placeholder="Your contactname"
            required
          />
          <br />
          <br />
          <strong>Contact Phone</strong>
          <input
            type="text"
            id="contactphone"
            name="contactphone"
            placeholder="Your contactphone"
            maxlength="10"
            required
          />
          <br />
          <br />
          <strong>Contact Email</strong>
          <input
            type="text"
            id="contactemail"
            name="contactemail"
            placeholder="Your contactemail"
            required
          />
          <br />
          <br />
          <strong>Notes</strong>
          <br />
          <textarea
            type="text"
            id="notes"
            name="notes"
            placeholder="Your Notes"
            required
          ></textarea>
          <br />
          <br />
          <strong>Type</strong>
          <br />
          <input type="radio" id="type" name="type" value="smallbusiness" />
          <strong>Small Business</strong>
          <br />
          <input type="radio" id="type" name="type" value="enterprise" />
          <strong>Enterprise</strong>
          <br />
          <input type="radio" id="type" name="type" value="entrepreneur" />
          <strong>Entrepreneur</strong>
          <br />
          <br />
          <strong>Category</strong>
          <br />
          <select id="category" name="category" multiple>
            <option value="clothes" name="category">
              <strong>Clothes</strong>
            </option>
            <option value="toys" name="category">
              <strong>Toys</strong>
            </option>
            <option value="groceries" name="category">
              <strong>Groceries</strong>
            </option>
            <option value="electronics" name="category">
              <strong>Electronics</strong>
            </option>
            <option value="digital" name="category">
              <strong>Digital</strong>
            </option>
          </select>
          <br />
          <br />
          <strong>Commission Percentage</strong>
          <input
            type="text"
            id="commissionpercentage"
            name="commissionpercentage"
            placeholder="Your CommissionPercentage"
            maxlength="3"
            required
          />
          <br />
          <br />
          <strong>Active From</strong>
          <input type="date" id="activefrom" name="activefrom" required />
          <br />
          <br />
          <strong>Logo</strong>
          <input
            type="file"
            id="logo"
            name="logo"
            onchange="imageFile(event)"
            accept="image/png, image/jpeg"
            required
          />
          <br />
          <br />
          <strong>Critical Account</strong>
          <br />
          <input
            type="checkbox"
            id="criticalaccount"
            name="criticalaccount"
            value="yes"
          />
          <strong>Yes</strong>
          <br />
          <input
            type="checkbox"
            id="criticalaccount"
            name="criticalaccount"
            value="no"
          />
          <strong>No</strong>
          <br />
          <br />
          <strong>Payment Options</strong>
          <br />
          <input
            type="checkbox"
            id="paymentoptions"
            name="paymentoptions"
            value="COD"
          />
          <strong>Cash on Delivery</strong>
          <br />
          <input
            type="checkbox"
            id="paymentoptions"
            name="paymentoptions"
            value="UPI"
          />
          <strong>UPI</strong>
          <br />
          <input
            type="checkbox"
            id="paymentoptions"
            name="paymentoptions"
            value="CardPayment"
          />
          <strong>Card payment</strong>
          <br />
          <br />
          <button onclick="onFormSubmit();store()">Submit</button>
          <br />
        </center>
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

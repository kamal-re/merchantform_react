import React from "react";
import "./index.css";
class App extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.onFormSubmit();
  }
  onFormSubmit = () => {
    var formData = this.readFormData();
    var selectedRow = null;
    if (selectedRow == null) {
      this.insertNewRecord(formData);
    } else {
      this.updateRecord(formData);
    }
    this.resetForm();
  };
  function(event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  radiobutton = () => {
    var ele = document.getElementsByName("type");
    var val;
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked) val = ele[i].value;
    }

    return val;
  };
  selbutton = () => {
    var selected = [];
    for (var option of document.getElementById("category").options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }

    return selected;
  };
  radiobutton2 = () => {
    var ele = document.getElementsByName("criticalaccount");
    var val;
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked) val = ele[i].value;
    }

    return val;
  };
  checkboxbutton = () => {
    var selected = [];

    var payment = document.getElementsByName("paymentoptions");

    var val;

    for (var i = 0; i < payment.length; i++) {
      if (payment[i].checked) {
        selected.push(payment[i].value);
      }
    }
    if (selected.length > 0) {
      val = selected.join(",");
    }
    return val;
  };

  readFormData = () => {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["website"] = document.getElementById("website").value;
    formData["contactname"] = document.getElementById("contactname").value;
    formData["contactemail"] = document.getElementById("contactemail").value;
    formData["contactphone"] = document.getElementById("contactphone").value;
    formData["notes"] = document.getElementById("notes").value;
    formData["type"] = this.radiobutton();
    formData["category"] = this.selbutton();
    formData["commissionpercentage"] = document.getElementById(
      "commissionpercentage"
    ).value;
    formData["activefrom"] = document.getElementById("activefrom").value;
    formData["criticalaccount"] = this.radiobutton2();
    formData["paymentoptions"] = this.checkboxbutton();
    return formData;
  };

  insertNewRecord = (data) => {
    localStorage.setItem("merchantform", JSON.stringify(data));

    var retrievedData = JSON.parse(localStorage.getItem("merchantform"));

    var table = document.getElementById("merchantform");
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = retrievedData.name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = retrievedData.email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = retrievedData.phone;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = retrievedData.website;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = retrievedData.contactname;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = retrievedData.contactphone;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = retrievedData.contactemail;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = retrievedData.notes;
    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = retrievedData.type;
    var cell10 = newRow.insertCell(9);
    cell10.innerHTML = retrievedData.category;
    var cell11 = newRow.insertCell(10);
    cell11.innerHTML = retrievedData.commissionpercentage;
    var cell12 = newRow.insertCell(11);
    cell12.innerHTML = retrievedData.activefrom;
    var cell13 = newRow.insertCell(12);
    cell13.innerHTML = retrievedData.logo;
    var cell14 = newRow.insertCell(13);
    cell14.innerHTML = retrievedData.criticalaccount;
    var cell15 = newRow.insertCell(14);
    cell15.innerHTML = retrievedData.paymentoptions;
    var cell16 = newRow.insertCell(15);
    cell16.innerHTML = (
      <button id="edit" onClick={this.onEdit}>
        <p>EDIT</p>
      </button>
    );
  };

  resetForm = () => {
    document.getElementById("merchant").reset();
  };

  onEdit(td) {
    var selectedRow = null;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("website").value = selectedRow.cells[3].innerHTML;
    document.getElementById("contactname").value =
      selectedRow.cells[4].innerHTML;
    document.getElementById("contactphone").value =
      selectedRow.cells[5].innerHTML;
    document.getElementById("contactemail").value =
      selectedRow.cells[6].innerHTML;
    document.getElementById("notes").value = selectedRow.cells[7].innerHTML;
    document.getElementsByName("type").value = selectedRow.cells[8].innerHTML;
    document.getElementsByName("category").value =
      selectedRow.cells[9].innerHTML;
    document.getElementById("commissionpercentage").value =
      selectedRow.cells[10].innerHTML;
    document.getElementById("activefrom").value =
      selectedRow.cells[11].innerHTML;
    document.getElementById("logo").value = selectedRow.cells[12].innerHTML;
    document.getElementsByName("criticalaccount").value =
      selectedRow.cells[13].innerHTML;
    document.getElementsByName("paymentoptions").value =
      selectedRow.cells[14].innerHTML;
  }
  updateRecord = (formData) => {
    var selectedRow = null;
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.website;
    selectedRow.cells[4].innerHTML = formData.contactname;
    selectedRow.cells[5].innerHTML = formData.contactphone;
    selectedRow.cells[6].innerHTML = formData.contactemail;
    selectedRow.cells[7].innerHTML = formData.notes;
    selectedRow.cells[8].innerHTML = formData.type;
    selectedRow.cells[9].innerHTML = formData.category;
    selectedRow.cells[10].innerHTML = formData.commissionpercentage;
    selectedRow.cells[11].innerHTML = formData.activefrom;
    selectedRow.cells[12].innerHTML = formData.logo;
    selectedRow.cells[13].innerHTML = formData.criticalaccount;
    selectedRow.cells[14].innerHTML = formData.paymentoptions;
  };

  onDelete(td) {
    if (this.confirm("Are you sure to delete this record ?")) {
      var row = td.parentElement.parentElement;
      document.getElementById("merchantform").deleteRow(row.rowIndex);
      this.resetForm();
    }
  }
  render() {
    return (
      <div>
        <form id="merchant">
          <div>
            <br />
            <header>New Business</header>
            <br />
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
              maxLength="10"
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
              maxLength="10"
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
                Clothes
              </option>
              <option value="toys" name="category">
                Toys
              </option>
              <option value="groceries" name="category">
                Groceries
              </option>
              <option value="electronics" name="category">
                Electronics
              </option>
              <option value="digital" name="category">
                Digital
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
              maxLength="3"
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
              onChange="imageFile(event)"
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
            <button
              type="simpleQuery"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              Submit
            </button>
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

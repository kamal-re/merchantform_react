import "./index.css";
import React from "react";
console.clear();
const {PureComponent} = React;
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  state = {
    formState: {
      id: "",
      Name: "",
      email: "",
      phone: "",
      website: "",
      contactname: "",
      contactphone: "",
      contactemail: "",
      notes: "",
      type: "",
      category: "",
      commissionpercentage: "",
      activefrom: "",
      criticalaccount: "",
      paymentoptions: "",
      checkedItems: new Map(),
      mode: "submit",
    },
    users: [
      {
        id: 0,
        name: "",
        email: "",
        phone: "",
        website: "",
        contactname: "",
        contactphone: "",
        contactemail: "",
        notes: "",
        type: "",
        category: "",
        commissionpercentage: "",
        activefrom: "",
        criticalaccount: "",
        paymentoptions: "",
        updating: false,
      },
    ],
  };

  resetFormState = () => {
    this.setState({
      formState: {
        name: "",
        email: "",
        phone: "",
        website: "",
        contactname: "",
        contactphone: "",
        contactemail: "",
        notes: "",
        type: "",
        category: "",
        commissionpercentage: "",
        activefrom: "",
        criticalaccount: "",
        paymentoptions: "",
        mode: "submit",
        id: "",
      },
    });
  };

  onChange = (event) => {
    this.setState({
      formState: {
        ...this.state.formState,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSelectChange(e) {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({category: value});
  }
  handlecheckChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  radiobutton = (e) => {
    this.setState({
      type: e.currentTarget.value,
    });
  };
  onSubmit = (event) => {
    const {users, formState} = this.state;
    event.preventDefault();
    const name = event.target.querySelector("input[name='name']").value;
    const email = event.target.querySelector("input[name='email']").value;
    const phone = event.target.querySelector("input[name='phone']").value;
    const website = event.target.querySelector("input[name='website']").value;
    const contactname = event.target.querySelector("input[name='contactname']")
      .value;
    const contactphone = event.target.querySelector(
      "input[name='contactphone']"
    ).value;
    const contactemail = event.target.querySelector(
      "input[name='contactemail']"
    ).value;
    const notes = event.target.querySelector("input[name='notes']").value;
    const type = event.target.querySelector("input[name='type']").value;
    const category = event.target.querySelector("select[name='category']")
      .value;
    const commissionpercentage = event.target.querySelector(
      "input[name='commissionpercentage']"
    ).value;
    const activefrom = event.target.querySelector("input[name='activefrom']")
      .value;
    const criticalaccount = event.target.querySelector(
      "input[name='criticalaccount']"
    ).value;
    const paymentoptions = event.target.querySelector(
      "input[name='paymentoptions']"
    ).value;

    if (formState.mode === "submit") {
      this.setState({
        users: [
          ...this.state.users,
          {
            name,
            email,
            phone,
            website,
            contactname,
            contactphone,
            contactemail,
            notes,
            type,
            category,
            commissionpercentage,
            activefrom,
            criticalaccount,
            paymentoptions,
            updating: false,
            id: this.state.users[this.state.users.length - 1].id + 1,
          },
        ],
      });
    } else if (formState.mode === "edit") {
      const index = users.find((user) => user.id === formState.id).id;
      users[index] = {
        name,
        email,
        phone,
        website,
        contactname,
        contactphone,
        contactemail,
        notes,
        type,
        category,
        commissionpercentage,
        activefrom,
        criticalaccount,
        paymentoptions,
        updating: false,
        id: users[index].id,
      };
      this.setState({
        users: [...users],
      });
    }

    this.resetFormState();
  };

  updateUser = (key) => {
    let {users} = this.state;
    users[key].updating = true;

    this.setState({
      formState: {...this.state.users[key], mode: "edit"},
      users,
    });
  };

  deleteUser = (key) => {
    let {users} = this.state;
    users.splice(key, 1);
    this.setState({
      users: [...users],
    });
  };

  render() {
    const {users, formState} = this.state;
    return (
      <div>
        <Form
          formState={formState}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Table
          users={users}
          updateUser={this.updateUser}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

const Table = ({users = [], updateUser, deleteUser}) => {
  return (
    <div className="table">
      <div className="table-header">
        <div className="row">
          <div className="column">Name</div>
          <div className="column">Email</div>
          <div className="column">Phone</div>
          <div className="column">Website</div>
          <div className="column">ContactName</div>
          <div className="column">ContactPhone</div>
          <div className="column">ContactEmail</div>
          <div className="column">Notes</div>
          <div className="column">Type</div>
          <div className="column">Category</div>
          <div className="column">CommissionPercentage</div>
          <div className="column">ActiveFrom</div>
          <div className="column">CriticalAccount</div>
          <div className="column">PaymentOptions</div>
          <div className="column">Options</div>
        </div>
      </div>
      <div className="table-body">
        {users.map((user, key) => {
          return (
            <div className={`row ${user.updating ? "updating" : ""}`}>
              <div className="column">{user.name}</div>
              <div className="column">{user.email}</div>
              <div className="column">{user.phone}</div>
              <div className="column">{user.website}</div>
              <div className="column">{user.contactname}</div>
              <div className="column">{user.contactphone}</div>
              <div className="column">{user.contactemail}</div>
              <div className="column">{user.notes}</div>
              <div className="column">{user.type}</div>
              <div className="column">{user.category}</div>
              <div className="column">{user.commissionpercentage}</div>
              <div className="column">{user.activefrom}</div>
              <div className="column">{user.criticalaccount}</div>
              <div className="column">{user.paymentoptions}</div>
              <div className="column">
                <button className="icon" onClick={() => updateUser(key)}>
                  <i class="far fa-edit" />
                </button>
                <button className="icon">
                  <i
                    class="fas fa-user-minus"
                    onClick={() => deleteUser(key)}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Field = ({label = "", name = "", value = "", onChange}) => {
  return (
    <div className="field">
      <label htmlFOR={name}>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};
const Field3 = ({label = "", name = "", value = "", onChange}) => {
  return (
    <div className="field">
      <label htmlFOR={name}>{label}</label>
      <input type="date" name={name} value={value} onChange={onChange} />
    </div>
  );
};
const Form = ({
  formState,
  onChange,
  onSubmit,
  selected,
  handleSelectChange,
  handlecheckChange,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <header>New Business</header>
        <Field
          name="name"
          label="Name"
          value={formState.name}
          onChange={onChange}
        />
        <br />
        <Field
          name="email"
          label="Email"
          value={formState.email}
          onChange={onChange}
        />
        <br />
        <Field
          name="phone"
          label="Phone"
          value={formState.phone}
          onChange={onChange}
        />
        <br />
        <Field
          name="website"
          label="Website"
          value={formState.website}
          onChange={onChange}
        />
        <br />
        <Field
          name="contactname"
          label="Contactname"
          value={formState.contactname}
          onChange={onChange}
        />
        <br />
        <Field
          name="contactphone"
          label="Contactphone"
          value={formState.contactphone}
          onChange={onChange}
        />
        <br />
        <Field
          name="contactemail"
          label="Contactemail"
          value={formState.contactemail}
          onChange={onChange}
        />
        <br />
        <Field
          name="notes"
          label="Notes"
          value={formState.notes}
          onChange={onChange}
        />
        <br />
        <label for="type">Type</label>
        <br></br>
        <input type="radio" id="type" name="type" value="smallbusiness" />
        <label for="smallbusiness">Small Business</label>
        <br />
        <input type="radio" id="type" name="type" value="enterprise" />
        <label for="enterprise">Enterprise</label>
        <br />
        <input type="radio" id="type" name="type" value="entrepreneur" />
        <label for="entrepreneur">Entrepreneur</label>
        <br />
        <br />
        <label for="category">Category</label>
        <select
          multiple={true}
          name="category"
          value={formState.category}
          onChange={handleSelectChange}
        >
          <option value="Clothes">Clothes</option>
          <option value="Toys">Toys</option>
          <option value="Groceries">Groceries</option>
          <option value="Electronics">Electronics</option>
          <option value="Digital">Digital</option>
        </select>
        <br />
        <br />
        <Field
          name="commissionpercentage"
          label="Commissionpercentage"
          value={formState.commissionpercentage}
          onChange={onChange}
        />
        <br />
        <Field3
          name="activefrom"
          label="Activefrom"
          value={formState.activefrom}
          onChange={onChange}
        />
        <br />
        <label for="criticalaccount">Critical Account</label>
        <br />
        <input
          type="radio"
          id="criticalaccount"
          name="criticalaccount"
          value="yes"
          onChange={onChange}
        />
        <label for="yes">Yes</label>
        <br />
        <input
          type="radio"
          id="criticalaccount"
          name="criticalaccount"
          value="no"
          onChange={onChange}
        />
        <label for="no">No</label>
        <br />
        <label for="paymentoptions">Payment Options</label>
        <br />
        <input
          type="checkbox"
          id="paymentoptions"
          name="paymentoptions"
          value="COD"
          onChange={handleSelectChange}
        />
        <label for="COD">Cash on Delivery</label>
        <br></br>
        <input
          type="checkbox"
          id="paymentoptions"
          name="paymentoptions"
          value="UPI"
          onChange={handleSelectChange}
        />
        <label for="UPI">UPI</label>
        <br />
        <input
          type="checkbox"
          id="paymentoptions"
          name="paymentoptions"
          value="CardPayment"
          onChange={handleSelectChange}
        />
        <label for="cardpayment">Card payment</label>
        <br />
      </fieldset>
      <button>{formState.mode}</button>
    </form>
  );
};

export default App;

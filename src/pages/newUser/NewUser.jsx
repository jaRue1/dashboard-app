import React from 'react'
import "./newUser.css"
function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
          <div className="newUserItem">
            <label> Username </label>
            <input type="text" placeholder="Test User" />
          </div>
          <div className="newUserItem">
            <label> Full Name </label>
            <input type="text" placeholder= "John Smith" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder= "smith@admin.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password"/>
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 234 456 7890"/>
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="Miami | USA"/>
          </div>

          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser
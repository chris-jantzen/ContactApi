# ContactApi

Typescript contact api using express and mongoDB

## Routes

### http://localhost:3000/contact

#### GET -> get all contacts <br><br>

#### POST -> add a new contact<br>

```javascript
  {
    firstName: {
      type: String,
      required: 'Enter a first name'
    },
    lastName: {
      type: String,
      required: 'Enter a last name'
    },
    email: {
      type: String
    },
    company: {
      type: String
    },
    phone: {
      type: Number
    },
    created_date: {
      type: Date,
      default: Date.now
    }
  }
```

| Property  | Is Required | Description |
| --------- |:-----------:|------------ |
| firstName | true | The contact's first name. |
| lastName | true | The contact's last name. |
| email | false | The contact's email address. |
| company | false | The company the contact works for. |
| phone | false | The contact's phone number. |
| created_date | false | The date the contact card was created.<br>(Defaults to the time of the request)|

### http://localhost:3000/contact/contact:id

#### GET -> get account with an id<br><br>

#### PUT -> update account with an id<br><br>

#### DELETE -> delete account with an id
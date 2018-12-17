# ContactApi
Typescript contact api using express and mongoDB

## Routes

### /contact

#### GET -> get all contacts <br><br>

#### POST -> add a new contact with the following structure<br>

```javascript
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
```

### /contact/contact:id

#### GET -> get account with an id<br><br>

#### PUT -> update account with an id<br><br>

#### DELETE -> delete account with an id
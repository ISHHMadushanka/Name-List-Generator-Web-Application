import React from "react";

import NameListItem from "./NameListItem";

function NameList() {

    const nameList = [
    {
    id: 1,
    "name": {"title": "Miss", "first": "Jennie", "last": "Nichols" },
    "location": {"city": "Billings"},
    "email": "jennie.nichols@example.com",
    "dob": {"date": "1992-03-08T15:13:16.688Z","age": 30}, 
    "picture": {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg"}, 
    },
    {
    id: 2,
    "name": {"title": "Miss", "first": "holly", "last": "willium" },
    "location": {"city": "Billings"},
    "email": "jennie.nichols@example.com",
    "dob": {"date": "1992-03-08T15:13:16.688Z","age": 30}, 
    "picture": {"medium": "https://randomuser.me/api/portraits/med/women/35.jpg"}, 
    },
    {
    id: 3,
    "name": {"title": "Miss", "first": "seeker", "last": "alen" },
    "location": {"city": "Billings"},
    "email": "jennie.nichols@example.com",
    "dob": {"date": "1992-03-08T15:13:16.688Z","age": 30}, 
    "picture": {"medium": "https://randomuser.me/api/portraits/med/men/15.jpg"
},       
    },         
    ];

    const nameListComponent = () => {
        return nameList.map((aName) => {
            return (
            <NameListItem 
                key={aName.id}
                name={`${aName.name.first} ${aName.name.last}`}
                city={aName.location.city}
                email={aName.email}
                birthday={aName.dob.date}
                avatar={aName.picture.medium}
                />
                );
          });       
    }

    return (
        <React.Fragment>
      <h1>Name List</h1>
      <hr />
      <ul>     
      {nameListComponent()}       
      </ul>      
      </React.Fragment>
    );
}

export default NameList;
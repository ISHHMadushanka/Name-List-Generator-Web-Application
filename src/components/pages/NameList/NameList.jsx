import React, { useState, useEffect} from "react";

import NameListItem from "./NameListItem";

function NameList() {

    const [loadData, setLoadData] = useState(new Date());

    const [nameList, setNameList] = useState([
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
        "name": {"title": "Miss", "first": "Holly", "last": "Willium" },
        "location": {"city": "Washington"},
        "email": "holly.nichols@example.com",
        "dob": {"date": "1998-03-08T15:13:16.688Z","age": 22}, 
        "picture": {"medium": "https://randomuser.me/api/portraits/med/women/35.jpg"}, 
        },
        {
        id: 3,
        "name": {"title": "Miss", "first": "Seeker", "last": "Alen" },
        "location": {"city": "New York"},
        "email": "seeker.nichols@example.com",
        "dob": {"date": "1992-03-08T15:13:16.688Z","age": 36}, 
        "picture": {"medium": "https://randomuser.me/api/portraits/med/men/15.jpg"
    },       
        },         
        ]); 

     useEffect(() => {
        fetch("https://randomuser.me/api").then((response) => {
            return response.json();
        })
        .then((responseData) => {
        setNameList(nameList => [...nameList, responseData.results[0]]);
        });
     }, [loadData]);

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

    const addUserHandler = () => {
       setLoadData(new Date());
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
            <ul className="list-group">     
            {nameListComponent()}       
            </ul> 
            </div>           
      </React.Fragment>
    );
}

export default NameList;
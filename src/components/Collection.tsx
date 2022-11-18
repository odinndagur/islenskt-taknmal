import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import FlatList from 'flatlist-react'

let renderPerson = (person, idx) => {
    return (
        <li key={idx}>
          <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
        </li>
    );
  }

let renderSign = (sign, idx) => {
    return (
        <li key={idx}>
            <b>{ sign.phrase }</b>
        </li>
    )
}

function Collection() {
    const [signCollection,setSignCollection]=useState([]);
    const getData=()=>{
        fetch('../assets/takn.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setSignCollection(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    
    let { collection } = useParams()
    let people = [
        {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
        {firstName: 'John', lastName: 'Doe', info: {age: 18}},
        {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
        {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
        {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
        {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
        {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
        {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
        {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
      ]

    return (
      <>
      <h1 className="header">{collection}</h1>
      {/* <div>
          {signCollection?.map((sign, idx) => sign && (
            <div key={idx}>
                {sign.phrase}
            </div>
          ))}
        </div> */}

      <ul>
        <FlatList
            list={signCollection}
            renderItem={renderSign}
            // renderWhenEmpty={() => <div>List is empty!</div>}
            renderOnScroll
            sort={{
                by: ["phrase"],
                caseInsensitive: true
              }}
            // groupBy={phrase.charAt(0)}
          />
      </ul>
      </>
    );
            }
    

export default Collection


// renderPerson = (person, idx) => {
//     return (
//         <li key={idx}>
//           <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
//         </li>
//     );
//   }
  
//   ...
  
//   return (
//       <ul>
//           <FlatList
//             list={this.props.people}
//             renderItem={this.renderPerson}
//             renderWhenEmpty={() => <div>List is empty!</div>}
//             sortBy={["firstName", {key: "lastName", descending: true}]}
//             groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
//           />
//       </ul>
//   )
import React, { useState } from 'react';
import language from './language.json';
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import { CreateForm } from './CreateForm';

//import FormDialog from './FormDialog';
import test1 from './test1.json';
import test2 from './test2.json';
import test3 from './test3.json';


let location_array = test1.concat(test2).concat(test3)
//Чет не нашел LA, пусть будет Modesto CA
let default_city_id = 202
let current_location = location_array.find(x => x.id === default_city_id)
let countries_array = []
location_array.forEach(city => {
  if (countries_array.find(x => x.country_name == city.country.title) == undefined) {
    countries_array.push({
      country_name: city.country.title,
      cities: [city]
    })
  } else {
    countries_array.find(x => x.country_name == city.country.title).cities.push(city)
  }
})
let test=true


function App() {
  const [showResults, setShowResults] = React.useState(true)
  const [input, setInput] = useState('');
  document.querySelectorAll('.city_name').forEach(city_button => {
    if (city_button.innerHTML.includes(input)) {
    } else {
      console.log(city_button)
    }
  })

  const onClick = (event) => {
    if(test){
      setShowResults(null)
      test=false
    }else{
      setShowResults(true)
      test=true
    }
    console.log(event)
  }
  

  return (

    <body>
      <header></header>
      <main>
        <h1>{language.form_name}</h1>
        <div>{ReactHtmlParser(language.form_description)}</div>
        <div>
          <h5>Find city</h5>
          <input type="text" value={input} onInput={e => setInput(e.target.value)} onClick={onClick}></input>

          {showResults ? <div className="test">1</div> : true}
          {showResults ? <div className="test1">2</div> : true}
          

          <div className="all_counties_block">
            {
              countries_array.map(country => {
                return (

                  <div className="country_block">
                    <h3>{country.country_name}</h3>
                    <div>
                      {
                        country.cities.map(city => {
                          if (city.id == default_city_id) {
                            return (
                              <button className="city_name chosen_city" onClick={() => chose_city(city.name)}>{city.name}</button>
                            )
                          } else {
                            return (
                              <button className="city_name" onClick={() => chose_city(city.name)}>{city.name}</button>
                            )
                          }
                        })
                      }
                    </div>
                  </div>
                )

              })
            }
          </div>
        </div>
        <div className="inputs_block_elemnt">
          <label>{language.city_block_name}</label>
          <button>{current_location.name}</button>
          <button>{language.edit_city_button}</button>
        </div>
        {CreateForm()}

      </main>
    </body>

  );


}



function chose_city(element_name) {
  document.querySelectorAll('.city_name').forEach(city_button => {
    if (Array.from(city_button.classList).includes('chosen_city')) {
      city_button.classList.remove("chosen_city")
    }
    if (city_button.innerHTML == element_name) {
      city_button.classList.add("chosen_city")
    }
  })
}




export default App;

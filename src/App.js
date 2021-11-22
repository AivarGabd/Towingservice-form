
import language from './language.json';
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



function App() {
  return (
    <body>
      <header></header>
      <main>
        <h1>{language.form_name}</h1>
        <div>{ReactHtmlParser(language.form_description)}</div>
        <form className="inputs_block">

          <div className="inputs_block_elemnt">
            <label>{language.city_block_name}</label>
            <button>{language.current_city_name}</button><button>{language.edit_city_button}</button>
          </div>

          <div className="inputs_block_elemnt">
            <label>{language.input_company_name}</label>
            <input type="text" name="name" />
          </div>

          <div className="inputs_block_elemnt">
            <label>{language.input_phone}</label>
            <PhoneInput
              country={'us'}
            />
          </div>

          <div className="inputs_block_elemnt">
            <label>{language.towing_vehicle_type}</label>
            <input type="text" name="name" placeholder={language.expls_number} />
          </div>

          <div className="inputs_block_elemnt">
            <label>{language.towing_vehicle_type}</label>
          </div>

          {language.main_car_data.map(e => <div className="inputs_block_elemnt"><label>{e.name}</label><input type="text" name="name" placeholder={language.expls_number} /></div>)}

          <div className="inputs_block_elemnt">
            <label>{language.input_photos}</label>
            <button>{language.input_photos_txt}</button>
          </div>

          <div className="inputs_block_elemnt">
            <label>{language.additional_information}</label>
            <textarea>{language.text}</textarea>
          </div>

          <div className="inputs_block_elemnt">
            <h1>{language.rates_block_name}</h1>
            <table className="table">
            </table>
            {language.rates_array.map((element) => {
              return (
                <div className="element_block">
                  <div className="element_block_name">{element.name}</div>
                  {
                    element.options.map(item => {
                      return (
                      <div className="options_table">
                        <label>{item}</label>
                        <input type="text" name="name" placeholder={language.expls_number} />
                      </div>)
                    })
                  }
                </div>
              )
            }
            )}
          </div>

          <div className="inputs_block_elemnt array">
            <h1>{language.extra_service_block_name}</h1>
            {language.extra_service_array.map((element) => <div className="array_element"><label>{element}</label> <input type="text" name="name" /></div>)}
          </div>

          <div className="inputs_block_elemnt array">
            <h1>{language.contact_person}</h1>
            <div className="array_element"><label>{language.contact_person}</label> <input type="text" name="name" /></div>
            <div><label>{language.contact_phone}</label> <PhoneInput country={'us'} /></div>
            <div className="array_element"><label>{language.email}</label> <input type="text" name="name" /></div>
          </div>


        </form>
      </main>
    </body>
  );
}

export default App;

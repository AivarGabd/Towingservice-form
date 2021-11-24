import './App.css';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import language from './language.json';
import test1 from './test1.json';
import test2 from './test2.json';
import test3 from './test3.json';




let location_array = test1.concat(test2).concat(test3)
//Чет не нашел LA, пусть будет Modesto CA
let current_location = location_array.find(x => x.id === 202)


export function CreateForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    company_name: '',
                    phone: '',
                    capacity: '',
                    model: '',
                    equipment_brand: '',
                    address: '',
                    additional_information: '',
                    rates: {
                        light: {
                            fee: "50",
                            per_mile: "3"
                        },
                        medium: {
                            fee: "80",
                            per_mile: "4"
                        },
                        heavy: {
                            fee: "100",
                            per_mile: "5"
                        },
                        miles: "1"
                    },
                    extra: {
                        winching: "50",
                        night_charge: "50",
                        labour: "50",
                        lockout: "50",
                        tire_change: "50",
                        jump_start: "50",
                        fuel_delivery: "50"
                    },
                    contact_info: {
                        contact_person: '',
                        contact_phone: '',
                        email: ''
                    }
                }}
                onSubmit={(values, actions) => {
                    axios.post('https://jsonplaceholder.typicode.com/posts', {
                        values
                    })
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });



                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>


                        <div className="inputs_block_elemnt">
                            <label>{language.input_company_name}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.company_name}
                                name="company_name"
                            />
                        </div>


                        <div className="inputs_block_elemnt">
                            <label>{language.input_phone}</label>
                            <PhoneInput
                                country={current_location.country.code}
                                //value={current_location.country.phone_full_mask} 
                                onChange={phone => props.values.phone = "+" + phone}
                                value={props.values.phone}
                                name="phone"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.input_hours}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.input_hours}
                                name="input_hours"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.capacity}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.capacity}
                                name="capacity"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.model}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.model}
                                name="model"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.equipment_brand}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.equipment_brand}
                                name="equipment_brand"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.address}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.address}
                                name="address"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.input_photos}</label>
                        </div>

                        <div className="inputs_block_elemnt">
                            <label>{language.additional_information}</label>
                            <textarea
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.additional_information}
                                name="additional_information"
                            />
                        </div>

                        <div className="inputs_block_elemnt">
                            <h1>{language.rates_block_name}</h1>

                            <div className="element_block">
                                <div>{language.light_duty}</div>
                                <div className="options_table">
                                    <label>{language.pick_up_fee}</label>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        placeholder={props.values.rates.light.fee}
                                        name="rates.light.fee"
                                    />
                                </div>
                                <div className="options_table">
                                    <label>{language.price_per_mile}</label>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        placeholder={props.values.rates.light.per_mile}
                                        name="rates.light.per_mile"
                                    />
                                </div>
                            </div>

                            <div className="element_block">
                                <div>{language.medium_duty}</div>
                                <div className="options_table">
                                    <label>{language.pick_up_fee}</label>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        placeholder={props.values.rates.medium.fee}
                                        name="rates.medium.fee"
                                    />
                                </div>
                                <div className="options_table">
                                    <label>{language.price_per_mile}</label>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        placeholder={props.values.rates.medium.per_mile}
                                        name="rates.medium.per_mile"
                                    />
                                </div>

                            </div>

                            <div className="element_block">
                                <div>{language.heavy_duty}</div>
                                <div className="options_table">
                                    <label>{language.pick_up_fee}</label>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        placeholder={props.values.rates.heavy.fee}
                                        name="rates.heavy.fee"
                                    />
                                </div>
                                <div className="options_table">
                                    <label>{language.price_per_mile}</label>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        placeholder={props.values.rates.heavy.per_mile}
                                        name="rates.heavy.per_mile"
                                    />
                                </div>
                            </div>

                            <label>{language.miles_included}</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                placeholder={props.values.rates.miles}
                                name="rates.miles"
                            />
                        </div>


                        <div className="inputs_block_elemnt">
                            <h1>{language.extra_service_block_name}</h1>
                            <div className="element_block">
                                <label>{language.winching}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.winching}
                                    name="extra.winching"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.night_charge}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.night_charge}
                                    name="extra.night_charge"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.labour}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.labour}
                                    name="extra.labour"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.lockout}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.lockout}
                                    name="extra.lockout"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.tire_change}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.tire_change}
                                    name="extra.tire_change"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.jump_start}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.jump_start}
                                    name="extra.jump_start"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.fuel_delivery}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.extra.fuel_delivery}
                                    name="extra.fuel_delivery"
                                />
                            </div>
                        </div>

                        <div className="inputs_block_elemnt">
                            <h1>{language.contact_person_block_name}</h1>
                            <div className="element_block">
                                <label>{language.contact_person}</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.contact_info.contact_person}
                                    name="contact_info.contact_person"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.contact_phone}</label>

                                <PhoneInput
                                    country={current_location.country.code}
                                    //value={current_location.country.phone_full_mask} 
                                    onChange={phone => props.values.contact_info.contact_phone = "+" + phone}
                                    value={props.values.contact_info.contact_phone}
                                    name="contact_info.contact_phone"
                                />
                            </div>
                            <div className="element_block">
                                <label>{language.email}</label>
                                <input
                                    type="email"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    placeholder={props.values.contact_info.email}
                                    name="contact_info.email"
                                />
                            </div>
                        </div>


                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}



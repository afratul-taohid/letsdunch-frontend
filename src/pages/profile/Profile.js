import React, { useState } from 'react';
import './Profile.css';
import ProfileImage from '../../img/profile.jpg';
import EditIcon from '@material-ui/icons/Edit';
import { Link, Redirect } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [selectGender, setSelectGender] = useState([]);
  const [selectAge, setSelectAge] = useState([]);
  const [selectCuisines, setSelectCuisines] = useState([]);
  const [selectLove, setSelectLove] = useState([]);

  const selectedItems = (data, arrayItem, itemSetFunction) => {
    const item = document.querySelector(`.${data}`);
    item.classList.toggle('select');

    const hasItem = arrayItem.find((itm) => itm === data);

    if (hasItem) {
      const remainingItem = arrayItem.filter((itm) => itm !== hasItem);
      itemSetFunction(remainingItem);
    } else {
      const newItem = [...arrayItem, data];
      itemSetFunction(newItem);
    }
  };

  const getGender = (data) => {
    selectedItems(data, selectGender, setSelectGender);
  };

  const getAge = (data) => {
    selectedItems(data, selectAge, setSelectAge);
  };

  const getCuisines = (data) => {
    selectedItems(data, selectCuisines, setSelectCuisines);
  };

  const getLove = (data) => {
    selectedItems(data, selectLove, setSelectLove);
  };

  const auth = useSelector((state) => state.auth);
 
  if (auth.isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12 my-5">
            <h3 className="profile__name">Welcome {auth.user?.fname}!</h3>

            <div className="profile__image--box">
              <img src={ProfileImage} alt="" className="profile__image" />
              <div className="edit-box">
                <label htmlFor="image">
                  <EditIcon className="image-edit" />
                </label>
                <input
                  className="file-input"
                  type="file"
                  name="image"
                  id="image"
                />
              </div>
            </div>

            <div className="form-box">
              <form className="profile-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={auth.user?.fname}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={auth.user?.lname}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={auth.user?.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select
                        id="country"
                        name="country"
                        className="form-control"
                      >
                        <option value="null">-- Select your country --</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">
                          Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">
                          South Georgia and The South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        className="form-control"
                        type="text"
                        name="city"
                        id="city"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="postal-code">Postal Code</label>
                      <InputGroup className="mb-2">
                        <FormControl id="inlineFormInputGroup" type="number" />
                        <InputGroup.Append style={{ cursor: 'pointer' }}>
                          <InputGroup.Text
                            style={{ fontWeight: 500 }}
                            className="text-primary"
                          >
                            Find
                          </InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="inlineFormInputGroup">Phone</label>
                      <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                          <InputGroup.Text>+91</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup" type="number" />
                      </InputGroup>
                    </div>
                  </div>
                </div>
                <div className="row my-3 profile__submit--button1">
                  <div className="col-md-12 d-flex align-item-center justify-content-between">
                    <div className="skip-section">
                      <Link to="#">Skip and Lets Dunch &rarr; </Link>
                    </div>
                    <div className="button-section">
                      <button
                        type="submit"
                        className="verify-button submit--button"
                      >
                        Continue to Dunch
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="select-box-right">
              <h3 className="profile__right__title py-5">
                I want to Dunch with...
              </h3>
              <div className="gender-box my-4">
                <p className="box-title">Gender</p>
                <span
                  onClick={() => getGender('male')}
                  className="select-box male"
                >
                  Male
                </span>
                <span
                  onClick={() => getGender('female')}
                  className="select-box female"
                >
                  Female
                </span>
              </div>
              <div className="age-box my-4">
                <p className="box-title">Age Group</p>
                <div className="box-row ">
                  <span
                    onClick={() => getAge('twenty')}
                    className="select-box twenty"
                  >
                    20 - 25
                  </span>
                  <span
                    onClick={() => getAge('twenty-six')}
                    className="select-box twenty-six"
                  >
                    26 - 30
                  </span>
                  <span
                    onClick={() => getAge('thirty-one')}
                    className="select-box thirty-one"
                  >
                    31 - 35
                  </span>
                </div>

                <div className="box-row ">
                  <span
                    onClick={() => getAge('thirty-six')}
                    className="select-box thirty-six"
                  >
                    36 - 40
                  </span>
                  <span
                    onClick={() => getAge('forty-one')}
                    className="select-box forty-one"
                  >
                    41 - 45
                  </span>
                  <span
                    onClick={() => getAge('forty-six')}
                    className="select-box forty-six"
                  >
                    46 - 50
                  </span>
                  <span
                    onClick={() => getAge('fifty')}
                    className="select-box fifty"
                  >
                    50+
                  </span>
                </div>
              </div>
              <div className="cuisines my-4">
                <p className="box-title">Cuisines</p>
                <div className="box-row ">
                  <span
                    onClick={() => getCuisines('italian')}
                    className="select-box italian"
                  >
                    Italian
                  </span>
                  <span
                    onClick={() => getCuisines('indian')}
                    className="select-box indian"
                  >
                    Indian
                  </span>
                  <span
                    onClick={() => getCuisines('mexican')}
                    className="select-box mexican"
                  >
                    Mexican
                  </span>
                </div>
                <div className="box-row ">
                  <span
                    onClick={() => getCuisines('turkish')}
                    className="select-box turkish"
                  >
                    Turkish
                  </span>
                  <span
                    onClick={() => getCuisines('thai')}
                    className="select-box thai"
                  >
                    Thai
                  </span>
                  <span
                    onClick={() => getCuisines('japanese')}
                    className="select-box japanese"
                  >
                    Japanese
                  </span>
                </div>
                <div className="box-row ">
                  <span
                    onClick={() => getCuisines('greek')}
                    className="select-box greek"
                  >
                    Greek
                  </span>
                  <span
                    onClick={() => getCuisines('chinese')}
                    className="select-box chinese"
                  >
                    Chinese
                  </span>
                  <span
                    onClick={() => getCuisines('french')}
                    className="select-box french"
                  >
                    French
                  </span>
                </div>
              </div>

              <div className="loving my-4">
                <p className="box-title">I love..</p>
                <div className="box-row ">
                  <span
                    onClick={() => getLove('cooking')}
                    className="select-box cooking"
                  >
                    Cooking
                  </span>
                  <span
                    onClick={() => getLove('writing')}
                    className="select-box writing"
                  >
                    Writing
                  </span>
                  <span
                    onClick={() => getLove('dancing')}
                    className="select-box dancing"
                  >
                    Dancing
                  </span>
                </div>
                <div className="box-row ">
                  <span
                    onClick={() => getLove('diving')}
                    className="select-box diving"
                  >
                    Diving
                  </span>
                  <span
                    onClick={() => getLove('gardening')}
                    className="select-box gardening"
                  >
                    Gardening
                  </span>
                  <span
                    onClick={() => getLove('painting')}
                    className="select-box painting"
                  >
                    Painting
                  </span>
                </div>
                <div className="box-row ">
                  <span
                    onClick={() => getLove('pottery')}
                    className="select-box pottery"
                  >
                    Pottery
                  </span>
                  <span
                    onClick={() => getLove('photography')}
                    className="select-box photography"
                  >
                    Photography
                  </span>
                  <span
                    onClick={() => getLove('long-drive')}
                    className="select-box long-drive"
                  >
                    Long Drive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row profile__submit--button2 my-3">
          <div className="col-md-12 button2 d-flex align-item-center justify-content-between">
            <div className="skip-section">
              <Link to="#">Skip and Lets Dunch &rarr; </Link>
            </div>
            <div className="button-section">
              <button type="submit" className="verify-button submit--button">
                Continue to Dunch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

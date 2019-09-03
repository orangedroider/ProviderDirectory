import React from 'react';

function Header() {
    return (
        <React.Fragment>
    <div>
    <h1 className="HeaderTitleText">Find a Provider</h1>
      <p className="StaticTextPara">
        Have you had trouble finding a dentist for your child? Use this Dentist
        Locator to find a dentist in your community who sees children and
        accepts Medicaid and CHIP.
      </p>
      <p className="StaticTextPara">Finding a dentist is easy:</p>
      <p className="StaticTextPara">
        1. Select your state from the drop-down menu.
      </p>
      <p className="StaticTextPara">
        2. Select your child's dental plan from the drop-down menu.
      </p>
      <p className="StaticTextPara">
        3. Enter a street address or zip code close to where you live or work.
      </p>
      <p className="StaticTextPara">
        Choose a distance from that street address or zip code that you wish to
        search within.
      </p>
      <p className="StaticTextPara">
        If you want to look for a specialty dentist, such as an oral surgeon or
        dentists who speak your language, expand the Additional Search Criteria
        and select options that fit your needs.
      </p>
       </div>
       </React.Fragment>
    );
  }
  
  export default Header;
import React from 'react';
import pic from '../Pinterest.png';

function HomeComponent() {
  return (
    <div className="extension">
      <div className="header">
        <h4 style={{ paddingTop: 10 }}>FOXLINT</h4>
      </div>
      <div className="websiteName">
        <div className="website">
          <img src={pic} className="App-logo" alt="logo" width={50} height={30} />
          <h5 style={{ display: 'inline-block' }}>
            <b>pinterest.com</b>
          </h5>
        </div>
        <a style={{ marginLeft: 40 }} href="http://localhost:3000">
          Privacy
        </a>
      </div>
      <div className="header">
        <h4 style={{ paddingTop: 10 }}>PRIVACY REPORT</h4>
      </div>
      <div className="report">
        <div className="rep">
          <h4>PIL Data Collected</h4>
          <div className="successBadge">4/5</div>
        </div>
        <div className="rep">
          <h4>Privacy Data Collected</h4>
          <div className="dangerBadge">4/5</div>
        </div>
        <div className="rep">
          <h4>Location Tracking</h4>
          <div className="successBadge">4/5</div>
        </div>
        <div className="rep">
          <h4>Targeted Advertising</h4>
          <div className="okBadge">4/5</div>
        </div>
        <div className="rep">
          <h4>Data Retention</h4>
          <div className="successBadge">4/5</div>
        </div>
        <div className="rep">
          <h4>Data Sharing</h4>
          <div className="dangerBadge">4/5</div>
        </div>
      </div>
      <div className="footer" style={{ fontSize: '1.1em' }}>
        <h6>Privacy Policy was last updated on 1st March 2022</h6>
      </div>
    </div>
  );
}

export default HomeComponent;

import React from 'react';
import pic from '../Pinterest.png';
import FoxlintData from '../sample.json';

function colorCode(score) {
  if (score >= 5) return 'excellentBadge';
  else if (score >= 4 ) return 'goodBadge';
  else if (score >= 3 ) return 'okBadge';
  else if (score >= 2) return 'badBadge';
  else if (score >= 1) return 'worstBadge';
}

function printData(value) {
  const num = Number(value)/20;
  return parseFloat(num.toFixed(2));
}

function ScoreItem({ label, value }) {
  const score = printData(value);
  return (
    <div className="rep">
      <h4>{label}</h4>
      <div className={colorCode(score)}>{score}/5</div>
    </div>
  );
}

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
            <b>{FoxlintData.domain_name}</b>
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
        <ScoreItem label="PII Data Collected" value={FoxlintData.pii_data} />
        <ScoreItem label="Privacy Data Collected" value={FoxlintData.privacy_data} />
        <ScoreItem label="Location Tracking" value={FoxlintData.location_tracking} />
        <ScoreItem label="Targeted Advertising" value={FoxlintData.targeted_advertising} />
        <ScoreItem label="Data Retention" value={FoxlintData.data_retention} />
        <ScoreItem label="Data Sharing" value={FoxlintData.data_sharing} />
      </div>
      <div className="footer" style={{ fontSize: '1.1em' }}>
        <h6>Privacy Policy was last updated on 1st March 2022</h6>
      </div>
    </div>
  );
}

export default HomeComponent;

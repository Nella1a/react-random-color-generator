/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

// import reactDom from 'react-dom';

//function return random colors
function randomColorOutput(hueI = 'undefined', lum = 'undefined') {
  return randomColor({
    hue: hueI,
    luminosity: lum,
  });
}

//css divs
const divStyle = css`
  box-sizing: border-box;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 10%;
`;

//css for all divs
const generalDivStyle = css`
  width: 400px;
  height: 80px;
  text-align: center;
`;

//css for ul & li
const ulStyle = css`
  list-style: none;
`;

//css for li
const liStyle = css`
  text-align: right;
`;

//css heading
const headerOneStyle = css`
  width: 300px;
  height: 30px;
  margin: 50px auto;
  color: #1c449b;
  font-weight: 900px;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;
  background-color: #001e3c;
  color: #fff;
  border-radius: 5px;
`;

//css form
const formStyle = css`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: left;
`;

//css input-elements
const optionStyle = css`
  box-sizing: border-box;
  width: 150px;
  height: 50px;
  margin-bottom: 20px;
  margin-left: 40px;
  border: 2px solid #1976d2;
  font-size: 1rem;
  text-align: center;
`;

//css button generate
const buttonStyle = css`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  width: 150px;
  height: 50px;
  font-weight: 800;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  background-color: #001e3c;
  color: #fff;
  border: 0px solid #000;
`;

//Show color in a box based on hui,lumi, width , height or none if not selected
export function ChangeBackground(props) {
  console.log(props.name);
  console.log(props.height, props.width);
  return (
    props.name && (
      <div
        style={{
          backgroundColor: props.name,
          width: props.height,
          height: props.width,
          color: 'black',
          // marginLeft: '100px',
          textAlign: 'center',
          paddingTop: '2rem',
          fontWeight: '300',
          fontSize: '14px',
        }}
      >
        Generated color: {props.name}
      </div>
    )
  );
}

//eventhandler on button
export function RandomColors(props) {
  const [changeColor, setCount] = useState('');
  return (
    <>
      <div css={generalDivStyle}>
        <button
          css={buttonStyle}
          onClick={() =>
            setCount(randomColorOutput(props.setHui, props.setLum))
          }
        >
          generate
        </button>
      </div>
      <ChangeBackground
        name={changeColor}
        width={props.height}
        height={props.width}
      />
    </>
  );
}

//save and track input (hui, lumi, width, height)
export function ChangeHuiAndLum() {
  const [valueHui, setValueHui] = useState('');
  const [valueLumi, setValueLumi] = useState('');
  const [valueWidth, setValueWidth] = useState('');
  const [valueHeight, setValueHeight] = useState('');

  return (
    <div>
      <form css={formStyle}>
        <ul css={ulStyle}>
          <li css={liStyle}>
            <label> Set Hui: </label>
            <select
              css={optionStyle}
              name="hui"
              id="hui-select"
              value={valueHui}
              onChange={(event) => setValueHui(event.target.value)}
            >
              <option value="undefined">select hui</option>
              <option value="red">red</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
            </select>
          </li>

          <li css={liStyle}>
            <label>Set Lumi:</label>
            <select
              css={optionStyle}
              name="lumi"
              id="lumi-select"
              value={valueLumi}
              onChange={(event) => setValueLumi(event.target.value)}
            >
              <option value="undefined">select lum</option>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </li>

          <li css={liStyle}>
            <label id="width-select">Set Width:</label>
            <input
              css={optionStyle}
              value={valueWidth}
              onChange={(event) => setValueWidth(event.target.value)}
            />
          </li>
          <li css={liStyle}>
            <label>Set Height: </label>
            <input
              css={optionStyle}
              value={valueHeight}
              onChange={(event) => setValueHeight(event.target.value)}
            />
          </li>
        </ul>
      </form>

      <RandomColors
        setLum={valueLumi}
        setHui={valueHui}
        height={valueHeight}
        width={valueWidth}
      />
      {/* <ChangeBackground height={valueHeight} width={valueWidth} /> */}
    </div>
  );
}

//parent component
function App() {
  return (
    <>
      <h1 css={headerOneStyle}>radom color generator</h1>
      <div css={divStyle}>
        <ChangeHuiAndLum />
      </div>
    </>
  );
}

export default App;

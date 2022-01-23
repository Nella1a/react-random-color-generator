import { css } from '@emotion/react';
import randomColor from 'randomcolor';
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

// css divs
const divStyle = css`
  box-sizing: border-box;
  margin: 0 auto;
  width: 600px;
  height: 350px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 2%;
  border: 4px solid #001e3c;
`;

// css generated div
const divOuput = css`
  color: 'black';
  text-align: 'center';
  font-weight: '600';
  font-size: '14px';
`;

// css heading
const headerOneStyle = css`
  width: 400px;
  height: 30px;
  margin: 10px auto;
  color: #001e3c;
  font-weight: 900px;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 24px;
  background-color: #fff;
  border-radius: 5px;
`;

// css form
const formStyle = css`
  width: inherit;
  margin: 10px 8px;
`;

// css for ul
const ulStyle = css`
  width: inherit;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: flex-end;
`;

// css for li
const liStyle = css`
  text-align: right;
`;

// css input-elements
const optionStyle = css`
  box-sizing: border-box;
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
  margin-left: 40px;
  border: 2px solid #001e3c;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;

//  css button generate
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
  background-color: #ff6100;
  color: #fff;
  border: 0px solid #000;
  &:hover {
    background-color: #ff6100;
    color: #001e3c;
    border: 2px solid #ff6100;
  }
`;

// Show color in a box based on hue,lume, width, height or none if not selected
export function ChangeBackground(props) {
  return (
    props.generateColor && (
      <div
        css={{ divOuput }}
        style={{
          backgroundColor: props.generateColor,
          width: props.height,
          height: props.width,
          position: 'relative',
          top: '50px',
          left: '0px',
        }}
      >
        Generated color: {props.generateColor}
      </div>
    )
  );
}

// eventhandler on button
export function RandomColors(props) {
  const [changeColor, setCount] = useState('');
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          css={buttonStyle}
          onClick={() => setCount(randomColor(props.setHue, props.setLum))}
        >
          Generate
        </button>
      </div>
      <ChangeBackground
        generateColor={changeColor}
        width={props.width + 'px'}
        height={props.height + 'px'}
      />
    </>
  );
}

// save and track input (hue, lumi, width, height)
export function ChangeHueAndLum() {
  const [valueHue, setValueHue] = useState('');
  const [valueLumi, setValueLumi] = useState('');
  const [valueWidth, setValueWidth] = useState('');
  const [valueHeight, setValueHeight] = useState('');

  return (
    <div style={{ margin: '2px' }}>
      <form css={formStyle}>
        <ul css={ulStyle}>
          <li css={liStyle}>
            <label htmlFor="hui-select"> Select Hue: </label>
            <select
              css={optionStyle}
              name="hui"
              id="hui-select"
              value={valueHue}
              onChange={(event) => setValueHue(event.target.value)}
            >
              <option value="undefined">-- select --</option>
              <option value="red">red</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
            </select>
          </li>

          <li css={liStyle}>
            <label htmlFor="lumi-select">Select Luminosity:</label>
            <select
              css={optionStyle}
              name="lumi"
              id="lumi-select"
              value={valueLumi}
              onChange={(event) => setValueLumi(event.target.value)}
            >
              <option value="undefined">-- select --</option>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </li>

          <li css={liStyle}>
            <label htmlFor="width-select">Set Width:</label>
            <input
              css={optionStyle}
              value={valueWidth}
              type="number"
              min="0"
              onChange={(event) => setValueWidth(event.target.value)}
            />
          </li>
          <li css={liStyle}>
            <label htmlFor="height">Set Height: </label>
            <input
              id="height"
              css={optionStyle}
              value={valueHeight}
              type="number"
              min="0"
              onChange={(event) => setValueHeight(event.target.value)}
            />
          </li>
        </ul>
      </form>

      <RandomColors
        setLum={valueLumi}
        setHue={valueHue}
        height={valueHeight}
        width={valueWidth}
      />
    </div>
  );
}

function App() {
  return (
    <>
      <h1 css={headerOneStyle}>random color generator</h1>
      <div css={divStyle}>
        <ChangeHueAndLum />
      </div>
    </>
  );
}

export default App;

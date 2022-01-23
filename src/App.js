import { css } from '@emotion/react';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

const Fragment = styled.body`
  max-width: 1400px;
  height: auto;
  box-sizing: border-box;
  margin: 0;
`;

// css divs
const Section = styled.section`
  /* box-sizing: border-box; */
  margin: 0 auto;
  width: 600px;
  height: 360px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 2%;
  border: 4px solid #001e3c;
`;

// css div box color
const Div = styled.div`
  color: 'black';
  text-align: 'center';
  font-weight: '600';
  font-size: '14px';
`;

// css heading
const Heading = styled.h1`
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
  margin: 10px 8px;
`;

// css for ul
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: flex-end;
`;

// css li
const Li = styled.li`
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

function App() {
  const [valueHue, setValueHue] = useState('undefined');
  const [valueLumi, setValueLumi] = useState('undefined');
  const [valueWidth, setValueWidth] = useState('');
  const [valueHeight, setValueHeight] = useState('');
  const [changeColor, setCount] = useState('');

  return (
    <Fragment>
      <Heading>random color generator</Heading>
      <Section>
        <div style={{ margin: '2px' }}>
          <form css={formStyle} onSubmit={(event) => event.preventDefault()}>
            <Ul>
              <Li>
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
              </Li>

              <Li>
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
              </Li>

              <Li>
                <label htmlFor="width-select">Set Width:</label>
                <input
                  css={optionStyle}
                  value={valueWidth}
                  type="number"
                  min="0"
                  onChange={(event) => setValueWidth(event.target.value)}
                />
              </Li>
              <Li>
                <label htmlFor="height">Set Height: </label>
                <input
                  id="height"
                  css={optionStyle}
                  value={valueHeight}
                  type="number"
                  min="0"
                  onChange={(event) => setValueHeight(event.target.value)}
                />
              </Li>
              <Li>
                <button
                  css={buttonStyle}
                  onClick={() =>
                    setCount(
                      randomColor({ hue: valueHue, luminosity: valueLumi }),
                    )
                  }
                >
                  Generate
                </button>
              </Li>
            </Ul>
          </form>
          {changeColor && (
            <Div
              style={{
                backgroundColor: changeColor,
                width: valueWidth + 'px',
                height: valueHeight + 'px',
                position: 'relative',
                top: '50px',
                left: '0px',
              }}
            >
              Generated Color: {changeColor}
            </Div>
          )}
        </div>
      </Section>
    </Fragment>
  );
}

export default App;

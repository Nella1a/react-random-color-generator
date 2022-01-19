import randomColor from 'randomcolor';
import App from './App.js';

export default button () {

  randomColorOutput(hueI = 'undefined', lum = 'undefined') {
      return randomColor({
        hue: hueI,
        luminosity: lum,
      });
    }


        colorOutput = randomColor();


return (



)

}


// import AsciiTable from 'ascii-table';
// import chalk from 'chalk';
// import randomColor from 'randomcolor';

// // function generates random color based on requests
// function randomColorOutput(hueI = 'undefined', lum = 'undefined') {
//   return randomColor({
//     hue: hueI,
//     luminosity: lum,
//   });
// }

// // requests for color output
// if (process.argv.length === 2) {
//   colorOutput = randomColor();
// } else if (process.argv.length === 3) {
//   colorOutput = randomColorOutput(process.argv[2]);
// } else if (process.argv.length === 4) {
//   colorOutput = randomColorOutput(process.argv[2], process.argv[3]);
// }

// // ouput to terminal
// const table = new AsciiTable('');
// table
//   .setBorder(' ')
//   .addRow('########################')
//   .addRow('########################')
//   .addRow('########################')
//   .addRow(`#####              #####`)
//   .addRow(`#####    ${colorOutput}   #####`)
//   .addRow(`#####              #####`)
//   .addRow('########################')
//   .addRow('########################')
//   .addRow('########################');

// console.log(chalk.hex(colorOutput)(table.toString()));

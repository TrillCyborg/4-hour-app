import {
  deepPurple500,
  deepPurple700,
  // deepPurpleA700,
  grey400,
  orangeA200,
  grey100,
  grey500,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: grey400,
    accent1Color: orangeA200,
    accent2Color: grey100,
    accent3Color: grey500,
  },
  // appBar: {
  //   height: 50,
  // },
});

export default muiTheme;

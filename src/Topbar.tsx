import MuiAppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<any>(({ theme, open, customTheme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: '50px!important',
  // background: `${rgba(customTheme?.palette?.primary?.main, 0.1)}`,
  background:
    'var(--ds-border, linear-gradient(to right,rgba(27,125,86,0.1) 0px, rgba(27,125,86,0.1) 1px, rgba(27,125,86,0.1) 1px, rgba(0, 0, 0, 0) 100% ))',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <img
            width={'25px'}
            height={'35px'}
            src={require('./assets/favicon.ico')}
            style={{
              aspectRatio: 3 / 2,
              objectFit: 'contain',
              mixBlendMode: 'color-burn',
            }}
          ></img>

          <img
            src={require('./assets/logo.jpg')}
            width={'150px'}
            height={'50px'}
            alt={'logo'}
            loading='lazy'
            style={{
              aspectRatio: 3 / 2,
              objectFit: 'contain',
              mixBlendMode: 'color-burn',
            }}
          />

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

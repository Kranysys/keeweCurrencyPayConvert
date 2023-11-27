import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import CurrencyExchangeIcon from '@mui/icons-material/MonetizationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    Boolean(localStorage.getItem('jwtToken'))
  );

  const isSelected = path => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App de Paiement et Conversion
        </Typography>
        <Button
          aria-label="account of current user"
          startIcon={
            <AccountCircleIcon
              sx={{
                color: isLoggedIn ? 'inherit' : 'red',
              }}
            />
          }
          sx={{
            mr: 2,
            color: isLoggedIn ? 'inherit' : 'red',
          }}
          onClick={() => {
            if (isLoggedIn) {
              localStorage.removeItem('jwtToken');
            } else {
              localStorage.setItem(
                'jwtToken',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ovrsAPN6f1lG1iUK8Tbs_oN8u7ObJxGjcUyFl0BTbAs'
              );
            }
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          {isLoggedIn ? 'Authentifié' : 'Non authentifié'}
        </Button>

        <div className="link-separator" />
        <Button
          color="inherit"
          component={Link}
          to="/"
          startIcon={<PaymentIcon />}
          sx={{
            backgroundColor: isSelected('/')
              ? 'rgba(255, 255, 255, 0.12)'
              : 'inherit',
          }}
        >
          Paiements
        </Button>
        <div className="link-separator" />
        <Button
          color="inherit"
          component={Link}
          to="/convert"
          startIcon={<CurrencyExchangeIcon />}
          sx={{
            backgroundColor: isSelected('/convert')
              ? 'rgba(255, 255, 255, 0.12)'
              : 'inherit',
          }}
        >
          Conversion
        </Button>
        <div className="link-separator" />
        <Button
          color="inherit"
          component={Link}
          to="/history"
          startIcon={<HistoryIcon />}
          sx={{
            backgroundColor: isSelected('/history')
              ? 'rgba(255, 255, 255, 0.12)'
              : 'inherit',
          }}
        >
          Historique des Transactions
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import PaymentIcon from '@mui/icons-material/Payment';
import CurrencyExchangeIcon from '@mui/icons-material/MonetizationOn';

const NavBar = () => {
  const location = useLocation();

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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

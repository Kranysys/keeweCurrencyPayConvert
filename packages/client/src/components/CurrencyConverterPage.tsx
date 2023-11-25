import React, { useState, ChangeEvent } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from '@mui/material';

const CurrencyConverterPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [currencyFrom, setCurrencyFrom] = useState<string>('EUR');
  const [currencyTo, setCurrencyTo] = useState<string>('USD');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handleCurrencyFromChange = (event: SelectChangeEvent<string>): void => {
    setCurrencyFrom(event.target.value as string);
  };

  const handleCurrencyToChange = (event: SelectChangeEvent<string>): void => {
    setCurrencyTo(event.target.value as string);
  };

  const handleConvert = (): void => {
    // Conversion logic here
    // For simplicity, let's assume fixed conversion rates
    let rate = 1;
    if (currencyFrom === 'EUR' && currencyTo === 'USD') {
      rate = 1.1;
    } else if (currencyFrom === 'GBP' && currencyTo === 'USD') {
      rate = 1.3;
    } // Add more conditions as needed
    setConvertedAmount(parseFloat(amount) * rate);
  };

  return (
    <div>
      <Typography variant="h6">Convertir des devises</Typography>
      <TextField
        label="Montant"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>De</InputLabel>
        <Select
          value={currencyFrom}
          onChange={handleCurrencyFromChange}
          label="De"
        >
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Vers</InputLabel>
        <Select
          value={currencyTo}
          onChange={handleCurrencyToChange}
          label="Vers"
        >
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleConvert} sx={{ mt: 2 }}>
        Convertir
      </Button>
      {convertedAmount !== null && (
        <Typography sx={{ mt: 2 }}>
          Montant converti: {convertedAmount.toFixed(2)} {currencyTo}
        </Typography>
      )}
    </div>
  );
};

export default CurrencyConverterPage;

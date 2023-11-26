import React, { useState, ChangeEvent } from 'react';
import { API_URL } from '~/config';
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

  const convertCurrency = async (): Promise<void> => {
    try {
      const response = await fetch(
        `${API_URL}/exchange/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`
      );
      if (!response.ok) {
        throw new Error('Réponse réseau non OK');
      }
      const data = await response.json();
      setConvertedAmount(data.convertedAmount);
    } catch (error) {
      console.error('Erreur lors de la conversion de devise:', error);
    }
  };

  const handleConvert = (): void => {
    convertCurrency();
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

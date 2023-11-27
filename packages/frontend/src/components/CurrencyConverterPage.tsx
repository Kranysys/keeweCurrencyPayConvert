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
  CircularProgress,
} from '@mui/material';

const CurrencyConverterPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [currencyFrom, setCurrencyFrom] = useState<string>('EUR');
  const [currencyTo, setCurrencyTo] = useState<string>('USD');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

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
    setIsLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('jwtToken');
      const headers: HeadersInit = new Headers();

      if (token) {
        headers.append('Authorization', `Bearer ${token}`);
      }

      const response = await fetch(
        `${API_URL}/exchange/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`,
        { method: 'GET', headers: headers }
      );
      if (!response.ok) {
        throw new Error('La réponse du réseau est non satisfaisante.');
      }
      const data = await response.json();
      setConvertedAmount(data.convertedAmount);
    } catch (error) {
      setError(
        'Erreur lors de la conversion de la devise. Veuillez réessayer.'
      );
      console.error('Erreur lors de la conversion de devise:', error);
    }
    setIsLoading(false);
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
      {isLoading && <CircularProgress sx={{ mt: 2 }} />}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {convertedAmount !== null && (
        <Typography sx={{ mt: 2 }}>
          Montant converti: {convertedAmount.toFixed(2)} {currencyTo}
        </Typography>
      )}
    </div>
  );
};

export default CurrencyConverterPage;

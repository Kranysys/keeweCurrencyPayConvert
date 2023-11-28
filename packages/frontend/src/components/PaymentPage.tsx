import React, { useState, ChangeEvent } from 'react';
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const PaymentPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [currency, setCurrency] = useState<string>('EUR');

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handleCurrencyToChange = (event: SelectChangeEvent<string>): void => {
    setCurrency(event.target.value as string);
  };

  const handlePayment = async (): Promise<void> => {
    setIsLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('jwtToken');
      const headers: HeadersInit = new Headers();
      headers.append('Content-Type', 'application/json');
      if (token) {
        headers.append('Authorization', `Bearer ${token}`);
      }
      const response = await fetch('http://localhost:4000/payment/process', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          amount: Number(parseFloat(amount)),
          currency: currency,
        }),
      });

      const data = await response.json();
      if (data.status === 'Processed') {
        setPaymentStatus(`Paiement réussi pour le montant: ${data.amount} EUR`);
      } else {
        setPaymentStatus('Échec du paiement');
      }
    } catch (error) {
      setError('Erreur lors du paiement');
      console.error('Erreur lors du paiement:', error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Typography variant="h6">Effectuer un paiement</Typography>
      <TextField
        label="Montant en EUR"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Vers</InputLabel>
        <Select value={currency} onChange={handleCurrencyToChange} label="Vers">
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handlePayment} sx={{ mt: 2 }}>
        Payer
      </Button>
      {isLoading && <CircularProgress sx={{ mt: 2 }} />}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {paymentStatus && <Typography sx={{ mt: 2 }}>{paymentStatus}</Typography>}
    </div>
  );
};

export default PaymentPage;

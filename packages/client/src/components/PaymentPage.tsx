import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const PaymentPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<string>('');

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const handlePayment = (): void => {
    // Conversion logic here
    // For simplicity, let's assume 1 EUR = 1.1 USD
    const amountInEur = parseFloat(amount);
    const converted = amountInEur * 1.1;
    setConvertedAmount(converted.toFixed(2));
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
      <Button variant="contained" onClick={handlePayment} sx={{ mt: 2 }}>
        Payer
      </Button>
      {convertedAmount && (
        <Typography sx={{ mt: 2 }}>
          Montant équivalent en USD: {convertedAmount}
        </Typography>
      )}
    </div>
  );
};

export default PaymentPage;

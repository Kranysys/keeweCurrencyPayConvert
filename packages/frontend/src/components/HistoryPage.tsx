import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

// Type pour les données de transaction
interface Transaction {
  date: string;
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  status: string;
}

// Données de transaction de démonstration
const transactions: Transaction[] = [
  // Remplir avec les données de transaction réelles
  {
    date: '2023-01-01',
    amount: 100,
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    status: 'Succès',
  },
  // Ajouter plus de transactions ici...
];

const HistoryPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h6">Historique</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Montant</TableCell>
              <TableCell>Devises</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction.date}
                </TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell>{`${transaction.fromCurrency} → ${transaction.toCurrency}`}</TableCell>
                <TableCell>{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HistoryPage;

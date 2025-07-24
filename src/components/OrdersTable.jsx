import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const orders = [
  { id: 1, name: 'Nom 1', date: '24-04-2025', status: 'En cours' },
  { id: 2, name: 'Nom 2', date: '16-04-2025', status: 'Payée' },
  { id: 3, name: 'Nom 3', date: '10-04-2025', status: 'Terminée' },
  { id: 4, name: 'Nom 5', date: '02-04-2025', status: 'Terminée' },
];

const OrdersTable = () => (
  <Card sx={{ mt: 4 }}>
    <CardContent sx={{ p: '0 !important' }}>
    <Typography variant="h6" gutterBottom sx={{ pt: 2, px: 2, fontWeight: 600 }}>
      Dernières commandes
    </Typography>
      <Table sx={{ m: 0, p: 0 }}>
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontWeight: '600'}}>ID</TableCell>
            <TableCell sx={{ fontWeight: '600'}}>Nom</TableCell>
            <TableCell sx={{ fontWeight: '600'}}>Date</TableCell>
            <TableCell sx={{ fontWeight: '600'}}>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ m: 0, p: 0 }}>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
            >
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default OrdersTable;

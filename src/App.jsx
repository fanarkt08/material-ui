import { Box, CssBaseline, Container, Stack } from '@mui/material';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ChartSection from './components/ChartSection';
import OrdersTable from './components/OrdersTable';
import Sidebar from './components/SideBar';

const drawerWidth = 80;

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0 , m: 0}}
      >
        <Header />
        <Container
          disableGutters
          maxWidth={false}
          sx={{ p: 4, width: '100%' }}
        >
          <Stack direction="row" spacing={2}>
            <StatCard label="Ventes" value="1000" type="ventes" />
            <StatCard label="Clients" value="300" type="clients" />
            <StatCard label="Messages" value="5" type="messages" />
          </Stack>

          <ChartSection />

          <OrdersTable />
        </Container>
      </Box>
    </Box>
  );
};

export default App;

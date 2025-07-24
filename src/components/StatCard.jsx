import { Card, CardContent, Typography, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';

const iconMap = {
  ventes: <AttachMoneyIcon fontSize="large" />,
  clients: <PeopleIcon fontSize="large" />,
  messages: <MessageIcon fontSize="large" />,
};

const StatCard = ({ label, value, type }) => {
  return (
    <Card sx={{ flex: 1, mx: 1 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '20px' }}>
        {iconMap[type]}
        <Box>
          <Typography variant="h6">{value}</Typography>
          <Typography variant="body2" color="textSecondary">{label}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">Tableau de bord</Typography>
      <IconButton sx={{ p: 0, width: 40, height: 40 }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#a4a4a4ff" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 12c1.656854 0 3-1.343146 3-3s-1.343146-3-3-3-3 1.343146-3 3 1.343146 3 3 3zm0 2c-2 0-6 1-6 3v1h12v-1c0-2-4-3-6-3z"
            fill="white"
          />
        </svg>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;

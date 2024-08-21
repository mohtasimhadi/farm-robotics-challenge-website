import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { LinkedIn as LinkedInIcon, Language as LanguageIcon } from '@mui/icons-material';

const TeamSection: React.FC = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      p={3}
    >
      <Typography variant="h3" gutterBottom align="center">
        Meet the Team
      </Typography>
      <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="center" 
        alignItems="center"
      >
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Hamid.jpeg" 
            alt="Hamid" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Hamid Habib Syed</Typography>
          <Typography variant="body2">hhs0015@auburn.edu</Typography>
          <Box>
            <Link href="https://hamidsyed298.github.io/" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/hamid-habib-syed-74004815a/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Faraz.jpeg" 
            alt="Faraz" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Faraz Ahmed</Typography>
          <Typography variant="body2">fza0070@auburn.edu</Typography>
          <Box>
            <Link href="" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/mfaraz-ahmad/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Maruf.jpeg" 
            alt="Maruf" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Mesbahul Maruf</Typography>
          <Typography variant="body2">mzm0411@auburn.edu</Typography>
          <Box>
            <Link href="" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/mesbah-maruf/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Mohtasim.png" 
            alt="Mohtasim" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Mohtasim Hadi Rafi</Typography>
          <Typography variant="body2">mzr0167@auburn.edu</Typography>
          <Box>
            <Link href="moho.blog" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/mohtasimhadi/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSection;

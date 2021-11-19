import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";

const Profile = () => {
  const { userData } = useSelector((state) => state);

  return (
    <Box marginTop={6}>
      <Typography variant="h4" align="center">
        👨‍🌾 Profile Page
      </Typography>

      <Typography variant="h2" align="center" marginTop={20}>
        Happy to see you again, {userData.login} 😺
      </Typography>
    </Box>
  );
};

export default Profile;

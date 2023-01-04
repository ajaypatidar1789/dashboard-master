import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import Link from '@mui/material/Link';

export default function UserDetailsCard() {
  let { userId } = useParams();
  const [user, setUser] = React.useState({});
  console.log("userId:", userId);

  const fetchUserDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      console.log("single user data:", data);
      setUser(data);
    } catch (err) {
      alert(err);
    }
  };

  React.useEffect(() => {
    fetchUserDetails();
  });

  return (
    <div className="userCard flex flex-col">
        {
            Object.keys(user).length === 0 ? (
                <Box>Loading...</Box>
            ) : (
                <Card className="m-8 flex flex-col justify-center items-center">
                    <CardActionArea>
                    <CardContent className="p-5 flex flex-col">
                        <Box className="flex justify-center"> 
                            <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} />
                        </Box>
                        <Typography
                        className="text-2xl font-bold self-center m-5"
                        style={{ fontSize: "large", fontWeight: "700" }}
                        >
                        Name: {user.name}
                        </Typography>
                        <Typography className="text-md font-semibold self-center">
                        User Name: {user.username}
                        </Typography>
                        <Typography className="text-md font-semibold self-center">
                        Email: {user.name}
                        </Typography>
                        <Typography className="text-md font-semibold self-center">
                        Website: <Link href="#" underline="always">{user.website}</Link>
                        </Typography>
                        <Typography className="text-md font-semibold self-center">
                        Company: {user.company.name}
                        </Typography>
                        <Typography className="text-md font-semibold self-center">
                        Address: {`${user.address.city},${user.address.street}, pin:${user.address.zipcode}`}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>

            )
        }
    </div>
  );
}

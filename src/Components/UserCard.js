import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function UserCard({name,username,email,id}) {

  return (
    <div className='userCard flex flex-col'>
    <Card className='m-8' style={{width:'300px',position:'relative'}}>
      <CardActionArea>
        <CardContent className='p-5 flex flex-col'>
          <Typography className='text-2xl font-bold self-center m-5' style={{fontSize:'large',fontWeight:'700'}}>
            {name}
          </Typography>
          <Typography className='text-md font-semibold self-center'>
            {username}
          </Typography>
          <Typography className='text-md font-semibold self-center'>
            {email}
          </Typography>
          <Link to={`/users/${id}`}>
            <Button variant="text" sx={{width:'100%',textAlign:'center',textTransform:'none'}}>Show Details</Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

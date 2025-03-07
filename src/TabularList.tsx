import {
  Announcement,
  CheckCircle,
  FlightTakeoff,
  Hail,
} from '@mui/icons-material';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  flightData: Array<any>;
}

const AlignItemsList: FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const { flightData } = props;
  return (
    <List sx={{ width: '100%', maxWidth: '75%', bgcolor: 'background.paper' }}>
      {flightData && flightData?.length === 0 && (
        <div>No Records to display</div>
      )}
      {flightData &&
        flightData?.map((info: any) => {
          return (
            <>
              <ListItem style={{ maxHeight: '65px' }} alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt={'flight'}
                    sx={{ bgcolor: '#ab47bc', width: 32, height: 32 }}
                    src={require('./assets/flightAvatar.jpg')}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link
                      underline='hover'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      color='primary'
                      fontSize={'16px'}
                      onClick={() => {
                        navigate(`/flightDetails/${info?.id}`);
                      }}
                    >
                      {' '}
                      {info?.flightNumber}{' '}
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: '20px',
                        }}
                      >
                        <Typography
                          sx={{
                            display: 'inline',
                            fontWeight: 'bold',
                            fontSize: '14px',
                          }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          {`Airline : ${info?.airline}`}
                        </Typography>
                        <Typography
                          sx={{ display: 'inline', fontWeight: 'normal' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          {`Origin : ${info?.origin}`}
                        </Typography>
                        <Typography
                          sx={{ display: 'inline', fontWeight: 'normal' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          {`Destination : ${info?.destination}`}
                        </Typography>
                        <Typography
                          sx={{ display: 'inline', fontWeight: 'normal' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          {`Departure : ${new Date(
                            info?.departureTime
                          ).toDateString()}`}
                        </Typography>
                        <Typography
                          sx={{ display: 'inline', fontWeight: 'normal' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          <Typography
                            sx={{
                              display: 'inline',
                              position: 'relative',
                              top: '-8px',
                              marginRight: '8px',
                            }}
                            component='span'
                            variant='body2'
                            color='text.primary'
                          >
                            {' '}
                            {`Status : ${info?.status}`}
                          </Typography>

                          {info?.status === 'On Time' ? (
                            <CheckCircle style={{ color: '#4caf50' }} />
                          ) : info?.status === 'Boarding' ? (
                            <Hail style={{ color: '#7b1fa2' }} />
                          ) : info?.status === 'Departed' ? (
                            <FlightTakeoff style={{ color: '#00e5ff' }} />
                          ) : (
                            <Announcement style={{ color: '#d32f2f' }} />
                          )}
                        </Typography>{' '}
                      </div>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </>
          );
        })}
    </List>
  );
};

export default AlignItemsList;

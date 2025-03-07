import {
  Announcement,
  CheckCircle,
  FlightTakeoff,
  Hail,
} from '@mui/icons-material';
import { Alert, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

interface Props {
  data?: any;
  handleClose?: any;
}

const FlightBookingDetails: React.FC<Props> = (props: Props) => {
  const [flightDetails, setFlightDetails] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://flight-status-mock.core.travelopia.cloud/flights/${params?.id}`,
      {}
    )
      .then(async (resp) => {
        const respBody = await resp.json();
        if (respBody) {
          setFlightDetails(respBody);
          // console.log('ddd', respBody);
        } else {
          setFlightDetails({});
        }
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <div style={{ padding: '0px 40px' }}>
      <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }}>
        Flight Details
      </p>
      {loading && <CircularProgress size={'medium'} />}
      {error && <Alert severity='error'>{'Api Error has occured'}</Alert>}
      {!isEmpty(flightDetails) && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={require('./assets/flight.jpg')}
            title='flight iguana'
          />
          <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              fontWeight={'bold'}
            >
              {flightDetails?.flightNumber}
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              {`Airline:  ${flightDetails?.airline}`}
            </Typography>
            <Typography
              sx={{ display: 'inline', fontWeight: 'normal' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {`Origin :  ${flightDetails?.origin}`}
            </Typography>
            <Typography
              sx={{ display: 'inline', fontWeight: 'normal' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {`Destination : ${flightDetails?.destination}`}
            </Typography>
            <Typography
              sx={{ display: 'inline', fontWeight: 'normal' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {`Departure : ${new Date(
                flightDetails?.departureTime
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
                {`Status : ${flightDetails?.status}`}
              </Typography>

              {flightDetails?.status === 'On Time' ? (
                <CheckCircle style={{ color: '#4caf50' }} />
              ) : flightDetails?.status === 'Boarding' ? (
                <Hail style={{ color: '#7b1fa2' }} />
              ) : flightDetails?.status === 'Departed' ? (
                <FlightTakeoff style={{ color: '#00e5ff' }} />
              ) : (
                <Announcement style={{ color: '#d32f2f' }} />
              )}
            </Typography>{' '}
          </CardContent>
          {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
      )}
    </div>
  );
};

export default FlightBookingDetails;

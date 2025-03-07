import { Alert, CircularProgress, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import AlignItemsList from './TabularList';

interface Props {
  data?: any;
  handleClose?: any;
}

const FlightBooking: FC<Props> = (props: Props) => {
  const [counter, setCounter] = useState(10);
  const [flightList, setFlightList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://flight-status-mock.core.travelopia.cloud/flights', {})
      .then(async (resp) => {
        const respBody = await resp.json();
        if (respBody) {
          setFlightList(respBody);
          console.log('ddd', respBody);
        } else {
          setFlightList([]);
        }
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    let interval: any = null;
    // setLoading(true);
    if (!interval) {
      interval = setInterval(() => {
        fetch('https://flight-status-mock.core.travelopia.cloud/flights', {})
          .then(async (resp) => {
            const respBody = await resp.json();
            if (respBody) {
              setFlightList(respBody);
              console.log('ddd', respBody);
            } else {
              setFlightList([]);
            }
            setError(false);
          })
          .catch((err) => {
            setError(true);
          });
      }, 1500);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className='App'>
      {error && <Alert severity='error'>{'Api Error has occured'}</Alert>}

      <Typography
        variant='h4'
        fontWeight={'bold'}
        style={{
          margin: '18px',
          marginBottom: '0px',
          wordSpacing: '2',
          textAlign: 'left',
        }}
      >
        {/* <img
          src={require('./assets/flight.jpg')}
          width={'150px'}
          height={'50px'}
          alt={'logo'}
          loading='lazy'
          style={{
            aspectRatio: 3 / 2,
            objectFit: 'contain',
            mixBlendMode: 'color-burn',
          }}
        /> */}
        List of Flights
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <AlignItemsList flightData={flightList} />
      )}
    </div>
  );
};

export default FlightBooking;

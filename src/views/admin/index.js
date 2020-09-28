import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import { useForm } from "react-hook-form";
import { timeApi } from '../../services/time-api'
import { Link } from "react-router-dom";

// if/when we think about timezones
// Intl.DateTimeFormat().resolvedOptions().timeZone

export default function Time() {
  let defaultValues = [
    {
      "day": "Monday",
      "openTime": "07:00",
      "closeTime": "20:00",
      "twentyFourHours": false,
      "isClosed": false,
      "specialHour": false
    },
    {
      "day": "Tuesday",
      "openTime": "07:00",
      "closeTime": "20:00",
      "twentyFourHours": false,
      "isClosed": false,
      "specialHour": false
    },
    {
      "day": "Wednesday",
      "openTime": "07:00",
      "closeTime": "20:00",
      "twentyFourHours": false,
      "isClosed": false,
      "specialHour": false
    },
    {
      "day": "Thursday",
      "openTime": "07:00",
      "closeTime": "20:00",
      "twentyFourHours": false,
      "isClosed": false,
      "specialHour": false
    },
    {
      "day": "Friday",
      "openTime": "",
      "closeTime": "",
      "twentyFourHours": true,
      "isClosed": false,
      "specialHour": false
    },
    {
      "day": "Saturday",
      "openTime": "",
      "closeTime": "",
      "twentyFourHours": true,
      "isClosed": false,
      "specialHour": false
    },
    {
      "day": "Sunday",
      "openTime": "06:00",
      "closeTime": "17:00",
      "twentyFourHours": false,
      "isClosed": false,
      "specialHour": false
    }
  ]
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [data, setData] = useState({ hours: defaultValues });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);



  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const toggleShowSuccess = () => setSuccess(!success);
  const toggleShowError = () => setError(!error);

  //more helper hooks we could add to our api library.
  const onSubmit = (data) => {
    {
      const saveData = async () => {
        const result = await timeApi.update(data.day)
        if (result) {
          setData({ hours: result });
          toggleShowSuccess()

        } else {
          setData({ hours: defaultValues });
        }

      };

      saveData();
    }
  };

  //us not abstracting the hooks to load our data comes back to haunt us.
  useEffect(() => {
    const fetchData = async () => {
      const result = await timeApi.get()

      debugger

      if (result) {
        setData({ hours: result });
      } else {
        setData({ hours: defaultValues });
      }

    };

    fetchData();
  }, []);

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hours">
            <table className="table">
              <tbody>
                {days.map((day, index) => {
                  return (
                    <tr key={`${day}-${index}key`}>
                      <th scope="row">
                        {day}
                        <input name={`day[${index}].day`} type="hidden" ref={register} value={day} />
                      </th>
                      <td>
                        <div>
                          <label htmlFor={`${day}Open`}>Open Time</label>
                          <input type="time"
                            className="form-control"
                            name={`day[${index}].openTime`}
                            id={`${day}Open`}
                            ref={register}
                            defaultValue={data.hours[index].openTime}
                            aria-describedby={`${day}OpenTime`} />
                        </div>
                      </td>
                      <td>
                        <div>
                          <label htmlFor={`${day}Close`}>Close Time</label>
                          <input type="time"
                            className="form-control"
                            name={`day[${index}].closeTime`}
                            id={`${day}Close`}
                            ref={register}
                            defaultValue={data.hours[index].closeTime}
                            aria-describedby="sundayCloseTime" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input"
                            type="checkbox"
                            id={`${day}24Hours`}
                            name={`day[${index}].twentyFourHours`}
                            defaultChecked={data.hours[index].twentyFourHours}
                            ref={register} />
                          <label className="form-check-label" htmlFor={`${day}24Hours`}>
                            Open 24 Hours
                      </label>
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input"
                            type="checkbox"
                            id={`${day}isClosed`}
                            name={`day[${index}].isClosed`}
                            defaultChecked={data.hours[index].isClosed}
                            ref={register} />
                          <label className="form-check-label" htmlFor={`${day}isClosed`}>
                            Closed
                      </label>
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input"
                            type="checkbox"
                            id={`${day}SpecialHour`}
                            name={`day[${index}].specialHour`}
                            defaultChecked={data.hours[index].specialHour}
                            ref={register} />
                          <label className="form-check-label" htmlFor={`${day}SpecialHour`}>
                            Flag as Special Hour
                          </label>
                        </div>
                      </td>
                    </tr>
                  )

                })}
              </tbody>
            </table>
          </div>
          <input type="submit" />
        </form>
        <Link to="/">View Hours</Link>
      </Jumbotron>


      <Toast onClose={toggleShowSuccess} show={success} animation={true}>
        <Toast.Header>
          <strong className="mr-auto">Hello admin</strong>
        </Toast.Header>
        <Toast.Body>Hours saved successfully</Toast.Body>
      </Toast>

      <Toast onClose={toggleShowError} show={error} animation={true}>
        <Toast.Header>
          <strong className="mr-auto">Hello admin</strong>
        </Toast.Header>
        <Toast.Body>oops something bad happened and we didn't save successfully</Toast.Body>
      </Toast>

    </Container>
  )
}
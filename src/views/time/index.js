import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { timeApi } from '../../services/time-api'
import { OperatingHours } from "../../components/operating-hours";
import { Link } from "react-router-dom";

export default function Time() {
// this hook could be abstraced out into the api library to improve reusability even more.
  const [data, setData] = useState({ hours: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await timeApi.get()

      if (result) {
        setData({ hours: result });
      } else {
        setData({ hours: [] });
      }

    };

    fetchData();
  }, []);

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome our hours are:</h1>
        <OperatingHours.DataDriven hours={data.hours} />
        <Link to="/admin">Configure Hours</Link>
      </Jumbotron>
    </Container>
  )
}
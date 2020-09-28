import React, { useState, useEffect } from "react";
import { timeApi } from '../../services/time-api'
import { OperatingHours } from "../../components/operating-hours";

export default function Time() {
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
    <OperatingHours.DataDriven hours={data.hours} />
  )
}
import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await api.get("/");

        setMessage(response.data.message);

      } catch (error) {

        console.error(error);

      }

    };

    fetchData();

  }, []);

  return (

    <div className="flex flex-col items-center justify-center py-24">

      <h1 className="text-5xl font-bold text-blue-700 mb-6">
        TS EAPCET College Predictor
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        {message}
      </p>

    </div>

  );

}

export default Home;
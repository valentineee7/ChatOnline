import "./App.css";
import { useEffect, useState } from "react";
import Messages from "./componentes/Messages";
import Login from "./componentes/Login.jsx";
import { supabase } from "./supabaseCliente.js";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  return (
    <>
      <div className="App">
        <h1>Whatsapp Clone</h1>
        <p>ReactJs & Supabase by Valentina</p>
        {session ? <Messages /> : <Login />}
      </div>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { formatDate } from "../helpers/formatDate";
import { supabase } from "../supabaseCliente";


const Message = ({ message, date, email }) => {

  const getSession = async () => {
    const data = await supabase.auth.getSession();
    console.log(data);
  }

  useEffect(() => {
    getSession()
  }, [])

  return (
    <div className="card">
      <p>{message}</p>
      <span>{formatDate(date)}</span>
      <span className=" user-mail">{email}</span>
    </div>
  );
}

export default Message;

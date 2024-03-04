import { useEffect, useState } from "react";
import { supabase } from "../supabaseCliente";
import Message from "./Message";

const Messages = () => {

const [messages, setMessages] = useState ([])



    const callSupabase = async () => {
        const {data} = await supabase.from("Message").select("*")
        setMessages (data)
        //console.log(data);
    }

    useEffect (() =>{
        callSupabase(), []
    })
  return (
   <section className="message">
    Messages
    <div className="content">
        {
        messages &&
        messages.map((item, index)=>(
          <Message
            key={index}
            message = {item.contenedor}
            date = {item.created_at}
            email = {item.email}
          />
        )
        )
        }  
    </div>
   </section>
  )
  }


export default Messages

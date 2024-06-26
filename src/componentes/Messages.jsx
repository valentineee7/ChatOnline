import { supabase } from "../supabaseCliente";
import { useEffect, useRef, useState } from "react";

import Message from "./Message";
import SendMessage from "./SendMessage";
import Header from "./Header";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const callSupabase = async () => {
    const { data } = await supabase.from("Messages").select("*");
    setMessages(data);
  };
  useEffect(() => {
    callSupabase();
  }, []);

  useEffect(() => {
    // Insert público para la tabla messages
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Messages" },
        (payload) => {
          const newMessage = payload.new;
          setMessages((messages) => [...messages, newMessage]);
        }
      )
      .subscribe();
    // Se cierra el canal de real-time
    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <section className="messages">
      <Header />
      <div className="content">
        {messages &&
          messages.map((item, index) => (
            <Message
              key={index}
              message={item.content}
              date={item.created_at}
              email={item.email}
            />
          ))}
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </section>
  );
};

export default Messages;

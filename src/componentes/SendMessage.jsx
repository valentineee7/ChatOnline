import { supabase } from "../supabaseCliente";
import { useEffect, useState } from "react";
import Send from "../assets/icons/Send";

const SendMessage = ({ scroll }) => {
  const [user, setUser] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      await supabase.from("Messages").insert({
        content: newMessage,
        email: user,
      });
      setNewMessage("");
    }
    // Scroll bottom cuando se envia un mensaje
    scroll.current.scrollIntoView({ Behavior: "smooth" });
  };
  const getSeccion = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session.user.email);
  };
  useEffect(() => {
    getSeccion();
  }, []);

  return (
    <section className="send-mesage">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="message"
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          value={newMessage}
        />
        <button type="submit">
          <Send />
        </button>
      </form>
    </section>
  );
};

export default SendMessage;

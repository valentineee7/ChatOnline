import { useState, useEffect } from "react";
import Arrow from "../assets/icons/Arrow";

import { supabase } from "../supabaseCliente";
import Dots from "../assets/icons/Dots";
import { getAvatarN } from "../helpers/getAvatarN";

const Header = () => {
  const [user, setUser] = useState("Valentina");
  const [open, setOpen] = useState(false);

  const getSeccion = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session.user.email);
  };
  useEffect(() => {
    getSeccion();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error al cerrar sesión", error);
    }
    window.location.reload();
  };
  const handleDots = () => {
    setOpen((current) => !current);
  };

  return (
    <div className="header">
      <div className="left">
        <p className="logout" onClick={handleLogout}>
          <Arrow />
        </p>
        <img src={`/avatar/avatar-${getAvatarN(user)}.jpg`} alt="avatar" />
        <p className="name">
          @{user?.split("@")[0]}
          <span>Online</span>
        </p>
      </div>
      <p className="dots" onClick={handleDots}>
        <Dots />
      </p>
      <div className={`float-out ${open ? "open" : ""}`} onClick={handleLogout}>
        Cerrar sesión
      </div>
    </div>
  );
};

export default Header;

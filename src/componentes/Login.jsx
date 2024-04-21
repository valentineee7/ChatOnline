import { supabase } from "../supabaseCliente";

const Login = () => {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log("Error al iniciar sesión", error);
    }
  };

  return (
    <section className="login">
      <button onClick={handleLogin}>Iniciar</button>
    </section>
  );
};

export default Login;

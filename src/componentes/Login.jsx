import React from 'react'
import { supabase } from '../supabaseCliente'

const Login = () => {

const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

 const  handleLogout = async() =>  {
  const { error } = await supabase.auth.signOut()
 }



  return (
    <section className='login'>
        <button onClick={handleLogin}>Iniciar</button>
        <button onClick={handleLogout}>Cerrar</button>

    </section>
  )
}

export default Login;


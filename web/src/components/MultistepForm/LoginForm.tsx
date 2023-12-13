import facebook from '../../assets/facebook_.svg';
import google from '../../assets/google_.svg';
import instagram from '../../assets/instagram_.svg';

type LoginData = {
  loginEmail: string
  loginPassword: string
}

type LoginFormProps = LoginData & {
  updateFields: (fields: Partial<LoginData>) => void
}

export function LoginForm({loginEmail, loginPassword, updateFields }: LoginFormProps) {
  return (
    <>
       <div className='login-con'>
        <h2>Login om vakspecialist te vinden</h2>
        <div className='login-form-con'>
            <div className='login-form'>
                <label>Email</label>
                <input 
                  required 
                  type="email" 
                  placeholder='Bijv. joe@hotmail.com'
                  value={loginEmail}
                  onChange={e => updateFields({ loginEmail: e.target.value })}
                  />
                <label>Wachtwoord</label>
                <input 
                  required 
                  type="password" 
                  placeholder='Wachtwoord'
                  value={loginPassword}
                  onChange={e => updateFields({ loginPassword: e.target.value })}
                  />
            </div>
            <div className='login-link'>Nog geen account? <a href="#">Account aanmaken inschrijven als professional</a></div>
            <button className='form-btn login-btn'>Inloggen</button>    
        </div> 
         <div className='social-con'>
            <div>Of login met onderstaande opties</div>
            <div className='social-btn'><img src={facebook} alt="" /> Facebook</div>
            <div className='social-btn'><img src={google} alt="" />Gmail</div>
            <div className='social-btn'><img src={instagram} alt="" />Instagram</div>
        </div>   
    </div>
    </>
  )
}
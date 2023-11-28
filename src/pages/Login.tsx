import InputTextfield from "../components/inputField"
import './index.scss'
import DatePickerComponent from "../components/datePicker"
import SelectField from "../components/selectField"
import PrimaryButton from "../components/button"
import { useState } from 'react'
import moment from "moment"
import HeaderNav from "../components/Header"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({
    email: '',
    password: ''
  })

  const [errors, setError] = useState<any>({})
  const [helperText, setHelperText] = useState<any>({})
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = () => {
    if(!values.email){
      setError({
        ...errors,
        email:true
      })
      setHelperText({
        ...errors,
        email:'This field is required'
      })
      return
    }
    if(!values.password){
      setError({
        ...errors,
        password:true
      })
      setHelperText({
        ...errors,
        password:'This field is required'
      })
      return
    }
  

   const email = values.email;
   const password = values.password;

   sessionStorage.setItem('requireFields', JSON.stringify(values))
    
    const savedItem =  sessionStorage.getItem('requireFields') || ''

    console.log({savedItem})
    const formattedData = JSON.parse(savedItem)

      const payload = {
        ...values,
        email,
        password,
        ...formattedData
    }
     

    const url = 'http://localhost:4040/api/users/login'
    axios.post(url, payload)
      .then((response: any) => {
        console.log('Post successful:', response);
      setDisabled(false)
      navigate(`/qt/registration`)
      sessionStorage.removeItem('requireFields')
      })
      .catch((error:any) => {
        console.error('Error posting data:', error);
      setDisabled(false)
      });
   
  }

  return (
   
    <div className="home-page-container">
      <HeaderNav />
      <div style={{ padding: 32 }}>
       
     
        <div className="row-item-ctn">
          <InputTextfield
            placeholder="Email"
            handleChange={(e: any) => setValues({
              ...values,
              email: e.target.value
            })}
            error={errors.email}
            errorText={helperText.email}
          />
          <InputTextfield
            placeholder="Password"
            handleChange={(e: any) => setValues({
              ...values,
              password: e.target.value
            })}
            error={errors.password}
            errorText={helperText.password}
          />
        </div>
       
        <div style={{ display: 'flex', alignItems: "center", width: '30%', marginTop: 30 }}>
          <PrimaryButton onClick={handleSubmit} label="Login" />
        </div>
      </div>
    </div>
  
  )
}

export default Home





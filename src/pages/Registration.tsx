import InputTextfield from "../components/inputField"
import './index.scss'
import DatePickerComponent from "../components/datePicker"
import SelectField from "../components/selectField"
import PrimaryButton from "../components/button"
import { useState } from 'react'
import moment from "moment"
import RegisterHeaderNav from "../components/Header/register"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [errors, setError] = useState<any>({})
  const [helperText, setHelperText] = useState<any>({})
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = () => {
    if(!values.firstName){
      setError({
        ...errors,
        firstName:true
      })
      setHelperText({
        ...errors,
        firstName:'This field is required'
      })
      return
    }
    if(!values.lastName){
      setError({
        ...errors,
        lastName:true
      })
      setHelperText({
        ...errors,
        lastName:'This field is required'
      })
      return
    }
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
    const firstName = values.firstName;
    const lastName = values.lastName;

    sessionStorage.setItem('requireFields', JSON.stringify(values))
 
     const savedItem =  sessionStorage.getItem('requireFields') || ''
 
     const formattedData = JSON.parse(savedItem)
 
       const payload = {
         ...values,
         firstName,
         lastName,
         email,
         password,
         ...formattedData
     }
      
 
     const url = 'http://localhost:4040/api/users/register'
     axios.post(url, payload)
       .then((response: any) => {
         console.log('Post successful:', response);
       setDisabled(false)
       navigate(`/qt/task`)
       sessionStorage.removeItem('requireFields')
       })
       .catch((error:any) => {
         console.error('Error posting data:', error);
       setDisabled(false)
       });

  

    // const url = 'https://survey-app-heroku-4b2ea8ed2f87.herokuapp.com/information'
    // axios.post(url, payload)
    //   .then((response: any) => {
    //     console.log('Post successful:', response);
    //   setDisabled(false)
    //   navigate('/success')
    //   sessionStorage.removeItem('requireFields')
    //   })
    //   .catch((error:any) => {
    //     console.error('Error posting data:', error);
    //   setDisabled(false)
    //   });
  
  }

  return (
   
    <div className="home-page-container">
      <RegisterHeaderNav />
      <div style={{ padding: 32 }}>
      
     
       
        <div className="row-item-ctn">
        <InputTextfield
            placeholder="First Name"
            handleChange={(e: any) => setValues({
              ...values,
              firstName: e.target.value
            })}
            error={errors.firstName}
            errorText={helperText.firstName}
          />
          <InputTextfield
            placeholder="Last Name"
            handleChange={(e: any) => setValues({
              ...values,
              lastName: e.target.value
            })}
            error={errors.lastName}
            errorText={helperText.lastName}
          />
        </div>
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
       
        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton onClick={handleSubmit} label="Register" />
        </div>
      </div>
    </div>
  
  )
}

export default Home



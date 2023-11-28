import InputTextfield from "../components/inputField"
import './index.scss'
import DatePickerComponent from "../components/datePicker"
import SelectField from "../components/selectField"
import PrimaryButton from "../components/button"
import { useState } from 'react'
import moment from "moment"
import TaskHeaderNav from "../components/Header/task"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({
    taskName: '',
    startDate: '',
    endDate: '',
    projectName: '',
    assignee: '',
    description: '',
    priority: '',
   
  })

  const [errors, setError] = useState<any>({})
  const [helperText, setHelperText] = useState<any>({})
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = () => {


    if(!values.taskName){
      setError({
        ...errors,
        taskName:true
      })
      setHelperText({
        ...errors,
        firstName:'This field is required'
      })
      return
    }
    if(!values.startDate){
      setError({
        ...errors,
        startDate:true
      })
      setHelperText({
        ...errors,
        lastName:'This field is required'
      })
      return
    }
    if(!values.endDate){
      setError({
        ...errors,
        endDate:true
      })
      setHelperText({
        ...errors,
        endDate:'This field is required'
      })
      return
    }
    if(!values.projectName){
      setError({
        ...errors,
        projectName:true
      })
      setHelperText({
        ...errors,
        projectName:'This field is required'
      })
      return
    }
    if(!values.assignee){
      setError({
        ...errors,
        assignee:true
      })
      setHelperText({
        ...errors,
        assignee:'This field is required'
      })
      return
    }

    if(!values.description){
      setError({
        ...errors,
        description:true
      })
      setHelperText({
        ...errors,
        description:'This field is required'
      })
      return
    }


    if(!values.priority){
      setError({
        ...errors,
        priority:true
      })
      setHelperText({
        ...errors,
        priority:'This field is required'
      })
      return
    }

    const title = values.taskName;
    const startDate = values.startDate;
    const endDate = values.endDate;
    const projectName = values.projectName;
    const description = values.description;
    const assignee = values.assignee;
    const priority = values.priority;
    const file = "file name"


    sessionStorage.setItem('requireFields', JSON.stringify(values))
 
    const savedItem =  sessionStorage.getItem('requireFields') || ''

    const formattedData = JSON.parse(savedItem)


    const payload = {
      ...values,
      title ,
   startDate, 
    endDate ,
     projectName, 
     description ,
     assignee ,
    priority,
    file,
      ...formattedData
  }

  
   

  const url = 'http://localhost:4040/api/task'
  axios.post(url, payload)
    .then((response: any) => {
      console.log('Post successful:', response);
    setDisabled(false)
    navigate('/success')
    sessionStorage.removeItem('requireFields')
    })
    .catch((error:any) => {
      console.error('Error posting data:', error);
    setDisabled(false)
    });

 
  }

  const handleDateChange = (startDate: any) => {
    setValues({
      ...values,
      startDate: moment(startDate.$d).format("DD/MM/YY")
    })
  }

  const handleEndDateChange = (endDate: any) => {
    setValues({
      ...values,
      endDate: moment(endDate.$d).format("DD/MM/YY")
    })
  }

  return (
   
    <div className="home-page-container">
      <TaskHeaderNav/>
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>

        <InputTextfield
            placeholder="Task Name"
            handleChange={(e: any) => setValues({
              ...values,
              taskName: e.target.value
            })}
            required={true}
            error={errors.taskName}
            errorText={helperText.taskName}
          />
         
        </div>
      
        <div className="row-item-ctn">
        <DatePickerComponent
            placeholder="Start Date"
            handleDateChange={handleDateChange}
            required={true}
            error={errors.startDate}
            errorText={helperText.startDate}
          />
          <DatePickerComponent
            placeholder="End Date"
            handleDateChange={handleEndDateChange}
            required={true}
            error={errors.endDate}
            errorText={helperText.endDate}
          />
        </div>
        <div className="row-item-ctn">
        <InputTextfield
            placeholder="Project Name"
            handleChange={(e: any) => setValues({
              ...values,
              projectName: e.target.value
            })}
            error={errors.projectName}
            errorText={helperText.projectName}
          />
        
        </div>
        <div className="row-item-ctn">
     
          <SelectField
            placeholder="Assignee"
            menuItems={assigneeArr}
            value={values.assignee}
            handleChange={(event: any) => {
              setValues({
                ...values,
                assignee: event.target.value,
              })
            }}
            
          />
        </div>
      
     
        <div className="row-item-ctn">
          <InputTextfield 
            placeholder="Description" 
            handleChange={(event:any) => 
              setValues({
              ...values,
              description: event.target.value
            })} 
            error={errors.description}
            errorText={helperText.description}
        />
         
        </div>

        <div className="row-item-ctn">
        <SelectField
            placeholder="Priority"
            menuItems={priorityArr}
            value={values.priority}
            handleChange={(event: any) => {
              setValues({
                ...values,
                priority: event.target.value,
              })
            }}
          />
         
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton onClick={handleSubmit} label="Submit" />
        </div>
      </div>
    </div>
  
  )
}

export default Home





const priorityArr = [
  {
    label: 'High',
    id: 'high'
  },
  {
    label: 'Low',
    id: 'low'
  },
  {
    label: 'Medium',
    id: 'medium'
  },
 
]

const assigneeArr = [
  {
    label: 'Abraham Ahishakiye',
    id: 'Abraham'
  },
  {
    label: 'Shyaka Prince',
    id: 'Shyaka'
  },

  {
    label: 'Yves Ishimwe',
    id: 'Yves'
  },
  {
    label: 'Deborah Uwase',
    id: 'Deborah'
  },
]
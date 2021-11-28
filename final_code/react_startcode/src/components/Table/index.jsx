import {useEffect,useState} from 'react';
import axios from 'axios';

import 'antd/dist/antd.css';
import {Button,Form,Input} from 'antd';

function Table(){

    const studentInputs = ['Name','Age','Grade']
    const [id,setId] = useState(0)
    const [name,setName] = useState('default')
    const [age,setAge] = useState(0)
    const [grade,setGrade] = useState(0)
    const inputFunctions = [setName,setAge,setGrade]

    const [students,setStudents] = useState([]);
    const [student,setStudent] = useState( {id:0,name:'default',age:0,grade:0} );
    
    const [isEditMode,setEditMode] = useState(false);

    const url = 'http://localhost:3000/api/';

    const getStudent = () =>{
        axios({method:'get',url:url+"list"})
        .then( response => {
            setStudents(response.data)
            // console.log(response.data)
        });
    }

    const delStudent = (e) =>{
        const id = e.currentTarget.id;
        axios({
            method:'delete',
            url:url+'delete/'+id
        })
        console.log("delete success")
    }

    const addStudent = () =>{
        axios({
            method:'post',
            url:url+"add",
            data:student
        })
    }

    const sumbitForm = ()=>{
        addStudent();
    }

    const editButton =(id,name,age,grade)=>{
        setEditMode(true)
        setId(id)
        setName(name)
        setAge(age)
        setGrade(grade)
    }
    const updateButton =()=>{
        axios({
            method: 'post',
            url: url+"update",
            data:student
        })
        setEditMode(false)
    }
    const cancelButton =()=>{
        setEditMode(false)
    }

    useEffect(() =>{
        getStudent();
        setStudent( {id:id,name:name,age:age,grade:grade} )
    },[students])

    return (
        <div>
            <div id="addStudent">
                <Form layout={'inline'} onFinish={sumbitForm}>  
                    {
                        studentInputs.map ( (element,i) => {
                            return(
                                <Form.Item key={i} label={element+":"} name={element} rules={ [{required:true}] }>
                                    <Input placeholder={element} onChange={ c => inputFunctions[i](c.currentTarget.value) } style={{widht:100}} />
                                </Form.Item>
                            )//return
                        })//map
                    }
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Name:</th>
                        <th>Age:</th>
                        <th>Grade:</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        students.map( ({id,name,age,grade}) => {
                            if (isEditMode){
                                //return Input tag for list
                                return(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td><Input onChange={ c => setName(c.currentTarget.value) } defaultValue={name}  style={{width:80}} /></td>
                                        <td><Input onChange={ c => setAge(c.currentTarget.value) } defaultValue={age}  style={{width:80}} /></td>
                                        <td><Input onChange={ c => setGrade(c.currentTarget.value) } defaultValue={grade}  style={{width:80}} /></td>
                                        {/* <td></td> */}
                                        <td>
                                            <Button id={id} onClick={updateButton} type="primary">Update</Button>
                                            <Button onClick={cancelButton} >Cancel</Button>
                                        </td>
                                    </tr>
                                )//return

                            }else{
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{age}</td>
                                        <td>{grade}</td>
                                        {/* <td></td> */}
                                        <td>
                                            <Button id={id} onClick={delStudent} type="primary" danger>Delete</Button>
                                            <Button onClick={  () => editButton(id,name,age,grade)} type="primary">Edit</Button>
                                        </td>
                                    </tr>
                                )//return
                            }//else
                        })//map
                    }
                </tbody>
            </table>
        </div>
    );//return
}//Table

export default Table; 
import React , {useState} from 'react';

import firebase from './firebase';

// import uuid from 'uuid';


const Form = (props) => {

    const [value , setValue] = useState({
        number:'',
        title:'',
        complete:false
    });
    // const [id,setId] = useState(uuid())
    // const [number , setNumber] = useState('');
    

    const onSubbmit = (e) => {
        e.preventDefault();

        const TodoRef = firebase.database().ref('Todo');

        const todo = {
            number:value.number,
            title:value.title,
            complete:false
        };

        TodoRef.push(todo);
        console.log(todo)

        setValue({
            number:'',
            title:''
        })
       
    }

    const handleChange = (e) => {
        const target=e.target;
        const namee=target.name;
        const valuee=target.value;
        setValue({
            ...value,
            [namee]:valuee //ushadir exirr ...value-n obekti heta pti anunnery chbrni
        });
    }



    return(
        <div>
            <form 
            onSubmit={onSubbmit}
            >
                <div>
                    <label>NAME</label><br/>
                    <input type='number' value={value.number} onChange={handleChange} name='number' />
                    <input type='text' value={value.title} onChange={handleChange} name='title'/>
                    {/* name-ru piti lini ayn inch verevum obekti meja tvac */}
                </div>
                <hr/>
                
                <button>ADD</button>
            </form>
        </div>
    )
}
export default  Form;


// import React  from 'react';

// import firebase from './firebase';


// class Form extends React.Component {
//     constructor(){
//         super();
//         this.state ={
//             number:'',
//             title:'',
//             complete:false
//         }
//         this.handleChange=this.handleChange.bind(this);
//         this.onSubbmit=this.onSubbmit.bind(this);
//     }



//         onSubbmit(e) {
//         e.preventDefault();

//         const TodoRef = firebase.database().ref('Todo');

//         const todo = {
//             number:this.state.number,
//             title:this.state.title,
//             complete:false
//         };

//         TodoRef.push(todo);
//         console.log(todo)

//         // setTitle('')
       
//     }

//     handleChange(e) {
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }

    

//     render(){
//         return (
//             <div>
//                 <form 
//             onSubmit={this.onSubbmit}
//             >
//                 <div>
//                     <label>NAME</label><br/>
//                     <input type='number' value={this.state.number} onChange={this.handleChange} name='number' />
//                     <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
//                 </div>
//                 <hr/>
                
//                 <button>ADD</button>
//             </form>
//             </div>
//         )
//     }
// }
// export default Form;
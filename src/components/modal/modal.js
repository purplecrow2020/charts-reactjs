import React from 'react';
import './modal.css';
// import Backdrop from '../backdrop/backdrop';
import Aux from '../../utility/hoc';
import {connect} from 'react-redux';
import Generate from '../generate/generate';
import { IoIosClose } from 'react-icons/io';
import Edit  from '../Edit/Edit';


const modal = (props) => {

    let jsx;
    if(props.showModal){
        if (props.generateChart){
            jsx = (
            
            <Aux>    
                <div className="Modal">
                    <span className="close" onClick={props.closeModal}>
                        <IoIosClose size={30} color='black' />
                    </span>

                    <Generate />
                    {/* <button onClick= {props.closeModal}>Toggle</button> */}

                </div>
            </Aux>
            )
        }
        else if(props.editChart){
            jsx = (

            <Aux>
                <div className="Modal">
                    <span className="close" onClick={props.closeModal}>
                        <IoIosClose size={30} color='black' />
                    </span>

                    <Edit />
                    {/* <button onClick= {props.closeModal}>Toggle</button> */}

                </div>
            </Aux>
            )
        }
        else{
            jsx = null;
        }
    }
    else{
         jsx =null;
    }
    return (
        jsx
    );

}
    // const jsx = props.showModal ? (
    //     <Aux>
    //         {/* <Backdrop  /> */}
    //         <div className="Modal">
    //             <span className = "close" onClick ={props.closeModal}>
    //                 <IoIosClose size={30} color='black'/>
    //             </span>
                
    //             <Generate />
    //         {/* <button onClick= {props.closeModal}>Toggle</button> */}
           
    //         </div>
    //     </Aux>

    // ) : null
    


const mapStateToProps = (state) => {
    return {
        // keys:values
        showModal : state.showModal,
        generateChart :state.generateChart,
        editChart :state.editChart
    
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // key :()=> dispatch({type:'type' , payload:{obj - arguements}})
        closeModal : ()=> dispatch({type :'TOGGLE_MODAL'})
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(modal);
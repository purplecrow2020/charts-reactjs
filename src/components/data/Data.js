import React from 'react';
import {connect} from 'react-redux';
import "./Data.css";

const Data =(props)=>{

    let jsx = props.data_labels.map((label , index)=>{
        return(
            <tr>
                <td>{label}</td>
                <td>{props.data_points[index]}</td>
                <td><button onClick={props.deleteDataHandler.bind(this , [index])}>delete</button></td>
                </tr>
        )
    })

    return(
        <table id="data">
            <tr>
                <th>Label</th>
                <th>Values</th>
                
            </tr>
            {jsx}
            </table>
        
        
        );    
        

}


const mapStateToProps = (state) => {
    return {
        // // keys:values
        // showModal: state.showModal
        data_points : state.newData.data,
        data_labels:  state.newData.labels
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // key :()=> dispatch({type:'type' , payload:{obj - arguements}})
        dataInputChangeHandler: (e) => dispatch({ type: 'INPUT_CHANGE_UPDATE', event: e }),
        currentDataHandler: (e) => dispatch({ type: 'CURRENT_DATA_CHANGE', event: e }),
        addDataHandler: (e) => dispatch({ type: 'ADD_CURRENT_DATA', event: e }),
        deleteDataHandler : (index)=>dispatch({type :'DELETE_DATA_HANDLER' ,delete_index :index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
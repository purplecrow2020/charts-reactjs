import React from 'react';
import {connect} from 'react-redux';
// import Backdrop from '../backdrop/backdrop';
import Aux from '../../utility/hoc';
import '../data/Data.css'
const Edit = (props)=>{

     const data_label_table = props.chartObj.data.datasets[0].data.map((value , index)=>{
       return( 
            <tr>
               <td><input type="text" name="label" key={index} value={props.chartObj.data.labels[index]} onChange={props.dataLabelEditHandler.bind(this, index)} /></td>
                <td><input type="text" name="data" key={index}  value={props.chartObj.data.datasets[0].data[index]} onChange={props.dataPointsEditHandler.bind(this,index)}/></td>
            </tr>
       )
     });
     return(
         <Aux><table>
                {/*  Graph Title */}
                <tr>
                    <td>Title:-</td>
                    <td >
                        <input type="text" name="title" value={props.chartObj.data.datasets[0].label} onChange={props.dataInputChangeHandler} />
                    </td>
                </tr>
                {/* graph type - Bar ,Pie, Line  - bar set default */}

                <tr>
                    <td>Graph Type:-</td>
                    <td >
                        <select name="type"   onChange={props.dataEditHandler} >
                            <option value="Bar">Bar</option>
                            <option value="Line">Line</option>
                            <option value="Pie">Pie</option>
                        </select>
                    </td>
                </tr>
                {/* graph title/label to be set  - handled separately */}
                <tr>
                    <td>Width:-</td>
                    <td >
                        <input type="text" name="width"  value={props.chartObj.width} onChange ={props.dataEditHandler} />
                    </td>
                </tr>
                {/* graph width and height  */}
                 <tr>
                    <td>Height:-</td>
                    <td >
                        <input type="text" name="height"  value ={props.chartObj.height} onChange={props.dataEditHandler}/>
                    </td>
                </tr>
                </table>
                <table id="data">
                 <tr>
                     <th>Label</th>
                     <th>Values</th>

                 </tr>
                {data_label_table}
                </table>
                <button onClick={props.updateEditedChartHandler}>Edit It</button>
       

        </Aux>
    );
}


const mapStateToProps = (state) => {
    return {
        // keys:values
        chartIndex: state.editChartIndex,
        chartObj :state.editableChart
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // key :()=> dispatch({type:'type' , payload:{obj - arguements}})
        // closeModal: () => dispatch({ type: 'TOGGLE_MODAL' })
        dataPointsEditHandler:(index,e)=> dispatch({type: 'DATA_POINT_EDIT_ACTION' ,index :index,event:e }),
        dataLabelEditHandler :(index,e)=>dispatch({type:'DATA_LABEL_EDIT_ACTION' , index:index , event:e}),
        updateEditedChartHandler:()=>dispatch({type:'UPDATE_EDITED_CHART'}),
        dataEditHandler:(e)=>dispatch({type:'CONFIG_DATA_EDIT_ACTION',event : e})

    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
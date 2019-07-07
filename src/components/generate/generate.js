import React from 'react';
import {connect} from 'react-redux';
import Data from '../data/Data';
import './generate.css';
import Aux from '../../utility/hoc';

const generate =(props)=>{
    return(
       <Aux>
            <table>
                {/* <p>{props.width}</p>
                <p>{props.height}</p>
                <p>{props.chartType}</p>
                <p>{props.current_data_point}</p>
                <p>{props.current_data_label}</p> */}

                {/*  Graph Title */}
                <tr>
                    <td>Title:-</td>
                    <td >
                        <input type="text" name="title" onChange={props.dataInputChangeHandler} />
                    </td>
                </tr>
                {/* graph type - Bar ,Pie, Line  - bar set default */}

                <tr>
                    <td>Graph Type:-</td>
                    <td >
                        <select name="chartType" onChange={props.dataInputChangeHandler} >
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
                        <input type="text" name="width" onChange ={props.dataInputChangeHandler} />
                    </td>
                </tr>
                {/* graph width and height  */}
                 <tr>
                    <td>Height:-</td>
                    <td >
                        <input type="text" name="height" onChange={props.dataInputChangeHandler}/>
                    </td>
                </tr>
                {/* Each inidividual data point to be handled individually additions */}
                <td>Data_Label:-</td>
                <td >
                    <input type="text" name="current_data_label" value={props.current_data_label} onChange={props.currentDataHandler} />
                </td>
                <td>Data:-</td>
                <td >
                    <input type="text" name="current_data_point" value={props.current_data_point} onChange={props.currentDataHandler} />
                </td>
                
                {/* Add the data points and current labels */}
                <td>
                <button onClick= {props.addDataHandler}>Add</button>

                </td>
                <tr>

                    
                </tr>
                
                
            </table>
        <div className="dataTable">
            <Data />

        </div>

        <button  className="generateChartButton" onClick={props.createChartObject}>get - Chart</button>

        
</Aux>



    );
}

const mapStateToProps = (state) => {
    return {
        // // keys:values
        // showModal: state.showModal
        width :state.newChart.width,
        chartType :state.newChart.chartType,
        height:state.newChart.height,
        current_data_point : state.current_data_point,
        current_data_label :state.current_data_label
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // key :()=> dispatch({type:'type' , payload:{obj - arguements}})
        dataInputChangeHandler: (e) => dispatch({ type: 'INPUT_CHANGE_UPDATE' , event : e }),
        currentDataHandler : (e) => dispatch({type:'CURRENT_DATA_CHANGE' ,event :e}),
        addDataHandler :(e) => dispatch({type:'ADD_CURRENT_DATA' , event: e}),
        createChartObject:()=>dispatch({type:'PREPARE_CHART_OBJECT'})
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(generate);
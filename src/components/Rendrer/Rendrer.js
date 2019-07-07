import React from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import "./rendrer.css";
import { IoMdCreate } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";



const Rendrer =(props)=>{

    let jsx = props.charts.length > 0 ? props.charts.map((chartObj,index) => {
        switch(chartObj.type){
            case 'Bar':
                return (
                   
                    <div className = "box" key = {index} >
                       
                    <Bar
                        data={chartObj.data}
                        width={parseInt(chartObj.width)}
                        height={parseInt(chartObj.height)}
                        options={chartObj.options}
            
                    />
                        <button  className="editButton" onClick={props.openEditModal.bind(this,  index )}  >Edit </button>
                        <button className ="editButton" onClick ={props.deleteModal.bind(this, index)}>Delete </button>
                    {/* <span  className="config-icons" onClick={props.openEditModal.bind(this, {index})}>
                            <IoMdCreate />
                     </span>
                        <span className="config-icons" onClick={props.openEditModal.bind(this, { index })}>
                            <IoMdRemoveCircle />
                        </span> */}
                    
                    </div>
                );
            case 'Pie':
                return (
                    <div className="box" key={index} >
                    <Pie
                        data={chartObj.data}
                        width={parseInt(chartObj.width)}
                        height={parseInt(chartObj.height)}
                        options={chartObj.options}
                    />
                        {/* <button onClick={props.openEditModal.bind(this, index)}>Edit</button> */}
                        <button className="editButton" onClick={props.openEditModal.bind(this, index)}  >Edit </button>

                        {/* <span className="config-icons">
                            <IoMdCreate />
                        </span>
                        <span className="config-icons">
                            <IoMdRemoveCircle />
                        </span> */}
                    </div>
                );
            case 'Line':
                return (
                    <div className="box" key={index} >
                    <Line
                        data={chartObj.data}
                        width={parseInt(chartObj.width)}
                        height={parseInt(chartObj.height)}
                        options={chartObj.options}
                    />
                        <button className="editButton" onClick={props.openEditModal.bind(this, index)}  >Edit </button>

                        {/* <button onClick={props.openEditModal.bind(this, index)}>Edit</button>
                        <span className="config-icons">
                            <IoMdCreate />
                        </span>
                        <span className="config-icons">
                            <IoMdRemoveCircle />
                        </span> */}
                    </div>
                );
            default:
                return (
                    <div className="box" key={index} >
                    <Bar
                        data={chartObj.data}
                        width={parseInt(chartObj.width)}
                        height={parseInt(chartObj.height)}
                        options={chartObj.options}
                    />
                        <button className="editButton" onClick={props.openEditModal.bind(this, index)}  >Edit </button>

                        {/* <button onClick={props.openEditModal.bind(this, index)}>Edit</button>
                        <span className="config-icons">
                            <IoMdCreate />
                        </span>
                        <span className="config-icons">
                            <IoMdRemoveCircle />
                        </span> */}
                    </div>
                );

        }
        
        
    }) : "<h3>Create & Project Data with Graphs</h3>";
    return(jsx);

}


const mapStateToProps = (state) => {
    return {
        // // keys:values
        // showModal: state.showModal
       charts :state.charts
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // key :()=> dispatch({type:'type' , payload:{obj - arguements}})
       openEditModal: (index) => dispatch({ type: 'OPEN_EDIT_MODAL', chart_index:index }),
       deleteModal :(index) => dispatch({type:'DELETE_CHART_ACTION', delete_chart_index :index})
        
    }


}

export default connect(mapStateToProps,mapDispatchToProps)(Rendrer);


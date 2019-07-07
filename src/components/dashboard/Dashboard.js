import React, { Component } from 'react';
import {connect} from 'react-redux';
import  Modal from '../modal/modal';
import Rendrer from '../Rendrer/Rendrer';
import { IoIosAdd} from 'react-icons/io';
import "./Dashboard.css";
import Header from '../Header/Header';
import Aux from '../../utility/hoc';
class Dashboard extends Component {
    render() {
        return (
            <Aux>
            <Header />
            <div>
                <span className="float" onClick ={this.props.createNewChart}>
                    <IoIosAdd  width="20" className="my-float" />
                </span>
                <Rendrer/>
                <Modal />
            </div>
            </Aux>

        )
    }
}


const mapStateToProps = (state)=>{
    return {
        // keys:values
        showModal: state.showModal,
        // generateChart : state.generateChart
    }
    
}

const mapDispatchToProps =(dispatch)=>{
    return{
        // key : dispatch({type:'type' , payload:{obj - arguements}})
        createNewChart: () => dispatch({ type: 'CREATE_NEW_CHART' })

    }
    

}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
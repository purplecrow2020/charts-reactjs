import React from 'react';
import './backdrop.css';
import {connect} from 'react-redux';

const backdrop = (props) => {
    return (<div className="Backdrop" onClick={props.closeModal}></div>);
}

const mapStateToProps = (state) => {
    return {
        // keys:values
        // showModal: state.showModal
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // key :()=> dispatch({type:'type' , payload:{obj - arguements}})
        closeModal: () => dispatch({ type: 'TOGGLE_MODAL' })
    }


}

export default connect(mapStateToProps , mapDispatchToProps)(backdrop);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
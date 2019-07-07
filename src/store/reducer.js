import { initialState, newDataInitialState, newChartInitialState} from '../utility/initialState';
import colorGenerator from '../utility/colorGenerator';
// const initialStates ={
//     showModal: true
// }

const reducer = (state = initialState,action)=>{
//change to switch case: left
//double action start button intentionally 
    if(action.type === 'TOGGLE_MODAL'){
        return{
            ...state , 
            showModal:!state.showModal,
            generatechart : false,
            editChart:false

        }
    }
    if (action.type === 'INPUT_CHANGE_UPDATE'){
        console.log('changing input');
        return{
            // ...state , ...
            // ...state, showModal: true
            ...state , newChart :{...state.newChart , [action.event.target.name] : action.event.target.value} 

        }
    }
    if (action.type === 'CURRENT_DATA_CHANGE'){
        console.log('new data point inserted');
        return{
            ...state, [action.event.target.name]: action.event.target.value
        }
        
    
    }
    // '' case yet to be detected
    if(action.type === 'ADD_CURRENT_DATA'){
        action.event.preventDefault();
        console.log('erererererer');
        if(state.current_data_point !== undefined && state.current_data_label !==undefined){
            return {
                ...state , newData :{
                                 ...state.newData ,
                                  data : state.newData.data.concat(state.current_data_point),
                                  labels:state.newData.labels.concat(state.current_data_label),
                                  backgroundColor:state.newData.backgroundColor.concat(colorGenerator()),
                                  borderColor: state.newData.borderColor.concat(colorGenerator())     
                                },
                                current_data_label :'',
                                current_data_point:''
            }
        }
       
    }
    if (action.type === 'PREPARE_CHART_OBJECT'){
        let chartObj = {
            
                type :state.newChart.chartType,
                width:state.newChart.width,
                height:state.newChart.height,
                options:{ maintainAspectRatio: false },
                data:{
                    labels : state.newData.labels,
                    datasets:[{
                        label :state.newChart.title ,
                        data: state.newData.data,
                        borderColor:state.newData.borderColor,
                        backgroundColor:state.newData.backgroundColor,
                        borderWidth:1
                    }]
                }
            

        }

        return {
            ...state , 
            charts: state.charts.concat(chartObj),
            newData : newDataInitialState,
            newChart: newChartInitialState,
            showModal: !state.showModal
        }
    }
    if(action.type === 'CREATE_NEW_CHART'){

        return {
            ...state,
            newData: newDataInitialState,
            newChart: newChartInitialState,
            showModal: !state.showModal,
            generateChart:true

        }
    }
    if(action.type === 'DELETE_DATA_HANDLER'){
        return{
            ...state,
            newData : {...state.newData ,
                        data :[ ...state.newData.data.slice(0,action.delete_index) ,
                                 ...state.newData.data.slice(action.delete_index+1)],
                        labels: [...state.newData.labels.slice(0, action.delete_index),
                        ...state.newData.labels.slice(action.delete_index + 1)]
        }
    }
}
    if (action.type === 'OPEN_EDIT_MODAL'){
        console.log('open edit' , action.chart_index)
        console.log(state.editableChart)
        return{
            ...state , 
            editChart:true,
            showModal:true,
            generateChart:false,
            editChartIndex:action.chart_index,
            editableChart : {
                ...state.charts[action.chart_index]
            }
        }
    }
    if (action.type === 'DATA_POINT_EDIT_ACTION'){

        return{
            ...state, editableChart: {
                ...state.editableChart, data: {
                    ...state.editableChart.data , datasets: [{
                        ...state.editableChart.data.datasets[0], data: [...state.editableChart.data.datasets[0].data.slice(0, action.index), action.event.target.value, ...state.editableChart.data.datasets[0].data.slice(action.index+1) ]
            }]}}
    
        }
    }
    if (action.type === 'DATA_LABEL_EDIT_ACTION') {
// not working on a edge case - alternative to be thought
        return {
            ...state, editableChart: {
                ...state.editableChart, data: {
                    ...state.editableChart.data, labels: [...state.editableChart.data.labels.slice(0, action.index), action.event.target.value, ...state.editableChart.data.labels.slice(action.index + 1)]}
                }
            }

        
    }
    if (action.type ==='UPDATE_EDITED_CHART'){
        console.log(state.editableChart)
        console.log(state.editChartIndex)
        const newCharts =[...state.charts]
        newCharts[state.editChartIndex] =state.editableChart
        return {...state , 
            charts :newCharts,editChart :false,generateChart:false
        }
    }
    if (action.type === 'CONFIG_DATA_EDIT_ACTION'){
        return{...state , editableChart : {...state.editableChart  , [action.event.target.name] : action.event.target.value}}
    }
    if (action.type === 'DELETE_CHART_ACTION') {
        return { ...state, charts :state.charts.filter((item ,index)=>{
            return index !== action.delete_chart_index;
        }) }
    }
    return state;

}

export default reducer;
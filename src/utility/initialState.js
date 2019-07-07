const newDataInitialState = {
    label: null,
    data: [],
    backgroundColor: [],
    borderColor: [],
    labels: []

}

const newChartInitialState= {

    chartType: 'Bar',
    width: null,
    height: null,
    title: null
}


const initialState = {
    generateChart: false,
    showModal:true,
    editChart:false,
    editChartIndex:null,
    editableChart:null,
    charts: [],
    newChart: {
        ...newChartInitialState
    },
    newData: {
        ...newDataInitialState
    },
    current_data_label: '',
    current_data_point: '',
    current_editable_chart:null

}


export { initialState  , newDataInitialState , newChartInitialState}; 
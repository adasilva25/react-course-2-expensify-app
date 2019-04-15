import React from 'react'
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        // this.props.dispatch(setStartDate(startDate))
        // this.props.dispatch(setEndDate(endDate))
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    };
    onTextChange = (e) => {
        // this.props.dispatch(setTextFilter(e.target.value))
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if (e.target.value === 'date'){
            // this.props.dispatch(sortByDate())
            this.props.sortByDate()
        }
        else if (e.target.value === 'amount'){
            // this.props.dispatch(sortByAmount())
            this.props.sortByAmount()
        }
    }
    render(){
        return (
            <div>
                <input type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="start"
                    endDateId="end"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (setEndDate) => dispatch(setEndDate(setEndDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear(); //props.date.toLocaleString('en-US', {year: 'numeric'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'}); //or set it to 'numeric'

    return (
        <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
    )
}

export default ExpenseDate
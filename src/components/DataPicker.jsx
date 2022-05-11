import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const DataPicker = ({date, setDateAction}) => {
    return (
        <Calendar onChange={setDateAction} value={date} />
    );
}

export default DataPicker;
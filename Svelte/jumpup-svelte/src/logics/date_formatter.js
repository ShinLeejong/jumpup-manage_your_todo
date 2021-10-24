import day_converter from "./day_converter";

const Date_formatter = (_obj_date) => {
    const {year, month, date, day} = _obj_date;

    const converted_day = day_converter(day);

    return `${year}년 ${month}월 ${date}일, ${converted_day}요일`;
}

export default Date_formatter;
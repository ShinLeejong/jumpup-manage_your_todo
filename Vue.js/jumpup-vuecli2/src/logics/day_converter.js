export default (day) => {
    let _ret;

    switch (day) {
        case 6: 
            _ret = "토";
            break;
        case 5: 
            _ret = "금";
            break;
        case 4: 
            _ret = "목";
            break;
        case 3: 
            _ret = "수";
            break;
        case 2: 
            _ret = "화";
            break;
        case 1: 
            _ret = "월";
            break;
        case 0: 
            _ret = "일";
            break;
        default:
            console.error("error occurred while converting day - day_converter.js");
    }

    return _ret;
}
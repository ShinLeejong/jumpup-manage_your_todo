const Get_date = () => {
    let today = new Date();   
    
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();

    return {
        year,
        month,
        date,
        day
    };

}
export default Get_date;
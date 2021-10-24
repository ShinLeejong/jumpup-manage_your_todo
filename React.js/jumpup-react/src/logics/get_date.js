export default () => {
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
    }
}
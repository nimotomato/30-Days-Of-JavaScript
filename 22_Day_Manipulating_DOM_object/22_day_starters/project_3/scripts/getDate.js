let getDate = () => {
    let d = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    
    date = date < 10 ? '0' + date.toString(): date;
    hour = hour < 10 ? '0' + hour.toString(): hour;  
    mins = mins < 10 ? '0' + mins.toString(): mins;
    secs = secs < 10 ? '0' + secs.toString(): secs;
    
    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}:${secs}`;
  }

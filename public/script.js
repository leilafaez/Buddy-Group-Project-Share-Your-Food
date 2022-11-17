
function logSubmit(event) {
     event.preventDefault();
     let name=document.getElementById("name").value;
     let address=document.getElementById("address").value;
     let date=document.getElementById("date").value;
     let description=document.getElementById("description").value
     let time=document.getElementById("time").value
    const record={
      name:name,
      address:address,
      date:date,
      time:time,
      description:description

    } 
  console.log(record);
  
  }
  
  const form = document.getElementById('form-page');
  form.addEventListener('submit', logSubmit);
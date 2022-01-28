        let employees=[{id:101,name:"AAA",sal:45000},{id:102,name:"BBB",sal:55000},{id:103,name:"CCC",sal=65000}]
        function displaydata(){
            let rows=""
            employees.forEach((emp)=>{
                rows=rows+`<tr>
                               <td>${emp.Id}</td>
                               <td>${emp.name}</td>
                               <td>${emp.sal}</td>
                               </tr>`
            })
        document.getElementById('tdata').innerHTML=rows
        }
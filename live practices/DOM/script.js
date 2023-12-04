let dbox = document.createElement('div');
dbox.id = 'db';
dbox.style.border = "5px solid red";

let para = document.createElement('p');
para.className = 'pg';
para.innerText = 'hello im kuralnithi';

dbox.append(para);

document.body.append(dbox);

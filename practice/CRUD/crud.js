let responce = fetch('http://localhost:3000/posts/').then(res=>(res.json())).then(res=>console.table(res)).catch(err=>console.log(err));


document.querySelectorAll('ld').forEach((item)=>{
    let data1=document.createElement('div');
    data1.style.width='100%';
    data1.style.borderStyle="solid";
    data1.style.borderColor="#000";
    data1.style.borderWidth="1px";
    item.appendChild(data1);
});
document.querySelectorAll('ldd').forEach((item)=>{
    let data1=document.createElement('div');
    data1.style.width='100%';
    data1.style.borderStyle="dotted";
    data1.style.borderColor="#000";
    data1.style.borderWidth="wpx";
    item.appendChild(data1);
});
/* DELETE ELEMENT */
const onDeleteImg = (id) => {
    const deleteEl = brendsImg.filter((item) => item.id !== id)
    setBrendsImg(deleteEl);
}
<img onClick={() => onDeleteImg(item.id)} />


/* SEARCH ELEMENT */
function onChangeActive(index) {
    setActive(index);
}
<button onClick={() => onChangeActive(index)}>on</button>
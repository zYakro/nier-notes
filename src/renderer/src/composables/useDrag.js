export const useDrag = () => {
  function handleDragStart(info, event) {
    event.dataTransfer.setData('text/plain', JSON.stringify(info))
    event.dataTransfer.setDragImage(event.target, 0, 0);
  }

  function clearDataOnDragEnd(event) {
    event.dataTransfer.clearData();
  }

  function handleDrop(event) {
    event.preventDefault();
    const jsonData = event.dataTransfer.getData('text/plain');
    const data = JSON.parse(jsonData);
    return data;
  }

  return {
    handleDragStart,
    clearDataOnDragEnd,
    handleDrop
  }
}
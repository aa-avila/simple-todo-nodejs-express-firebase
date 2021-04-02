// Marcar como realizada
const handleDoTask = async (id) => {
  try {
    const response = await axios.put("/do-task/" + id); // solicitud al servidor
    console.log('axios OK!');
    console.log('El servidor respondio:', response.data);
    document.location.reload();// recargamos documento para ver los cambios
  } catch (error) {
    console.error(error);
  }
};

// Marcar como no-realizada
const handleUndoTask = async (id) => {
  try {
    const response = await axios.put("/undo-task/" + id); // solicitud al servidor
    console.log('axios OK!');
    console.log('El servidor respondio:', response.data);
    document.location.reload();// recargamos documento para ver los cambios
  } catch (error) {
    console.error(error);
  }
};

// Eliminar atrea
const handleDeleteTask = async (id) => {
  try {
    const response = await axios.delete("/delete-task/" + id); // solicitud al servidor
    console.log('axios OK!');
    console.log('El servidor respondio:', response.data);
    document.location.reload();// recargamos documento para ver los cambios
  } catch (error) {
    console.error(error);
  }
};
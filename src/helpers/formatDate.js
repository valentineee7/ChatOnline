
export const formatDate = messageDate => {
    const date = new Date(messageDate);

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let time = hour + ':' + minutes;


    const option = {
        month : 'long',
        day : 'numeric'
    }
    
    const newDate = date.toLocaleDateString('es-ES', option);

        return newDate + '-' + time;
    //console.log(newDate);
}
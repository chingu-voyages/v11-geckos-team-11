import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'

const toast = {
  error: (message, title = 'Error') => {
    return iZtoast.error({
      title: title,
      message: message,
      position: 'bottomRight'
    });
  },
  success: (message, title = 'Success') => {
    return iZtoast.success({
      title: title,
      message: message,
      position: 'bottomRight'
    });
  }
};

export default toast;
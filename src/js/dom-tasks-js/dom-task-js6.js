import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
//TODO: № 6 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік відбувається
// поза зоною елемента
//

const box = document.getElementById('place');
document.addEventListener('click', onClick);

function onClick(event) {
  const target = event.target;
  if (target.id === 'place') {
    iziToast.show({
      message: '✅ Click inside the box',
      color: 'green',
      position: 'topRight',
      progressBar: false,
      timeout: 1000,
      close: false,
    });
  } else {
    iziToast.show({
      message: '❌ Click outside the box',
      color: 'red',
      position: 'topRight',
      progressBar: false,
      timeout: 1000,
      close: false,
    });
  }
}

const previewImage = document.getElementById('preview-image');
const preview = document.querySelector('.preview');

const input = document.getElementById('imageUpload');


fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.addEventListener('load', (event) => {
      previewImage.setAttribute('src', event.target.result);
      preview.style.display = 'block';
    });
  
    reader.readAsDataURL(file);
  });
// import React, { useState } from 'react'

// export default function UploadProPicForm() {
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);
//   const [disableSubmit, setDisableSubmit] = useState(false);
//   const [fileError, setFileError] = useState(false);

//   const handleFileReader = (e, file) => {
//     const dataUrl = e.target.result;

//     const allowedFileTypes = ['pdf', 'png', 'jpg', 'jpeg'];
//     const stopIdx = dataUrl.indexOf(';');
//     const fileType = dataUrl.slice(11, stopIdx)

//     if (!allowedFileTypes.includes(fileType)) {
//       setImage(null)
//       setImageUrl(null);
//       setFileError('Must upload a PDF, PNG, JPG, or JPEG image.')
//       return
//     }
//     setImageUrl(dataUrl)
//     setImage(file);
//     setFileError(null);
//   }

//   return (
//     <div>UploadProPicForm</div>
//   )
// }


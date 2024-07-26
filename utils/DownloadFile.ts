import { saveAs } from "file-saver"

export const downloadFile = (fileName: string) => {
  const filePath = `/${fileName}`;

  fetch(filePath)
    .then(response => response.blob())
    .then(blob => {
      saveAs(blob, fileName);
    })
    .catch(error => console.error('Download error:', error));
};

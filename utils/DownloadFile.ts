export const downloadFile = (fileName: string) => {
    const filePath = `/${fileName}`;
    
    fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Download error:', error));
  };
  
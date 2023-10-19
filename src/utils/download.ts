export const onDownload = (file: string) => {
    const link = document.createElement('a');
    link.href = `/docs/${file}`;
    link.download = `${file}`;
    link.dispatchEvent(new MouseEvent('click'));
  }
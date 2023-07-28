// Receber os dados do arquivo obtido na API e fazer o download do documento.
// data => contem os dados do arquivo em formato byte
//type => tipo do arquibo que deverá ser descarregadi no navegador ('PDF', 'EXCEL')
// filename => nomde do arquivo

export function downloadFile(data: any, type: string, filename: string) {
    var blob = null;

    if (type == 'PDF') {
        blob = new Blob([data], { type: 'application/pdf' });
        filename += '.pdf';
    }
    else if (type == 'EXCEL') {
        blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        filename += '.xlsx';
    }

    //criando o mecanismo para download do arquivo
    var url = window.URL.createObjectURL(blob as Blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = filename;
    //download do arquivo
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.removeChild(downloadLink);
}
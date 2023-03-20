import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import React from 'react';
import ResumeFormat1 from './ResumeFormat1';

function Download() {
    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };
    return (
        <div className='download__Page'>
            <ResumeFormat1 reference={printRef} />
            <button type="button" onClick={handleDownloadPdf}>
                Download as PDF
            </button>
            <div ref={printRef}>Hello</div>
        </div>
    );
}

export default Download;
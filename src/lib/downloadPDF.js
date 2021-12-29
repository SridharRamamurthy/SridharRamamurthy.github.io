import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Tabs from '../tabs'


function DownloadPdf() {

    function handleClick() {
        const input = document.getElementById('root');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 10, 10, 100,80);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;

    }

    return (
        <div className="flex-container justify-content-end"
            style={{ flex: "auto", cursor: "pointer" }}
            onClick={handleClick} >
            <div className="text-white" >
                <i className=" fa fa-download fa-1x p-2"></i>
            </div>
        </div>
    );
}

export default DownloadPdf
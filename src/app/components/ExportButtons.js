import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';

const ExportButtons = ({ data }) => {
  const handlePDFExport = () => {
    const doc = new jsPDF();
    doc.text('Payout Report', 10, 10);
    data.forEach((item, idx) => {
      doc.text(`Author: ${item.author}, Article: ${item.articleTitle}, Payout: $${item.payoutRate * item.articleCount}`, 10, 20 + idx * 10);
    });
    doc.save('payout_report.pdf');
  };

  return (
    <div className="flex space-x-4">
      <CSVLink data={data} filename="payout_report.csv">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Export to CSV</button>
      </CSVLink>
      <button onClick={handlePDFExport} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Export to PDF
      </button>
    </div>
  );
};

export default ExportButtons;

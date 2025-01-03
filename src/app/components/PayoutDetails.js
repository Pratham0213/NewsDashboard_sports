import { useState } from 'react';

const PayoutDetails = ({ data }) => {
  const [editingIdx, setEditingIdx] = useState(null);
  const [editedRate, setEditedRate] = useState(0);

  const handleEditClick = (idx) => {
    setEditingIdx(idx);
    setEditedRate(data[idx].payoutRate);
  };

  const handleSaveClick = (idx) => {
    data[idx].payoutRate = editedRate;  // Update rate
    setEditingIdx(null);  // Exit editing mode
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Payout Details</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th>Author</th>
            <th>Article</th>
            <th>Payout Rate</th>
            <th>Total Payout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td>{item.author}</td>
              <td>{item.articleTitle}</td>
              <td>
                {editingIdx === idx ? (
                  <input
                    type="number"
                    value={editedRate}
                    onChange={(e) => setEditedRate(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  `$${item.payoutRate}`
                )}
              </td>
              <td>{`$${item.payoutRate * item.articleCount}`}</td>
              <td>
                {editingIdx === idx ? (
                  <button
                    onClick={() => handleSaveClick(idx)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(idx)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayoutDetails;

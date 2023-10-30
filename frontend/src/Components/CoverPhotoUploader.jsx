import React, { useState } from 'react';

const CoverPhotoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // You can perform additional actions with the selected file, like uploading it to a server.
  };

  return (
    <div className="w-full md:w-1/2 mx-auto mt-8 p-4">
      <div className="bg-white border rounded-lg shadow-lg">
        <div className="p-4">
          <label className="text-gray-600 mx-2">Upload a Cover Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 "
          />
        </div>

        {selectedFile && (
          <div className="p-4">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Cover Photo Preview"
              className="w-full h-72"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverPhotoUploader;

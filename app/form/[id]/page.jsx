"use client";
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function DynamicForm() {
  const { id } = useParams();

  // Service configurations based on the provided services object
  const serviceConfig = {
    'info': {
      title: 'Form',
      description: 'Our Xactimate Roof Estimate  service delivers highly accurate, industry-standard cost estimates for restoration, repair, and insurance claims. Leveraging the latest Xactimate software, our team meticulously prepares detailed reports that cover every aspect of your project, from material costs to labor expenses.',
      fields: ['address', 'email', 'coordinates', 'damageDetails', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'damageDetails', 'photos'],
    },
    'xactimate-estimate': {
      title: 'Xactimate Roof Estimate ',
      description: 'Our Xactimate Roof Estimate  service delivers highly accurate, industry-standard cost estimates for restoration, repair, and insurance claims. Leveraging the latest Xactimate software, our team meticulously prepares detailed reports that cover every aspect of your project, from material costs to labor expenses.',
      fields: ['address', 'email', 'coordinates', 'damageDetails', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'damageDetails', 'photos'],
    },
    'xactimate-roof-esx': {
      title: 'Xactimate Roof ESX',
      description: 'Our Xactimate Roof ESX service provides precise roof sketches and ESX files designed for insurance claims and construction projects. Using advanced Xactimate tools, we create detailed diagrams that include pitch, area, and line measurements.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'roofMaterial', 'roofPitch', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
    'xactimate-3d-wall-sketch': {
      title: 'Xactimate 3D Wall Sketch',
      description: 'Transform your property restoration or remodeling project with our Xactimate 3D Wall Sketch service. We create precise, three-dimensional wall sketches using Xactimate software, offering a clear visualization of interior and exterior structures.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
    'matterport-to-xactimate-sketch': {
      title: 'Matterport to Xactimate Sketch',
      description: 'Bridge the gap between advanced scanning technology and industry-standard estimation with our Matterport to Xactimate Sketch service. We convert detailed Matterport 3D scans into accurate Xactimate sketches.',
      fields: ['address', 'email', 'coordinates', 'matterportLink', 'photos', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'matterportLink'],
    },
    'xactimate-interior-estimate': {
      title: 'Xactimate Interior Estimate',
      description: 'Our Xactimate Interior Estimate service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
    'roof-report': {
      title: 'roof Report',
      description: 'Our roof-report service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
    'Symbility-roof-sketch': {
      title: 'Symbility roof sketch',
      description: 'Our Symbility roof sketch service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
    'Symbility-Sketch-XML': {
      title: 'Symbility Sketch XML',
      description: 'Our Symbility Sketch XML service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
    'Aerial-Roof-Measurements-PDF': {
      title: 'Aerial Roof Measurements PDF',
      description: 'Our Aerial Roof Measurements-PDF service offers comprehensive, high-precision measurement reports for exterior siding projects. Using advanced aerial imagery, we provide detailed data on surface areas, dimensions, and material requirements.',
      fields: ['address', 'email', 'coordinates', 'measurementSource', 'photos', 'measurementFiles', 'specialInstructions'],
      required: ['address', 'email', 'coordinates', 'photos'],
    },
  };

  // Fallback to a default service if the ID is invalid
  const currentService = serviceConfig[id] || serviceConfig['xactimate-roof-esx'];

  const [formData, setFormData] = useState({
    address: '',
    email: '',
    coordinates: '',
    measurementSource: currentService.fields.includes('measurementSource') ? '' : undefined,
    roofMaterial: currentService.fields.includes('roofMaterial') ? '' : undefined,
    roofPitch: currentService.fields.includes('roofPitch') ? '' : undefined,
    matterportLink: currentService.fields.includes('matterportLink') ? '' : undefined,
    damageDetails: currentService.fields.includes('damageDetails') ? '' : undefined,
    specialInstructions: currentService.fields.includes('specialInstructions') ? '' : undefined,
  });

  const [photos, setPhotos] = useState([]);
  const [measurementFiles, setMeasurementFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Function to create preview URLs for images
  const createPreviewUrl = (file) => {
    return URL.createObjectURL(file);
  };

  // Function to check if file is an image
  const isImageFile = (file) => {
    return file.type.startsWith('image/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  const handleMeasurementUpload = (e) => {
    setMeasurementFiles(Array.from(e.target.files));
  };

  // Function to remove photo
  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  // Function to remove measurement file
  const removeMeasurementFile = (index) => {
    setMeasurementFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadToCloudinary = async (files) => {
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dbdxtwf6n/upload';
    const uploadPreset = 'my_unsigned_preset';
    const urls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      try {
        const response = await fetch(cloudinaryUrl, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.secure_url) {
          urls.push(data.secure_url);
        } else {
          throw new Error('Cloudinary upload failed');
        }
      } catch (err) {
        throw new Error(`Failed to upload ${file.name}: ${err.message}`);
      }
    }
    return urls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Validate required fields
      for (const field of currentService.required) {
        if (field !== 'photos' && !formData[field]) {
          throw new Error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        }
      }
      if (currentService.required.includes('photos') && photos.length === 0) {
        throw new Error('Please upload at least one photo');
      }

      // Upload files
      const photoUrls = photos.length > 0 ? await uploadToCloudinary(photos) : [];
      const measurementFileUrls = measurementFiles.length > 0 ? await uploadToCloudinary(measurementFiles) : [];

      // Create data with new order: timestamp first, then email, order status, then other data
      const sheetData = {
        Timestamp: new Date().toISOString(),
        Email: formData.email,
        'Order Status': 'pending',
        Address: formData.address,
        Coordinates: formData.coordinates,
        'Measurement Source': formData.measurementSource || '',
        'Roof Material': formData.roofMaterial || '',
        'Roof Pitch': formData.roofPitch || '',
        'Matterport Link': formData.matterportLink || '',
        'Damage Details': formData.damageDetails || '',
        'Special Instructions': formData.specialInstructions || '',
        Photos: photoUrls.join(','),
        'Measurement Files': measurementFileUrls.join(','),
        Service: currentService.title,
      };

      // Remove only undefined values, keep empty strings for required fields
      const cleanData = Object.fromEntries(
        Object.entries(sheetData).filter(([key, value]) => value !== undefined)
      );

      console.log('Sending data to SheetDB:', cleanData);

      // Send to SheetDB - SheetDB expects an array of objects
      const response = await fetch('https://sheetdb.io/api/v1/jwl6bash8jjl0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([cleanData]),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('SheetDB Error:', errorText);
        throw new Error(`Failed to save data to Google Sheet: ${response.status} ${response.statusText}`);
      }

      alert(`Form submitted successfully for ${currentService.title}!`);
      // Reset form
      setFormData({
        address: '',
        email: '',
        coordinates: '',
        measurementSource: currentService.fields.includes('measurementSource') ? '' : undefined,
        roofMaterial: currentService.fields.includes('roofMaterial') ? '' : undefined,
        roofPitch: currentService.fields.includes('roofPitch') ? '' : undefined,
        matterportLink: currentService.fields.includes('matterportLink') ? '' : undefined,
        damageDetails: currentService.fields.includes('damageDetails') ? '' : undefined,
        specialInstructions: currentService.fields.includes('specialInstructions') ? '' : undefined,
      });
      setPhotos([]);
      setMeasurementFiles([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            {currentService.title}
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {currentService.description}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Address */}
            {currentService.fields.includes('address') && (
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required={currentService.required.includes('address')}
                />
              </div>
            )}

            {/* Email */}
            {currentService.fields.includes('email') && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required={currentService.required.includes('email')}
                />
              </div>
            )}

            {/* Coordinates */}
            {currentService.fields.includes('coordinates') && (
              <div>
                <label htmlFor="coordinates" className="block text-sm font-medium text-gray-700">
                  Coordinates (Latitude, Longitude) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="coordinates"
                  name="coordinates"
                  value={formData.coordinates}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="e.g., 40.7128, -74.0060"
                  required={currentService.required.includes('coordinates')}
                />
              </div>
            )}

            {/* Measurement Source */}
            {currentService.fields.includes('measurementSource') && (
              <div>
                <label htmlFor="measurementSource" className="block text-sm font-medium text-gray-700">
                  Measurement Source (e.g., EagleView/Hover report, PDF, notes)
                </label>
                <textarea
                  id="measurementSource"
                  name="measurementSource"
                  value={formData.measurementSource}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <label htmlFor="measurementFiles" className="block mt-2 text-sm font-medium text-gray-700">
                  Upload Measurement Files (PDF, images, etc.)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="measurementFiles"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="measurementFiles"
                          name="measurementFiles"
                          type="file"
                          multiple
                          onChange={handleMeasurementUpload}
                          className="sr-only"
                          accept="image/*,.pdf"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                                         <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                   </div>
                 </div>
                 {measurementFiles.length > 0 && (
                   <div className="mt-4">
                     <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                       {measurementFiles.map((file, index) => (
                         <div key={index} className="relative border border-gray-200 rounded-lg p-3 bg-gray-50">
                           {isImageFile(file) ? (
                             <div className="space-y-2">
                               <img
                                 src={createPreviewUrl(file)}
                                 alt={file.name}
                                 className="w-full h-24 object-cover rounded"
                               />
                               <p className="text-xs text-gray-600 truncate">{file.name}</p>
                             </div>
                           ) : (
                             <div className="flex items-center space-x-2">
                               <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                 <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                               </svg>
                               <p className="text-xs text-gray-600 truncate flex-1">{file.name}</p>
                             </div>
                           )}
                           <button
                             type="button"
                             onClick={() => removeMeasurementFile(index)}
                             className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                           >
                             ×
                           </button>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
               </div>
             )}

            {/* Matterport Link */}
            {currentService.fields.includes('matterportLink') && (
              <div>
                <label htmlFor="matterportLink" className="block text-sm font-medium text-gray-700">
                  Matterport Scan Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="matterportLink"
                  name="matterportLink"
                  value={formData.matterportLink}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="https://my.matterport.com/show/..."
                  required={currentService.required.includes('matterportLink')}
                />
              </div>
            )}

            {/* Damage Details */}
            {currentService.fields.includes('damageDetails') && (
              <div>
                <label htmlFor="damageDetails" className="block text-sm font-medium text-gray-700">
                  Damage Details (e.g., type, extent, materials involved) <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="damageDetails"
                  name="damageDetails"
                  value={formData.damageDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required={currentService.required.includes('damageDetails')}
                />
              </div>
            )}

            {/* Photos Upload */}
            {currentService.fields.includes('photos') && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Photos <span className="text-red-500">*</span>
                </label>
                <p className="mt-1 text-sm text-gray-500">
                  {id === 'xactimate-roof-esx'
                    ? 'Aerial views, close-ups of edges, ridges, etc.'
                    : id === 'xactimate-3d-wall-sketch'
                    ? 'Interior/exterior wall photos'
                    : id === 'xactimate-estimate'
                    ? 'Photos of damaged areas'
                    : id === 'xactimate-interior-estimate'
                    ? 'Photos of exterior siding areas'
                    : id === 'matterport-to-xactimate-sketch'
                    ? 'Optional supporting images for Matterport scan'
                    : 'Optional supporting images'}
                </p>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="photos"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload photos</span>
                        <input
                          id="photos"
                          name="photos"
                          type="file"
                          multiple
                          onChange={handlePhotoUpload}
                          className="sr-only"
                          accept="image/*"
                          required={currentService.required.includes('photos')}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                                         <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
                   </div>
                 </div>
                 {photos.length > 0 && (
                   <div className="mt-4">
                     <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Photos:</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                       {photos.map((file, index) => (
                         <div key={index} className="relative border border-gray-200 rounded-lg p-3 bg-gray-50">
                           <img
                             src={createPreviewUrl(file)}
                             alt={file.name}
                             className="w-full h-24 object-cover rounded"
                           />
                           <p className="text-xs text-gray-600 truncate mt-2">{file.name}</p>
                           <button
                             type="button"
                             onClick={() => removePhoto(index)}
                             className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                           >
                             ×
                           </button>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
               </div>
             )}

            {/* Roof Material */}
            {currentService.fields.includes('roofMaterial') && (
              <div>
                <label htmlFor="roofMaterial" className="block text-sm font-medium text-gray-700">
                  Roof Material (e.g., asphalt shingles, metal, tile)
                </label>
                <select
                  style={{ color: "black", border: "1px solid black" }}
                  id="roofMaterial"
                  name="roofMaterial"
                  value={formData.roofMaterial}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Material</option>
                  <option value="asphalt shingles">Asphalt Shingles</option>
                  <option value="metal">Metal</option>
                  <option value="tile">Tile</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            {/* Roof Pitch */}
            {currentService.fields.includes('roofPitch') && (
              <div>
                <label htmlFor="roofPitch" className="block text-sm font-medium text-gray-700">
                  Roof Pitch
                </label>
                <select
                  style={{ color: "black", border: "1px solid black" }}
                  id="roofPitch"
                  name="roofPitch"
                  value={formData.roofPitch}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Pitch</option>
                  <option value="1/12">1/12</option>
                  <option value="2/12">2/12</option>
                  <option value="3/12">3/12</option>
                  <option value="4/12">4/12</option>
                  <option value="5/12">5/12</option>
                </select>
              </div>
            )}

            {/* Special Instructions */}
            {currentService.fields.includes('specialInstructions') && (
              <div>
                <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">
                  Special Instructions (e.g., omit slopes, include/exclude structures)
                </label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
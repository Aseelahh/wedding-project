import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/drive.file";
<<<<<<< HEAD
const DISCOVERY_URL =
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const FOLDER_ID = "1GGOReAN0COTK_XhGGUN-BijSAsQDjeLz";

const ImagePicker = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
=======

const ImagePicker = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)

  // Initialize gapi client
  const initClient = () => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
<<<<<<< HEAD
          discoveryDocs: [DISCOVERY_URL],
=======
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
          ],
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsSignedIn);
<<<<<<< HEAD
        })
        .catch((err) => {
          console.log("Failed to initialize client auth2", err);
=======
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
        });
    });
  };

  useEffect(() => {
    initClient();
  }, []);

  const handleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

<<<<<<< HEAD
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setSelectedFiles(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previewUrls);
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url)); // Clean up memory
    };
  }, [previewUrls]);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Extract base64 data
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
=======
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(files); // Storing files for upload
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
  };

  const uploadFileToDrive = async (file) => {
    const boundary = "foo_bar_baz";
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const metadata = {
      name: file.name,
      mimeType: file.type,
<<<<<<< HEAD
      parents: [FOLDER_ID],
=======
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
    };

    const multipartRequestBody =
      delimiter +
      "Content-Type: application/json\r\n\r\n" +
      JSON.stringify(metadata) +
      delimiter +
      "Content-Type: " +
      file.type +
<<<<<<< HEAD
      "\r\n" +
      "Content-Transfer-Encoding: base64\r\n\r\n" +
      (await fileToBase64(file)) +
=======
      "\r\n\r\n" +
      file +
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
      closeDelimiter;

    return gapi.client.request({
      path: "/upload/drive/v3/files?uploadType=multipart",
      method: "POST",
      params: {
        uploadType: "multipart",
      },
      headers: {
        "Content-Type": `multipart/related; boundary=${boundary}`,
      },
      body: multipartRequestBody,
    });
  };

  const handleUpload = async () => {
    if (!isSignedIn) {
      alert("Please sign in to upload files.");
      return;
    }

<<<<<<< HEAD
    for (const file of selectedFiles) {
      try {
        setIsLoading(true);
=======
    for (let file of selectedImages) {
      try {
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
        await uploadFileToDrive(file);
        alert(`${file.name} uploaded successfully!`);
      } catch (error) {
        console.error("Error uploading file: ", error);
        alert("Error uploading file.");
<<<<<<< HEAD
      }finally{
        setIsLoading(false);
=======
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
      }
    }
  };

  return (
    <div className="image-picker">
      <h2>Pick Images</h2>
      {!isSignedIn ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <button onClick={handleSignOut}>Sign out</button>
      )}
      <input
        type="file"
        multiple
<<<<<<< HEAD
        accept="image/*,video/*"
        onChange={handleFileChange}
      />
      <p>{isLoading && "Loading..."}</p>
      <div className="image-preview">
        {previewUrls.map((url, index) => {
          const file = selectedFiles[index];

          if (file.type.startsWith("image/")) {
            return (
              <img
                key={index}
                src={url}
                alt={file.name}
                width="200"
                style={{ margin: "10px" }}
              />
            );
          } else if (file.type.startsWith("video/")) {
            return (
              <video
                key={index}
                width="300"
                controls
                style={{ margin: "10px" }}
              >
                <source src={url} type={file.type} />
                Your browser does not support the video tag.
              </video>
            );
          }

          return null;
        })}
=======
        accept="image/*"
        onChange={handleImageChange}
      />
      <div className="image-preview">
        {selectedImages.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        ))}
>>>>>>> ba54663 (First image upload done. Fixing image not showing in cloud)
      </div>
      <button onClick={handleUpload}>Upload to Google Drive</button>
    </div>
  );
};

export default ImagePicker;

import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/drive.file";
const DISCOVERY_URL =
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";

const ImagePicker = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Initialize gapi client
  const initClient = () => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_URL],
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsSignedIn);
        })
        .catch((err) => {
          console.log("Failed to initialize client auth2", err);
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

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(files); // Storing files for upload
  };

  const uploadFileToDrive = async (file) => {
    const boundary = "foo_bar_baz";
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const metadata = {
      name: file.name,
      mimeType: file.type,
    };

    const multipartRequestBody =
      delimiter +
      "Content-Type: application/json\r\n\r\n" +
      JSON.stringify(metadata) +
      delimiter +
      "Content-Type: " +
      file.type +
      "\r\n\r\n" +
      file +
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

    for (let file of selectedImages) {
      try {
        await uploadFileToDrive(file);
        alert(`${file.name} uploaded successfully!`);
      } catch (error) {
        console.error("Error uploading file: ", error);
        alert("Error uploading file.");
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
      </div>
      <button onClick={handleUpload}>Upload to Google Drive</button>
    </div>
  );
};

export default ImagePicker;

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaCloudUploadAlt,
  FaImage,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaArrowLeft,
  FaShieldAlt,
  FaUserCheck,
  FaRedo,
  FaSpinner,
} from "react-icons/fa";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const Prediction = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setResult(null);
    setError("");
    setImage(null);
    setPreview("");

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Unsupported file format. Please upload a JPG or PNG image.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File is too large. Please select an image smaller than 5 MB.");
      e.target.value = "";
      return;
    }

    setImage(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.onerror = () => {
      setError("Unable to read this image. Please choose another file.");
      setImage(null);
    };

    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setImage(null);
    setPreview("");
    setResult(null);
    setError("");

    const fileInput = document.getElementById("file-upload");

    if (fileInput) {
      fileInput.value = "";
    }
  };

  const classifyImage = async () => {
    if (!image || !preview) {
      setError("Please select an image before starting verification.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("image_data", preview);

      const response = await axios.post(
        `${BACKEND_URL}/classify_image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000,
        }
      );

      const data = response.data;

      if (
        !data ||
        (Array.isArray(data) && data.length === 0) ||
        data === ""
      ) {
        setError(
          "No identification result was returned. Please try another image."
        );
        return;
      }

      const prediction = Array.isArray(data) ? data[0] : data;

      if (!prediction || typeof prediction !== "object") {
        setError("The verification service returned an invalid response.");
        return;
      }

      const detectedClass = prediction.class;

      if (
        !detectedClass ||
        detectedClass.toLowerCase() === "no face detected"
      ) {
        setResult({
          status: "no-face",
          message: "No face detected",
          description:
            "We could not detect a recognizable face in this image. Try a clear, front-facing photo.",
        });
        return;
      }

      if (
        detectedClass.toLowerCase() === "unknown" ||
        detectedClass.toLowerCase() === "unknown face"
      ) {
        setResult({
          status: "unknown",
          message: "Unknown Face",
          description:
            "The uploaded face does not match any of the identities supported by this model.",
        });
        return;
      }

      // Successful identification
      setResult({
        status: "success",
        message: detectedClass,
        description: "The model returned a matching identity.",
        confidence: prediction.confidence,
      });

    } catch (err) {
      console.error("Classification error:", err);

      if (err.code === "ECONNABORTED") {
        setError(
          "The verification request timed out. Please try again."
        );
      } else if (err.response) {
        setError(
          err.response.data?.message ||
          "The server could not process your image. Please try again."
        );
      } else {
        setError(
          "Unable to connect to the verification server. Check your connection and try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#102c4a] rounded-lg flex items-center justify-center">
              <FaShieldAlt className="text-white text-lg" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide text-[#102c4a]">
                KAIROS
              </h1>
              <p className="text-[10px] tracking-[2px] text-slate-500 uppercase">
                Identity Solutions
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#35658e] transition"
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>

        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-16">

        <div className="max-w-2xl mx-auto text-center mb-10">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#35658e] px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-5">
            <FaShieldAlt />
            IDENTITY VERIFICATION PORTAL
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#102c4a] tracking-tight mb-4">
            Face Recognition
            <span className="block text-[#35658e]">
              Verification
            </span>
          </h2>

          <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
            Upload a clear image to check whether the face matches
            one of the identities supported by the KAIROS model.
          </p>

        </div>

        <div className="max-w-3xl mx-auto mb-8 bg-white border border-slate-200 rounded-xl p-5">

          <div className="flex items-center gap-3 mb-4">
            <FaUserCheck className="text-[#35658e] text-lg" />

            <h3 className="font-semibold text-[#102c4a]">
              Supported identities
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Lionel Messi",
              "Maria Sharapova",
              "Roger Federer",
              "Serena Williams",
              "Virat Kohli",
            ].map((person) => (
              <span
                key={person}
                className="bg-slate-100 border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-xs sm:text-sm"
              >
                {person}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-3">
            The model is limited to these five trained identity classes.
          </p>

        </div>

        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

          <div className="border-b border-slate-200 px-6 sm:px-8 py-5">
            <h3 className="text-lg font-bold text-[#102c4a]">
              Upload Image
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Select an image file to begin the verification process.
            </p>
          </div>

          <div className="p-6 sm:p-8">

            <label
              htmlFor="file-upload"
              className="group flex flex-col items-center justify-center w-full min-h-48 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-blue-50 hover:border-[#35658e] transition-all duration-200 px-5 py-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <FaCloudUploadAlt className="text-2xl text-[#35658e]" />
              </div>

              <p className="font-semibold text-[#102c4a] mb-2">
                Choose an image to upload
              </p>

              <p className="text-sm text-slate-500">
                Click here to browse your device
              </p>

              <p className="text-xs text-slate-400 mt-3">
                Accepted formats: JPG, JPEG, PNG · Maximum size: 5 MB
              </p>

              <input
                id="file-upload"
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {error && (
              <div className="mt-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                <FaExclamationTriangle className="text-red-500 mt-1 shrink-0" />

                <div>
                  <p className="font-semibold text-red-700 text-sm">
                    Verification Error
                  </p>

                  <p className="text-sm text-red-600 mt-1">
                    {error}
                  </p>
                </div>
              </div>
            )}

            {preview && (
              <div className="mt-7">

                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[#102c4a]">
                    Selected Image
                  </h4>

                  <button
                    onClick={resetForm}
                    type="button"
                    className="text-sm text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove image
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">

                  <div className="bg-slate-100 rounded-xl border border-slate-200 p-2">
                    <img
                      src={preview}
                      alt="Selected face"
                      className="w-full h-64 object-contain rounded-lg"
                    />
                  </div>

                  <div className="space-y-5">

                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
                        File Information
                      </p>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <FaImage className="text-[#35658e] text-xl" />

                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-700 truncate">
                              {image?.name}
                            </p>

                            <p className="text-xs text-slate-400 mt-1">
                              {image
                                ? (image.size / (1024 * 1024)).toFixed(2) + " MB"
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={classifyImage}
                      disabled={isLoading}
                      className={`w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-lg font-semibold text-white transition-all duration-200 ${
                        isLoading
                          ? "bg-slate-400 cursor-not-allowed"
                          : "bg-[#102c4a] hover:bg-[#1b456b] shadow-sm"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Processing Image...
                        </>
                      ) : (
                        <>
                          <FaUserCheck />
                          Verify Identity
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Please use a clear, well-lit, front-facing image.
                    </p>

                  </div>
                </div>
              </div>
            )}

            {result && (
              <div className="mt-8">

                {result.status === "success" ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">

                    <div className="flex items-center gap-3 mb-3">
                      <FaCheckCircle className="text-emerald-600 text-xl" />

                      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                        Identification Result
                      </p>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102c4a]">
                      {result.message}
                    </h3>

                    <p className="text-sm text-emerald-700 mt-2">
                      {result.description}
                    </p>

                    {result.confidence !== undefined && (
                      <p className="text-sm text-slate-600 mt-3">
                        Confidence: {result.confidence}
                      </p>
                    )}

                  </div>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">

                    <div className="flex items-center gap-3 mb-3">
                      <FaTimesCircle className="text-amber-600 text-xl" />

                      <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                        {result.message}
                      </p>
                    </div>

                    <p className="text-sm text-amber-700">
                      {result.description}
                    </p>

                  </div>
                )}

                <button
                  onClick={resetForm}
                  className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#35658e] hover:text-[#102c4a] transition"
                >
                  <FaRedo />
                  Verify Another Image
                </button>

              </div>
            )}

          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <FaImage className="text-[#35658e] text-lg mb-3" />
            <h4 className="font-semibold text-sm text-[#102c4a]">
              Clear Image
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Use a photo where the face is clearly visible.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <FaShieldAlt className="text-[#35658e] text-lg mb-3" />
            <h4 className="font-semibold text-sm text-[#102c4a]">
              File Validation
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Only supported image formats under 5 MB are accepted.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <FaUserCheck className="text-[#35658e] text-lg mb-3" />
            <h4 className="font-semibold text-sm text-[#102c4a]">
              Model Results
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Results depend on the identities and data used to train the model.
            </p>
          </div>

        </div>

      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm font-bold tracking-wide text-[#102c4a]">
            KAIROS
          </p>

          <p className="text-xs text-slate-400 text-center">
            Developed by Niyomugabo Etiene
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} KAIROS. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
};

export default Prediction;
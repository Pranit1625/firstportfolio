import "./ImageModal.css";

const ImageModal = ({ image, onClose }: any) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <img src={image} className="modal-image" />
    </div>
  );
};

export default ImageModal;
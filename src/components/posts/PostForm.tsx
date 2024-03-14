import { FiImage } from "react-icons/fi";

export default function PostForm() {
  const handleFileUpload = () => {};
  return (
    <form className="post-form">
      <textarea
        placeholder="What is happening?"
        className="post-form__textarea"
        required
        name="content"
        id="content"
      />
      <div className="post-form__submit-area">
        <label htmlFor="file-input" className="post-form__file">
          <FiImage className="post-form__file-icon" />
        </label>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <input type="submit" value="Tweet" className="post-form__submit-btn" />
      </div>
    </form>
  );
}

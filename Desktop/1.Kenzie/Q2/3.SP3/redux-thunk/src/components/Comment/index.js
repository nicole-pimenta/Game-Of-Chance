import imagem from "../../assets/kenzie.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const Comment = () => {
  // state para captura de input do usuario
  const [userInput, setuserInput] = useState([]);

  // usando dispatch para enviar dados para o Thunk
  const dispatch = useDispatch();

  const userComment = useSelector((store) => store.user);

  const { comments } = userComment;

  const handleTunk = () => {
    dispatch(addCommentThunk(userInput));
    setuserInput(" ");
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          alt="logoKenzie"
          src={imagem}
          style={{ height: "100px", borderRadius: "20px", margin: "20px" }}
        ></img>
        <p>{userComment.name}</p>
      </div>

      <input value={userInput} onChange={(e) => setuserInput(e.target.value)} />
      <button style={{ marginLeft: "10px" }} onClick={handleTunk}>
        {" "}
        New comment{" "}
      </button>
      <div>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{ background: "pink", margin: "15px", borderRadius: "8px" }}
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comment;

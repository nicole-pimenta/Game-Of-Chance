import { addComment } from "./actions";

export const addCommentThunk = (comment) => {
  return (dispatch, getState) => {
    const { user } = getState();

    console.log("user", user);

    const updateUser = { ...user, comments: [...user.comments, comment] };

    console.log("updateuser", updateUser);

    dispatch(addComment(updateUser));
  };
};

/*
Perceba que o thunk possui o seu próprio dispatch.
o GetState e uma funcao que permite acessar os states declarados na store


*/

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageUploading, {
  ImageListType,
  ImageType,
} from "react-images-uploading";

import { users } from "./../../mock";
import { UserCard } from "../atoms/UserCard/UserCard";

import { IUser } from "../../types/index";
import { Title } from "../atoms/Title";
import { useDispatch } from "react-redux";
import { sendPostAction } from "../../core/actions/postsActions";

export const User = () => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const dispatch = useDispatch();

  const params = useParams() as any;
  console.log({ params });

  useEffect(() => {
    if (params?.id) {
      const foundUser = users.find(
        ({ id: userId }) => userId === Number(params?.id)
      );
      // console.log({ foundUser, id: params?.id, users });
      if (foundUser) {
        setSelectedUser(foundUser);
        return;
      }
      setSelectedUser(null);
    }
    return () => {};
  }, [params?.id]);

  const [images, setImages] = useState<ImageListType>([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex?: Array<number>
  ) => {
    // data for submit
    console.log({ imageList, addUpdateIndex });
    setImages(imageList);
  };

  const handlerUpload = () => {
    const uploadImage: ImageType = images[0];
    dispatch(sendPostAction(uploadImage));
  };

  return (
    <div className="App">
      <main>
        <Link to="/">Home</Link>
        <Title title={"Slected user"} />
        {selectedUser ? <UserCard {...selectedUser} /> : <p>No user</p>}

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              {!imageList.length && (
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
              )}
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <button onClick={handlerUpload}>отправить</button>
      </main>
    </div>
  );
};

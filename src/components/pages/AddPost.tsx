import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUploading, {
  ImageListType,
  ImageType,
} from "react-images-uploading";
// import logo from "./logo.svg";
import "./../../App.css";
import { Title } from "../atoms/Title";

import { InputCommon } from "../atoms/InputCommon";
import { validateName } from "src/helpers";
import { ButtonCommon } from "../atoms/ButtonCommon";
import { sendPostAction } from "../../core/actions/postsActions";

export const AddPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lessonNum, setLessonNum] = useState("");
  const [images, setImages] = useState<ImageListType>([]);

  const isValidTitle = validateName(title);
  const isValidText = validateName(text);
  const isValidLessonNum = validateName(lessonNum);

  const isValid =
    isValidTitle && isValidText && isValidLessonNum && Boolean(images.length);

  const sendPost = () => {
    dispatch(
      sendPostAction({
        title,
        text,
        image: images[0],
        lesson_num: Number(lessonNum),
      })
    );
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex?: Array<number>
  ) => {
    // data for submit

    console.log({ imageList, addUpdateIndex });
    setImages(imageList);
  };

  return (
    <div className="App">
      <main>
        <Title title={"Add POST: "} />

        <InputCommon
          value={title}
          onChangeHandler={(text: string) => setTitle(text.trim())}
          title={"Title"}
          isValid={isValidTitle}
        />
        <InputCommon
          value={text}
          onChangeHandler={(text: string) => setText(text.trim())}
          title={"Text"}
          isValid={isValidText}
        />
        <InputCommon
          value={lessonNum}
          onChangeHandler={(text: string) => setLessonNum(text.trim())}
          title={"Lesson number"}
          isValid={isValidLessonNum}
          type={"number"}
        />

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
          maxNumber={1}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              {!images.length && (
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
                  <img src={image["data_url"]} alt="" width="300" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <ButtonCommon isValid={isValid} onClick={sendPost}>
          Add post
        </ButtonCommon>
      </main>
    </div>
  );
};

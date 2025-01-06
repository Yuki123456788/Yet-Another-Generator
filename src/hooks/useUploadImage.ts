import { useState } from "react";
import { useMutation } from "react-query";
import apiClient from "./apiClient";


interface UploadImageParams {
  image: File;
}

interface UploadImageResponse {
  key: string;
}

const uploadImage = async (params: UploadImageParams): Promise<UploadImageResponse> => {
  const reader = new FileReader();

  const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result as ArrayBuffer);
    };
    reader.onerror = () => reject('讀取檔案失敗');
    reader.readAsArrayBuffer(params.image);
  });

  const response = await apiClient.post('/uploadImage', arrayBuffer, {
    headers: {
      'Content-Type': params.image.type,
    },
  });
  return { key: response.data.key };
};

export const useUploadImage = () => {
  return useMutation(uploadImage);
};


export const useUploadImages = () => {
  const [imageKeys, setImageKeys] = useState<string[]>([]);
  const { mutateAsync, isLoading } = useUploadImage();

  // 批次上傳圖片
  const uploadImages = async (files: File[]) => {
    const keys: string[] = [];

    for (const file of files) {
      try {
        const { key } = await mutateAsync({ image: file });
        keys.push(key);
      } catch (error) {
        console.error(`Error uploading ${file.name}:`, error);
      }
    }

    // 更新 state
    setImageKeys((preKey)=>[... preKey, ...keys]);
  };

  return { imageKeys, uploadImages, isLoading };
};


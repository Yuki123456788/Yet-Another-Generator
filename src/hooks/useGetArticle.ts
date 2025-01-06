import { useMutation, UseMutationResult } from "react-query";
import apiClient from "./apiClient";


interface GetArticleParams {
  imageKeys: string[];
  language: string;
  style: string;
  length: number;
  role: string;
  textInfo: string;
}

interface GetArticleResponse {
  content: string;
}

const getArticle = async (params: GetArticleParams): Promise<GetArticleResponse> => {
  const response = await apiClient.post('/YAGenerator', params);
  return response.data;
};

// 改用 useMutation
export const useGetArticle = (): UseMutationResult<GetArticleResponse, unknown, GetArticleParams> => {
  return useMutation(getArticle);
};

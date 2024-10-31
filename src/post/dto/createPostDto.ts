import { tags } from 'typia';

export interface CreatePostDto {
  title: string;

  content: string;

  author: string;
  /** 게시글 상태 */
  status: string;
}
export type StatusEnum = 'published' | 'draft' | 'archived';

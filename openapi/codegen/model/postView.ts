import { tags } from 'typia';

export interface PostView {
  id?: number;

  createdAt?: string & tags.Format<'date-time'>;

  isDeleted?: boolean;

  deletedAt?: string & tags.Format<'date-time'>;
}

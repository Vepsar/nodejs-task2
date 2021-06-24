// import { Columns } from '../resources/entities/column';

interface IUserRequest {
  name: string;
  login: string;
  password: string;
}

interface IUserResp {
  id: string | undefined;
  name: string;
  login: string;
}

interface ITaskRequest {
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}

interface IBoardRequest {
  title: string;
  columns: string;
}

export { IUserRequest, IUserResp, ITaskRequest, IBoardRequest };

import type { ApiContext, User } from 'types'
import { fetcher } from '../../utils';
import exp from 'constants';

export type GetUserParams = {
  id: number
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  {
    "id": "1",
    "username": "sample",
    "displayName": "sample sample",
    "email": "test@gmail.com",
    "profileImageUrl": "/users/1.png",
    "description": "This is Sample"
  }

  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  )
}

export default getUser8
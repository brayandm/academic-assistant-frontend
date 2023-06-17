import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type Mutation = {
  createTranslationTask?: Maybe<TaskId>;
  me?: Maybe<User>;
};


export type MutationCreateTranslationTaskArgs = {
  original_language?: InputMaybe<Scalars['String']>;
  target_language?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  text_type?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type Query = {
  getTranslationResult?: Maybe<TranslationResult>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: UserPaginator;
};


export type QueryGetTranslationResultArgs = {
  task_id?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};

export type Role = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type TaskId = {
  task_id: Scalars['String'];
};

export type TranslationResult = {
  status: Scalars['String'];
  text: Scalars['String'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  email_verified_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  roles: Array<Role>;
  updated_at: Scalars['DateTime'];
};

/** A paginated list of User items. */
export type UserPaginator = {
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UsersRoles {
  Admin = 'ADMIN',
  Student = 'STUDENT',
  Teacher = 'TEACHER'
}

export type CreateTranslationTaskMutationVariables = Exact<{
  original_language: Scalars['String'];
  target_language: Scalars['String'];
  text_type: Scalars['String'];
  text: Scalars['String'];
}>;


export type CreateTranslationTaskMutation = { createTranslationTask?: { task_id: string } | null };

export type GetTranslationResultQueryVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type GetTranslationResultQuery = { getTranslationResult?: { status: string, text: string } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { me?: { name: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { users: { data: Array<{ id: string, name: string, email: string, roles: Array<{ name: string }> }> } };


export const CreateTranslationTaskDocument = /*#__PURE__*/ gql`
    mutation createTranslationTask($original_language: String!, $target_language: String!, $text_type: String!, $text: String!) {
  createTranslationTask(
    original_language: $original_language
    target_language: $target_language
    text_type: $text_type
    text: $text
  ) {
    task_id
  }
}
    `;
export const GetTranslationResultDocument = /*#__PURE__*/ gql`
    query getTranslationResult($task_id: String!) {
  getTranslationResult(task_id: $task_id) {
    status
    text
  }
}
    `;
export const GetMeDocument = /*#__PURE__*/ gql`
    query getMe {
  me {
    name
  }
}
    `;
export const UsersDocument = /*#__PURE__*/ gql`
    query users {
  users {
    data {
      id
      name
      email
      roles {
        name
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createTranslationTask(variables: CreateTranslationTaskMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTranslationTaskMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTranslationTaskMutation>(CreateTranslationTaskDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTranslationTask', 'mutation');
    },
    getTranslationResult(variables: GetTranslationResultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTranslationResultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTranslationResultQuery>(GetTranslationResultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTranslationResult', 'query');
    },
    getMe(variables?: GetMeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMeQuery>(GetMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMe', 'query');
    },
    users(variables?: UsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
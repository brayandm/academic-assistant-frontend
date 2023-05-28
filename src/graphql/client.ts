import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
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
  original_language?: InputMaybe<Scalars["String"]>;
  target_language?: InputMaybe<Scalars["String"]>;
  text?: InputMaybe<Scalars["String"]>;
  text_type?: InputMaybe<Scalars["String"]>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars["String"];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = "COUNT",
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = "AVG",
  /** Amount of items. */
  Count = "COUNT",
  /** Maximum. */
  Max = "MAX",
  /** Minimum. */
  Min = "MIN",
  /** Sum. */
  Sum = "SUM",
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  /** Number of nodes in the current page. */
  count: Scalars["Int"];
  /** Index of the current page. */
  currentPage: Scalars["Int"];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** Index of the last available page. */
  lastPage: Scalars["Int"];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars["String"]>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars["Int"];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars["Int"];
  /** Index of the current page. */
  currentPage: Scalars["Int"];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars["Int"]>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars["Boolean"];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars["Int"]>;
  /** Index of the last available page. */
  lastPage: Scalars["Int"];
  /** Number of items per page. */
  perPage: Scalars["Int"];
  /** Number of total available items. */
  total: Scalars["Int"];
};

export type Query = {
  getTranslationResult?: Maybe<TranslationResult>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: UserPaginator;
};

export type QueryGetTranslationResultArgs = {
  task_id?: InputMaybe<Scalars["String"]>;
};

export type QueryUserArgs = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersArgs = {
  first?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars["Int"];
  /** Index of the current page. */
  currentPage: Scalars["Int"];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars["Int"]>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars["Boolean"];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars["Int"]>;
  /** Number of items per page. */
  perPage: Scalars["Int"];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = "ASC",
  /** Sort records in descending order. */
  Desc = "DESC",
}

export type TaskId = {
  task_id: Scalars["String"];
};

export type TranslationResult = {
  status: Scalars["String"];
  text: Scalars["String"];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = "ONLY",
  /** Return both trashed and non-trashed results. */
  With = "WITH",
  /** Only return non-trashed results. */
  Without = "WITHOUT",
}

export type User = {
  created_at: Scalars["DateTime"];
  email: Scalars["String"];
  email_verified_at?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

/** A paginated list of User items. */
export type UserPaginator = {
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UsersRoles {
  Admin = "ADMIN",
  Student = "STUDENT",
  Teacher = "TEACHER",
}

export type CreateTranslationTaskMutationVariables = Exact<{
  original_language: Scalars["String"];
  target_language: Scalars["String"];
  text_type: Scalars["String"];
  text: Scalars["String"];
}>;

export type CreateTranslationTaskMutation = {
  createTranslationTask?: { task_id: string } | null;
};

export type GetTranslationResultQueryVariables = Exact<{
  task_id: Scalars["String"];
}>;

export type GetTranslationResultQuery = {
  getTranslationResult?: { status: string; text: string } | null;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = { me?: { name: string } | null };

export const CreateTranslationTaskDocument = /*#__PURE__*/ gql`
  mutation createTranslationTask(
    $original_language: String!
    $target_language: String!
    $text_type: String!
    $text: String!
  ) {
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
export type CreateTranslationTaskMutationFn = Apollo.MutationFunction<
  CreateTranslationTaskMutation,
  CreateTranslationTaskMutationVariables
>;

/**
 * __useCreateTranslationTaskMutation__
 *
 * To run a mutation, you first call `useCreateTranslationTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTranslationTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTranslationTaskMutation, { data, loading, error }] = useCreateTranslationTaskMutation({
 *   variables: {
 *      original_language: // value for 'original_language'
 *      target_language: // value for 'target_language'
 *      text_type: // value for 'text_type'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateTranslationTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTranslationTaskMutation,
    CreateTranslationTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateTranslationTaskMutation,
    CreateTranslationTaskMutationVariables
  >(CreateTranslationTaskDocument, options);
}
export type CreateTranslationTaskMutationHookResult = ReturnType<
  typeof useCreateTranslationTaskMutation
>;
export type CreateTranslationTaskMutationResult =
  Apollo.MutationResult<CreateTranslationTaskMutation>;
export type CreateTranslationTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTranslationTaskMutation,
  CreateTranslationTaskMutationVariables
>;
export const GetTranslationResultDocument = /*#__PURE__*/ gql`
  query getTranslationResult($task_id: String!) {
    getTranslationResult(task_id: $task_id) {
      status
      text
    }
  }
`;

/**
 * __useGetTranslationResultQuery__
 *
 * To run a query within a React component, call `useGetTranslationResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTranslationResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTranslationResultQuery({
 *   variables: {
 *      task_id: // value for 'task_id'
 *   },
 * });
 */
export function useGetTranslationResultQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTranslationResultQuery,
    GetTranslationResultQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTranslationResultQuery,
    GetTranslationResultQueryVariables
  >(GetTranslationResultDocument, options);
}
export function useGetTranslationResultLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTranslationResultQuery,
    GetTranslationResultQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTranslationResultQuery,
    GetTranslationResultQueryVariables
  >(GetTranslationResultDocument, options);
}
export type GetTranslationResultQueryHookResult = ReturnType<
  typeof useGetTranslationResultQuery
>;
export type GetTranslationResultLazyQueryHookResult = ReturnType<
  typeof useGetTranslationResultLazyQuery
>;
export type GetTranslationResultQueryResult = Apollo.QueryResult<
  GetTranslationResultQuery,
  GetTranslationResultQueryVariables
>;
export const GetMeDocument = /*#__PURE__*/ gql`
  query getMe {
    me {
      name
    }
  }
`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options
  );
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options
  );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>;

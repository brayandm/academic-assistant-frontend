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
  createUser: User;
  deleteUser: User;
  me?: Maybe<User>;
};

export type MutationCreateTranslationTaskArgs = {
  original_language?: InputMaybe<Scalars["String"]>;
  target_language?: InputMaybe<Scalars["String"]>;
  text?: InputMaybe<Scalars["String"]>;
  text_type?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  roles: Array<Scalars["String"]>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
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
  roles: Array<Role>;
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
  page?: InputMaybe<Scalars["Int"]>;
};

export type Role = {
  id: Scalars["ID"];
  name: Scalars["String"];
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
  roles: Array<Role>;
  updated_at: Scalars["DateTime"];
};

/** A paginated list of User items. */
export type UserPaginator = {
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UserPolicies {
  AdminDashboardAccess = "ADMIN_DASHBOARD_ACCESS",
  TeacherDashboardAccess = "TEACHER_DASHBOARD_ACCESS",
  TranslationTaskManagement = "TRANSLATION_TASK_MANAGEMENT",
  UserManagement = "USER_MANAGEMENT",
}

export enum UserRoles {
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

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  users: {
    data: Array<{
      id: string;
      name: string;
      email: string;
      roles: Array<{ name: string }>;
    }>;
  };
};

export type RolesQueryVariables = Exact<{ [key: string]: never }>;

export type RolesQuery = { roles: Array<{ id: string; name: string }> };

export type CreateUserMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  roles: Array<Scalars["String"]> | Scalars["String"];
}>;

export type CreateUserMutation = {
  createUser: { id: string; name: string; email: string };
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteUserMutation = {
  deleteUser: { id: string; name: string; email: string };
};

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

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const RolesDocument = /*#__PURE__*/ gql`
  query roles {
    roles {
      id
      name
    }
  }
`;

/**
 * __useRolesQuery__
 *
 * To run a query within a React component, call `useRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<RolesQuery, RolesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RolesQuery, RolesQueryVariables>(
    RolesDocument,
    options
  );
}
export function useRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RolesQuery, RolesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RolesQuery, RolesQueryVariables>(
    RolesDocument,
    options
  );
}
export type RolesQueryHookResult = ReturnType<typeof useRolesQuery>;
export type RolesLazyQueryHookResult = ReturnType<typeof useRolesLazyQuery>;
export type RolesQueryResult = Apollo.QueryResult<
  RolesQuery,
  RolesQueryVariables
>;
export const CreateUserDocument = /*#__PURE__*/ gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $roles: [String!]!
  ) {
    createUser(name: $name, email: $email, password: $password, roles: $roles) {
      id
      name
      email
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      roles: // value for 'roles'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const DeleteUserDocument = /*#__PURE__*/ gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

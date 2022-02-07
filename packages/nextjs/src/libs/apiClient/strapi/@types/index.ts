/* eslint-disable */
export type Article = {
  id: string
  title: string
  body: string

  thumbnail: {
    id: string
    name: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    hash: string
    ext?: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    related?: string
    created_by?: string
    updated_by?: string
  }

  published_at?: string
}

export type NewArticle = {
  title: string
  body: string
  published_at?: string
  created_by?: string
  updated_by?: string
}

export type UsersPermissionsRole = {
  id: string
  name: string
  description?: string
  type?: string
  permissions?: {
    id: string
    type: string
    controller: string
    action: string
    enabled: boolean
    policy?: string
    role?: string
    created_by?: string
    updated_by?: string
  }[]
  users?: {
    id: string
    username: string
    email: string
    provider?: string
    password?: string
    resetPasswordToken?: string
    confirmationToken?: string
    confirmed?: boolean
    blocked?: boolean
    role?: string
    created_by?: string
    updated_by?: string
  }[]
}

export type NewUsersPermissionsRole = {
  name: string
  description?: string
  type?: string
  permissions?: string[]
  users?: string[]
  created_by?: string
  updated_by?: string
}

export type UsersPermissionsUser = {
  id: string
  username: string
  email: string
  provider?: string
  confirmed?: boolean
  blocked?: boolean

  role?: {
    id: string
    name: string
    description?: string
    type?: string
    permissions?: string[]
    users?: string[]
    created_by?: string
    updated_by?: string
  }
}

export type NewUsersPermissionsUser = {
  username: string
  email: string
  provider?: string
  password?: string
  resetPasswordToken?: string
  confirmationToken?: string
  confirmed?: boolean
  blocked?: boolean
  role?: string
  created_by?: string
  updated_by?: string
}

export type Error = {
  code: number
  message: string
}

import {createAuthContext} from 'react-pkce'

const clientId = "8cb4904ae5581ecc2b3a1774"
const clientSecret = "b683283462070edbac15a8fdab751ada0f501ab48a5f06aa20aee3be24eac9cc"
const provider = "https://authenticate.u5auth.com"

export const {AuthContext, Authenticated, useToken} = createAuthContext({
  clientId,
  clientSecret,
  provider
})

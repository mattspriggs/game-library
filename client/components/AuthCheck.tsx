import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { ReactElement, useEffect } from 'react'

interface AuthCheckProps {
  element: ReactElement
}

function AuthCheck({ element }: AuthCheckProps): ReactElement {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const accessTokenPromise = getAccessTokenSilently()

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const token = await accessTokenPromise
      return await getUser(token)
    },
  })
}

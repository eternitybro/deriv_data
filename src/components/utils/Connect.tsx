import { useAccount, useConnect } from 'wagmi'
import useIsMounted from '../../hooks/useIsMounted'


export const Connect = () => {
  const isMounted = useIsMounted()
  const { connector, isReconnecting } = useAccount()
  const { connect, connectors, isLoading, error, pendingConnector } =
    useConnect()

  return (
    <div>
      <div>
        {connectors.map((x) => (
          <button
            disabled={!x.ready || isReconnecting || connector?.id === x.id}
            key={x.name}
            onClick={() => connect({ connector: x })}
          >
            {x.id === 'injected' ? (isMounted ? x.name : x.id) : x.name}
            {isMounted && !x.ready && ' (unsupported)'}
            {isLoading && x.id === pendingConnector?.id && '…'}
          </button>
        ))}
      </div>

      <div>{error && error.message}</div>
    </div>
  )
}

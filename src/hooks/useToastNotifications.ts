import { useEffect, useRef } from 'react'
import { Id, toast, Theme } from 'react-toastify'
import { UIState, useContractStore } from '../store/contract'

const useToastNotifications = (enabled: boolean = false) => {
  const { uiState, error } = useContractStore()

  const config = {
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: toast.POSITION.TOP_CENTER,
    theme: 'colored' as Theme,
  }

  const minted = () => {
    toast.dismiss()
    toast.success('Mint successful!', config)
  }

  const minting = () => {
    toast.dismiss()
    toast.loading('Minting, please wait...', config)
  }

  const pending = () => {
    toast.dismiss()
    toast.loading('Waiting for confirmation...', config)
  }

  useEffect(() => {
    if (!enabled) return
    if (uiState === UIState.PENDING_APPROVAL) return pending()
    if (uiState === UIState.MINTED) return minted()
    if (uiState === UIState.MINTING) return minting()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiState])

  useEffect(() => {
    if (!enabled) return
    if (error) {
      toast.dismiss()
      toast.error(error, {
        position: toast.POSITION.TOP_LEFT,
        onClick: () => {
          useContractStore.setState({ error: undefined })
        },
        closeButton: false,
        onClose: () => {
          useContractStore.setState({ error: undefined })
        },
      })
    }
  }, [enabled, error])
}
export default useToastNotifications

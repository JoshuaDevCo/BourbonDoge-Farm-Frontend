import { useEffect } from 'react'
import { usePriceCakeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = usePriceCakeBusd()
  useEffect(() => {
    document.title = `Bourbon DeFi`
  })
}
export default useGetDocumentTitlePrice

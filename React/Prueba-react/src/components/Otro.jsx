import { useCatImage } from "../hook/useCatImage.js";

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return (
    <>
    <img src={imageUrl} alt="" />
    </>
  )
}

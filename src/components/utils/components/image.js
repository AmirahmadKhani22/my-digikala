import NextImage from 'next/image'
import shimmerEffect from "@/components/utils/shimmerEffect"

export default function Image({
    nextHandle,
    className="",
    placeholder="empty",
    fill=true,
    loading,
    ...props
}) {
    const handleOnError = event => {
        event => {
            const invalidSrc = event.target.src
            const notFoundSrc = event.target.src = "/icon/not-found.svg"
            if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
                console.log(`Image not found Error: ${invalidSrc} replaced with ${notFoundSrc}!`)
            }
        }
    }
    return nextHandle ? (
        <NextImage 
            loading={loading}
            fill={fill}
            placeholder={placeholder === "shimmer" ? shimmerEffect : placeholder}
            onError={handleOnError}
            className={`${className}`}
            {...props}
        />
    ) : (
        <img loading={loading ?? "lazy"} {...props} className={`${className}`}/>
    )
}
 
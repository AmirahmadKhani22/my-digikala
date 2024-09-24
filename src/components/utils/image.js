import NextImage from 'next/image'
import shimmerEffect from "@/components/utils/shimmerEffect"

export default function Image({
    nextHandle,
    imageClassName="",
    containerClassName="",
    placeholder="empty",
    fill=true,
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
        fill ? <div className={`relative ${containerClassName}`}>
            <NextImage 
                fill={true}
                placeholder={placeholder === "shimmer" ? shimmerEffect : placeholder}
                onError={handleOnError}
                className={`${imageClassName}`}
                {...props}
            />
        </div> : 
        <NextImage 
            fill={false}
            placeholder={placeholder === "shimmer" ? shimmerEffect : placeholder}
            onError={handleOnError}
            className={`${imageClassName}`}
            {...props}
        />
    ) : (
        <img {...props} className={`${imageClassName}`}/>
    )
}

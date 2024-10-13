import NextLink from 'next/link'

export default function Link({prefetch=false , target="_blank" , ...props}) {
    return <NextLink
        prefetch = {prefetch}
        target={target}
        {...props}
    />
}
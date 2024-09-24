import NextLink from 'next/link'

export default function Link({prefetch=false , ...props}) {
    return <NextLink
        prefetch = {prefetch}
        {...props}
    />
}
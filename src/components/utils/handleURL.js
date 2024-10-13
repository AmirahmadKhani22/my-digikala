export default function handleURL(urlObj) {
    return `${urlObj.base ?? ""}${urlObj.uri}`
}
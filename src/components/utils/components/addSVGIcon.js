export default function AddSVGIcon({className="",href,id,...props}) {
    return <svg className={className} {...props}>
        <use 
            xlinkHref={`${href}#${id}`}
            href={`${href}#${id}`}
        />
    </svg>
}
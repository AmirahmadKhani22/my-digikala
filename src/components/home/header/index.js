import Announcement from "./announcements"
import Stories from "./stories"

export default function Header() {
    return <header>
        <Stories />
        <Announcement />
    </header>
}
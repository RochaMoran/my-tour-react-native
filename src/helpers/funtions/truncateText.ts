export default function truncateText(text:any) {
    return text.length > 12 ? `${text.substr(0, 12)}...` : text;
}
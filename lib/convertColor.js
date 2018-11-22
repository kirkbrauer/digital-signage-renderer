export default function convertColor(color, alpha) {
    if (!color)
        return '';
    return "rgba(" + color.red + "," + color.green + "," + color.blue + "," + (alpha || 1.0) + ")";
}

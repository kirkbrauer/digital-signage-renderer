import convertColor from './convertColor';
export default function getBaseStyle(props) {
    return {
        height: props.height,
        width: props.width,
        flex: props.grow || 1,
        margin: props.margin,
        padding: props.padding,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        backgroundColor: props.fill ? convertColor(props.fill.color, props.fill.alpha) : undefined
    };
}

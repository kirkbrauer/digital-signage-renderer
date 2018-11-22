import { Component } from 'react';
// import getBaseStyle from '../getBaseStyle';
// import getBorderStyle from '../getBorderStyle';
import { RenderWidgetProps } from '../index';
// import { ScrollDirection } from '../types/AutoScroll';

export interface AutoScrollState {
  currentPosition: number;
  contentHeight: number;
  contentWidth: number;
  scrollViewHeight: number;
  scrollViewWidth: number;
}

export class AutoScrollWidget extends Component<RenderWidgetProps, AutoScrollState> {

  /*scrollRef: RefObject<ScrollView>;
  scrollInterval: any;

  constructor(props: RenderWidgetProps) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      currentPosition: 0,
      contentHeight: 0,
      contentWidth: 0,
      scrollViewHeight: 0,
      scrollViewWidth: 0
    };
  }

  onLayout(e: LayoutChangeEvent) {
    this.setState({
      scrollViewHeight: e.nativeEvent.layout.height,
      scrollViewWidth: e.nativeEvent.layout.width
    });
  }

  onContentSizeChange(width: number, height: number) {
    this.setState({
      contentHeight: height,
      contentWidth: width
    });
  }

  scrolling() { 
    const widget = this.props.widget;
    let scrollEnabled = false;
    // Only allow scrolling if the content size is larger than the view height
    if (widget.props.scrollDirection === ScrollDirection.HORIZONTAL) {
      if (this.state.contentWidth > this.state.scrollViewWidth) {
        scrollEnabled = true;
      }
    } else {
      if (this.state.contentHeight > this.state.scrollViewHeight) {
        scrollEnabled = true;
      }
    }

    // Only scroll if the ref has been setup and scrolling is enabled
    if (scrollEnabled && this.scrollRef.current) {
      // Set the updated position according to the scroll scrollSpeed
      const position = this.state.currentPosition + widget.props.scrollSpeed! || 1;
      // Scroll to the new position
      if (widget.props.scrollDirection === ScrollDirection.HORIZONTAL) {
        this.scrollRef.current!.scrollTo({ x: position, animated: true });
      } else {
        this.scrollRef.current!.scrollTo({ y: position, animated: true });
      }

      let maxOffset: number;
      // Calculate the max offset depending on the direction
      if (widget.props.scrollDirection === ScrollDirection.HORIZONTAL) {
        maxOffset = this.state.contentWidth - this.state.scrollViewWidth;
      } else {
        maxOffset = this.state.contentHeight - this.state.scrollViewHeight;
      }

      // Check to see if the scroll view has reached its max offset
      if (this.state.currentPosition >= maxOffset) {
        // Return to the top if the view is continuious
        if (widget.props.continuous) {
          this.scrollRef.current!.scrollTo({ y: 0, x: 0, animated: false });
          this.setState({ currentPosition: 0 });
        }
      } else {
        // Otherwise, update the current position
        this.setState({ currentPosition: position });
      }
    }
  }

  componentDidMount() {
    // Set the scroll interval
    this.scrollInterval = setInterval(() => this.scrolling(), 25);
  }

  componentWillUnmount() {
    // Clear the interval
    clearInterval(this.scrollInterval);
  }

  render() {
    const widget = this.props.widget;
    return (
      <ScrollView
        ref={this.scrollRef}
        onContentSizeChange={(w, h) => this.onContentSizeChange(w, h)}
        onLayout={e => this.onLayout(e)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderToHardwareTextureAndroid={true}
        bounces={false}
        horizontal={widget.props.scrollDirection === ScrollDirection.HORIZONTAL}
        shouldRasterizeIOS={true}
        style={{
          ...getBaseStyle(this.props.widget.props),
          ...getBorderStyle(this.props.widget.props),
          overflow: 'hidden'
        }}
        removeClippedSubviews={true}
      >
        {this.props.children}
      </ScrollView>
    );
  }*/
  render() {
    return null;
  }
}

import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { VideoType } from 'digital-signage-types';
import YouTube from 'react-youtube';
import { WidgetContext } from '../WidgetContext';
var VideoWidget = /** @class */ (function (_super) {
    tslib_1.__extends(VideoWidget, _super);
    function VideoWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoWidget.prototype.render = function () {
        switch (this.props.widget.props.videoType) {
            case VideoType.YOUTUBE: {
                return (React.createElement(YouTube, { videoId: this.props.widget.props.video, opts: {
                        height: this.props.widget.props.height ? this.props.widget.props.height.toString() : '853',
                        width: this.props.widget.props.height ? this.props.widget.props.height.toString() : '480',
                        playerVars: {
                            autoplay: this.context.autoplay ? 1 : 0,
                            loop: this.context.autoplay ? 1 : 0,
                            modestbranding: 1,
                            controls: this.context.autoplay ? 0 : 1,
                            disablekb: this.context.autoplay ? 1 : 0,
                            playsinline: 1
                        }
                    } }));
            }
            default: return null;
        }
    };
    VideoWidget.contextType = WidgetContext;
    return VideoWidget;
}(Component));
export { VideoWidget };

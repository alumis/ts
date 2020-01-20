import progressStyles from "./index.scss";
import { Component, toggleClass } from "@alumis/elastic-ts/JSX";
import { Observable } from "@alumis/elastic-ts/Observable";

export class Progress extends Component<HTMLDivElement> {

  constructor(properties: ProgressProperties) {

    super();

    let { indeterminate, buffer, ...otherProperties } = properties || {};


    this.node = (
      <div role="progressbar" {...otherProperties}>
        {buffer !== false && <div className={progressStyles.progressBuffer}></div> || null}
        <div className={progressStyles.progressBar + " " + progressStyles.progressBarPrimary}>
          <span className={progressStyles.progressBarInner}></span>
        </div>
        <div className={progressStyles.progressBar + " " + progressStyles.progressBarSecondary}>
          <span className={progressStyles.progressBarInner}></span>
        </div>
      </div>
    );

    this.node.classList.add(progressStyles.progress);

    if (typeof indeterminate !== "undefined")
      toggleClass(this.node, { [progressStyles.progressIndeterminate]: indeterminate });
  }
}

export type ProgressProperties =
  & JSX.HTMLAttributes<HTMLButtonElement>
  & { indeterminate?: boolean | Observable<boolean> | (() => boolean); buffer?: boolean; };

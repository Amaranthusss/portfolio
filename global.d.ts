import type { Ref } from 'react';

declare global {
  type WithRef<P, R> = P & { ref?: Ref<R> };

  interface CommonProps<RootType extends HTMLElement> {
		/** DOM element name, used f.e. as aria-label */
    name?: string;
    /** The additional style */
    style?: React.CSSProperties;
    /** The additional css class */
    className?: string;
    /** Style on the root element */
    rootStyle?: React.CSSProperties;
    /** ClassName on the root element */
    rootClassName?: string;
    /** Reference to the root element */
    rootRef?: Ref<RootType | null>;
  }
}

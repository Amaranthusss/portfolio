import type { Ref } from "react";

declare global {
	type WithRef<P, R> = P & { ref?: Ref<R> };
}
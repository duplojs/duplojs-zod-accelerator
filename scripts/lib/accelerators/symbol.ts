import * as zod from "zod";
import {ZodAccelerator} from "../accelerator";
import {ZodAcceleratorContent} from "../content";

export class ZodSymbolAccelerator extends ZodAccelerator{
	public get support(){
		return zod.ZodSymbol;
	}

	public makeAcceleratorContent(zodSchema: zod.ZodSymbol, zac: ZodAcceleratorContent){
		zac.addContent(
			ZodSymbolAccelerator.contentPart.typeof()
		);

		return zac;
	}

	static contentPart = {
		typeof: () => ({
			if: /* js */"(typeof $input !== \"symbol\")",
			message: ""
		})
	};

	static {
		new ZodSymbolAccelerator();
	}
}
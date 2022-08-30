import { App } from "vue";
import { registerProperties } from "./register-properties";
import { IFilters } from "./type";

export function globalRegister(app: App): void {
    app.use(registerProperties)
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $filters: IFilters
    }
}
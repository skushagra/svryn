
export type ModuleConfigT = {
    "event-verbose-level": 0 | 1 | 2;
    "error-verbose-level": 0 | 1 | 2;
}

export type CustomModuleConfigT = Partial<ModuleConfigT>

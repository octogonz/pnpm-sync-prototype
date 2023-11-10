export interface PnpmSyncCliArgs {
  prepare: boolean
} 

export interface PnpmSyncJson {
  postbuildInjectedCopy: {
    sourceFolder: string,
    targetFolders: Array<TargetFolder>
  }
}

export interface TargetFolder {
  folderPath: string
}

export const ALL_APP = 'all';


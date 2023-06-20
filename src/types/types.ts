export type toggleType = {
    toggleUI: boolean
}

export interface RadioObject {
    id?: number,
    title: string,
    genre: string,
    image: string,
    url: string
}

export type ButtonType = {
    className: string,
    action: () => void,
    title: string
    isHidden?: boolean
}

export type SettingsProps = {
    toggleUI: () => void
  }
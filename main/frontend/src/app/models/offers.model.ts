export interface IBaseOffer {
    define_type_of_request: 'offers' | 'requsts' | 'quastions'
    title: string
    about: string
    back: string
    user: number
    is_published: boolean
}

export interface IOffer extends IBaseOffer {
    user: number
    views_amoun: number
}
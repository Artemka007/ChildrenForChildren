export interface IBaseOffer {
    define_type_of_request: 'offers' | 'requsts' | 'quastions'
    title: string
    about: string
    back: string
    user: number
    subject: {id: number, name: string}
    is_published: boolean
}

export interface IOffer extends IBaseOffer {
    id?: number
    user: number
    views_amoun: number
}
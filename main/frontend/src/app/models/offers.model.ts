export interface IOffer {
    define_type_of_request: 'offers' | 'requsts' | 'quastions'
    
    title: string
    about: string
    back: string
    date: string
    
    user: number

    is_published: boolean

    views_amoun: number
}
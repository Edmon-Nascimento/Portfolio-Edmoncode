export type Project = {
    id:string
    title:string
    description:string
    tags:string[]
    coverImage:string
    alt:string
    liveUrl:string
    githubUrl?:string
    featured:boolean
    status:"finalizado"|"emAndamento"
}

export type Phone = {
  raw: string
  international: string
}

export type Contact = {
  instagram: string
  linkedin: string
  github: string
  email: string
  phone: Phone
}



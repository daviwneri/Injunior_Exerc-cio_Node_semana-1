import { ResourceNotFoundError } from "./errors/resource-not-fount-error"
import { Post } from "@prisma/client"
import { PostsRepository } from "@/repositories/posts-repository"

interface GetAllUsersUseCaseResponse {
    posts: Post[]
}


export class GetAllPostsUseCase {
    constructor (private PostsRepossitory: PostsRepository){}

    async execute(): Promise<GetAllUsersUseCaseResponse>{
        const posts = await this.PostsRepossitory.getAll()
    

    if (!posts){
        throw new ResourceNotFoundError()
    }

    return { posts }

    }
    
}
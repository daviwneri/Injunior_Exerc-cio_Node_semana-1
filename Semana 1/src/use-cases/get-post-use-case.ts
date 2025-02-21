import { UsersRepository } from "@/repositories/users-repository"
import { ResourceNotFoundError } from "./errors/resource-not-fount-error"
import { Post } from "@prisma/client"
import { PostsRepository } from "@/repositories/posts-repository"

interface GetPostUseCaseRequest {
    postId: string
}

interface GetUserUseCaseResponse {
    post: Post
}


export class GetPostUseCase {
    constructor (private PostsRepossitory: PostsRepository){}

    async execute({postId}: GetPostUseCaseRequest): Promise<GetUserUseCaseResponse>{
        const post = await this.PostsRepossitory.findById(postId)
    

    if (!post){
        throw new ResourceNotFoundError()
    }

    return { post }

    }
    
}
import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getAll } from "./getAll";
import { deletePost } from "./delete";
import { update } from "./update";
import { get } from "./get";
import { getUserPosts } from "./findByUserId";

export function postRoutes(app: FastifyInstance){
    app.post('/posts', create)

    app.get('/posts/:postId', get)
    app.get('/posts/getall', getAll)
    app.get('/posts/users/:userId', getUserPosts)

    app.delete('/posts/:postId', deletePost)

    app.patch('/posts/:postId', update)

}
import { notFound } from "next/navigation"
import Post from "../../../models/Post"
import { connect } from "../../../utils/db"
import { NextResponse } from "next/server"

export const GET = async (request) => {


    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch(err) {
        return new NextResponse('Database Error', { status: 500 })
    }

}
export const POST = async (request) => {

    const body = await request.json();

    const newPost = new Post(body)

    try {
        await connect()

        await newPost.save();

        return new NextResponse("Post has been Created", { status: 201 })
    } catch(err) {
        notFound()
        return new NextResponse('Database Error', { status: 500 })
    }

}
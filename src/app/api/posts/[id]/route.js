import { NextResponse } from "next/server";
import Post from "../../../../models/Post";
import { connect } from "../../../../utils/db";

export const GET = async (request, { params }) => {
  const { id } = await params;
  try {
    await connect();

    const posts = await Post.find();
    const post = posts.find((item) => item._id == id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = await params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

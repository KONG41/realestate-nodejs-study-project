import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const Post = ({ data }) => {
  return (

    <>
      {
        data.map(item => (
          <div key={item.id}>
            <p>ID : {item.id}</p>
            <p>Title : {item.title}</p>
            <p>Content : {item.content}</p>
          </div>
        ))
      }
    </>
  );
}
export default Post;

export async function getServerSideProps() {

  const posts = await prisma.post.findMany()

  return {
    props: {
      data: posts
    },
  };

};
import axios from "axios";

const CLINET_ID = process.env.NEXT_PUBLIC_API_KEY_NAVER_CLIENT_ID;
const CLINET_PW = process.env.NEXT_PUBLIC_API_KEY_NAVER_CLIENT_PW;

export default async function searchBlogReview() {
  try {
    // const response = await axios.get("/v1/search/image.json", {
    //   params: {
    //     query: "평택 내차어때", // 검색 키워드
    //     sort: "sim", // 검색 결과 정렬 방법(sim: 정확도 순)
    //     display: 100, // 한 번에 표시할 검색 결과
    //   },
    const response = await axios.get("/v1/search/blog.json", {
      params: {
        query: "평택내차어때", // 검색 키워드
        sort: "sim", // 검색 결과 정렬 방법(sim: 정확도 순)
        display: 100, // 한 번에 표시할 검색 결과
      },
      headers: {
        "X-Naver-Client-Id": CLINET_ID,
        "X-Naver-Client-Secret": CLINET_PW,
      },
    });
    // console.log(response.data.items);
    return response.data.items.filter((post) => {
      if (
        post.bloggerlink === "blog.naver.com/chea789" &&
        post.title.search("고객 리뷰") > -1
      ) {
        return post;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

interface PoseSearchPagePorps {
  // searchParams: Promise<{condition: "xx", keyword: "xx"}>  // URLSearchParams 객체
  searchParams: Promise<{ condition: string; keyword: string }>;
}

export default async function PostSearchpage({
  searchParams,
}: PoseSearchPagePorps) {
  // const [searchParams] = useSearchParams(); [URLSearchParams객체, 쿼리수정하는함수]
  // const condition = SearchParams.get('condition');         // condition=title
  // const keyword = SearchParams.get('keyword');             // keyword=안녕
  // 데이터 패칭 (condition, keyword)                            => 검색결과

  const { condition, keyword } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 검색 페이지</h1>
      <p>검색조건 : {condition}</p>
      <p>검색키워드 : {keyword}</p>
    </div>
  );
}

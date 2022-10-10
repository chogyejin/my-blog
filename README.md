# My Blog with SSG

## Next.js로 마크다운 블로그 만들기, [배포 링크](https://my-blog-zeta-dun.vercel.app/)

### 세팅

- `yarn create next-app —typescript`
- `yarn set version berry`
- `yarn install` ⇒ node_modules가 아닌 \***\*Plug’n’Play\*\*** 방식 이용
  - .yarn에서 패키지 관리
  - Zero-install 적용
  ```
  // .gitignore
  .yarn/*
  !.yarn/cache
  !.yarn/patches
  !.yarn/plugins
  !.yarn/releases
  !.yarn/sdks
  !.yarn/versions
  ```
- VSCode에서 TypeScript와 함께 쓰기
  - `yarn dlx @yarnpkg/sdks vscode` [[링크](https://yarnpkg.com/getting-started/editor-sdks)]

### 구현

- 리스트 페이지(`index.tsx`)
  - `getStaticProps`로 마크다운이 있는 폴더의 slugs를 통해 주소 모두 가져오기
- 상세 페이지(`[slug].tsx`)
  - `getStaticPaths`로 dynamic routes로 만들어진 page에 대해 path 생성
  - `getStaticProps`로 특정 post에 대한 정보 가져오기
- 함수(`lib/api.ts`)
  - 서버 사이드에서 사용할 커스텀 함수 작성(`getPaths`, `getPostBySlug`)
- 마크다운 디렉토리(`__posts`)
  - `test1.md`, `test2.md`

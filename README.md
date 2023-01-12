# :christmas_tree: ComponenTree

1. 깃 주소를 입력하세요.
2. 본인의 프로젝트가 'React'인지 'Next'인지 선택하세요.
3. 컴포넌트의 관계를 눈으로 확인하세요!

<br>

## :star: 기획 의도

회사에서 협업을 진행하면서 혹은 팀 프로젝트를 진행하면서 공통 컴포넌트들을 어떤 페이지들에서 사용하고 있는지와 각 컴포넌트 간의 관계를 연결하여 그래프로 시각화해서 보여주는 도구가 있으면 협업이 좀 더 수월하게 이뤄지지 않을까 생각하여 이 프로젝트를 기획하게 되었습니다.

<br>

## :sparkles: 기술 스택

### Frontend

|  Name  | Version |
| :----: | :-----: |
| react  | 18.2.0  |
|   d3   |  7.7.0  |
| recoil |  0.7.6  |

### Backend

|  Name   | Version |
| :-----: | :-----: |
| express | 4.18.2  |

<br>

## :alarm_clock: 프로젝트 기간

2022년 12월 15일 ~ 2023년 01월 13일

- Week1
  - 프로젝트 초기 셋팅
  - 메인페이지 제작
- Week2
  - 백엔드 셋팅 및 API 작성
- Week3
  - 데이터 가공 및 d3 시각화
  - 코드 리펙토링, CSS 수정
- Week4
  - 테스트 코드 작성
  - Read.me 작성
  - 배포

<br>

## :movie_camera: 시연 영상

|        페이지        | 영상                                                                                                                                           |
| :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|      렌딩페이지      | <img src="https://user-images.githubusercontent.com/95268742/211948860-01a9bf2f-fa89-4e7f-b35e-e95cc65556d5.gif" width="100%"/>                |
| Force-directed Graph | <img src="https://user-images.githubusercontent.com/95268742/211949747-c433ca5f-9fd7-4b9f-9c94-8a08177795e6.gif" width="100%"/>                |
|      Pie-Graph       | <img width="1407" alt="pie-graph" src="https://user-images.githubusercontent.com/95268742/211955618-33f20164-113d-4096-b115-181b992d378c.png"> |
|      Bar-Graph       | <img src="https://user-images.githubusercontent.com/95268742/211949986-74aeb13a-76bb-44cc-8c6f-53d0e6761216.gif" width="100%"/>                |

<br>

## :pushpin: 핵심 구현 사항

git clone이 실행된 후 clone한 내부의 폴더구조를 읽어야 하는데 git clone 이 완료되기 전에 폴더를 읽어 오류가 발생하었습니다. 이를 해결하기 위해 new Promise() 내부에서 exec 명령어를 사용했습니다. 기존 해결방법으로는 `exec('cd repo && mkdir ${UNIQUE} && cd ${UNIQUE} && git clone ${url} && ls', () => {})`였지만 new Promise()를 사용하여 어느시점에 에러가 발생하는지 자세히 파악할 수 있게 되었습니다.

<br>

파일을 cat 하여 import한 컴포넌트들을 타고 들어가는 과정에서 상대경로로 import한 경우 경로가 깨져 오류가 발생하였습니다. 또한, import 경로가 파일일 경우 cd로 해당 파일로 이동할 수 없어 오류가 발생하였습니다. 첫뻔재 오류는 cat 명령어를 사용하여 파일에 들어오기 전 경로를 `calcPwd()`함수에 넘겨주어 경로가 유동적으로 변할 수 있게 해주었으며, 두번째 오류는 리눅스 파일 검색 명령어인 `find`를 활용하였습니다. git clone한 폴더 내부에서 import 경로의 제일 마지막 폴더 혹은 파일명을 사용하여 뒤에 확장자가 있는지 없는지 확인하여 폴더일 경우와 파일일 경우를 구분하였습니다.

<br>

그래프를 그려주는 화면에서 반응형 페이지를 구현하기 위해 `ResizeObserver()`를 사용하였습니다. 그래프를 보여주기 위해 사용된 svg태그에 ref를 부여하여 해당 ref를 인수로 넘겨주었습니다. 이 후 페이지의 변화가 일어날 때마다 width값과 height값을 가져올 수 있었고 이후, width값과 height값을 리턴해주는 커스텀훅으로 만들었습니다. 이를 통해 그래프를 보여주는 페이지에서 반응형을 구현할 수 있었습니다.

<br>

## :books: 프로젝트 설명

인풋창에 git clone할 주소를 입력한 후 `React`와 `Next`버튼 중 하나를 선택한 후 `Go`버튼을 누르면 백엔드 서버에 API 요청을 보냅니다.

백엔드 서버에 요청이 들어가게 되면, 입력받은 주소를 리눅스 명령어로 git clone을 진행합니다.
동시에 여러건의 요청을 받을 수 있기 때문에 각 요청마다 유니크한 값을 주기 위해 폴더를 uuid 값으로 지정해주고 그 내부에서 git clone을 진행합니다.

### `Next`

`Next`버튼을 선택했다면 pages 폴더를 find 명령어로 탐색 한 후에 tree명령어로 하위 폴더 및 파일 목록들을 추출합니다.
추출된 목록들을 가공한 후에 파일만 `pageList` 변수에 배열로 담아줍니다.
페이지들이 담긴 배열을 map을 통해 `readFile()` 함수를 실행시킵니다.

`readFile()` 함수는 현재 경로와 파일명+확장자를 매개변수로 받습니다.
리눅스 명령어로 cd 명령어로 파일 경로로 이동 한 다음 cat을 통해 해당 파일의 모든 내용을 출력한 후 import한 파일들을 추출합니다.
이 때, import한 항목들이 컴포넌트인지 확인하기 위해 다음과 같은 조건을 걸어주었습니다.

<br/>

> 주석 처리의 유무 <br/>
> 객체의 구조분해할당이 이뤄졌는지의 유무 <br/>
> react 혹은 next의 유무 <br/>
> @의 유무 <br/>
> styled의 유무 <br/>

<br/>

위의 조건을 충족시킨 import 항목들을 `calcPwd()`함수를 실행시킵니다.
`calcPwd()`는 `resultPwd`와 `rest`를 객체로 return해주는데,
`resultPwd`는 해당 페이지에서 import한 컴포넌트의 경로가 파일인지 폴더인지 확인 한 후에 현재의 pwd에서 폴더까지의 경로로 cd 한 후에 pwd값을 추출한 값입니다.
`rest`는 파일이라면 해당 파일명이 들어가고, 폴더라면 기본값인 index.js 혹은 index.tsx 로 담기게 됩니다.

`export default`를 포함하고 있는 함수명을 찾아 `componentName`으로 지정해줍니다.

이후 다시 `readFile()`함수를 호출하여 데이터를 계층구조화 합니다.

결과적으로는 컴포넌트에서 import한 컴포넌트들의 경로는 importPath에 배열로 담기고, 컴포넌트들은 children 배열 내 객체 내에 담기게 됩니다.

아래의 주소는 전에 진행했던 프로젝트이며 결과 예시입니다. <br/>
URL: https://github.com/Junejae1625/Numble_reference.git

```
  {
    componentName: "MyApp",
    importPath: [
      "/home/ec2-user/ComponenTree-Backend/repo/9ed767b4-625e-46c4-b865-3a130fe7aa45/Numble_reference/src/components/commons/layout",
    ],
    children: [
      {
        componentName: "Layout(props: IPropsLayout)",
        importPath: [
          "/home/ec2-user/ComponenTree-Backend/repo/9ed767b4-625e-46c4-b865-3a130fe7aa45/Numble_reference/src/components/commons/layoutSidebar",
          "/home/ec2-user/ComponenTree-Backend/repo/9ed767b4-625e-46c4-b865-3a130fe7aa45/Numble_reference/src/components/commons/layoutSideMenu",
        ],
        children: [
          {
            componentName: "SideBar",
          },
          {
            componentName: "LayoutSideMenu",
          },
        ],
      },
    ],
  },
    {
    componentName: "GamePage ",
    importPath: [
      "/home/ec2-user/ComponenTree-Backend/repo/9ed767b4-625e-46c4-b865-3a130fe7aa45/Numble_reference/src/components/units/game",
    ],
    children: [
      {
        componentName: "GameContainer",
        importPath: [
          "/home/ec2-user/ComponenTree-Backend/repo/9ed767b4-625e-46c4-b865-3a130fe7aa45/Numble_reference/src/components/units/game",
        ],
        children: [
          {
            componentName: "GamePresenter(props: IPropsGamePresenter)",
            importPath: [
              "/home/ec2-user/ComponenTree-Backend/repo/9ed767b4-625e-46c4-b865-3a130fe7aa45/Numble_reference/src/components/commons/layoutSubtitle",
            ],
            children: [
              {
                componentName: "LayoutSubTitle",
              },
            ],
          },
        ],
      },
    ],
  },
  {...},{...}.{...},...
```

d3에서 사용할 nodes와 links를 추출하기 위해 재귀함수를 사용하였습니다.
`makeNodes()`함수를 사용하여 계층구조로 이루어진 데이터의 `componentName`과 `import`횟수를 배열화 하였습니다.
`makeLinks()`함수를 사용하여 계층구조로 이루어진 데이터와 `makeNodes()`함수의 결과값을 넘겨주어 import한 노드들의 인덱스값을 추출하여 배열화 하였습니다.

git clone을 하기 위해 만든 폴더를 삭제한 후에 `resultNode`, `resultLink`, `time`을 return해줍니다.

### `React`

`React`버튼을 선택했다면 App.js 혹은 App.tsx의 경로를 find 명령어로 탐색합니다.<br>
이 후 과정은 `Next`와 동일합니다.

<br>

## :fire: 회고

d3를 프로젝트에 적용하기 위해 docs를 보고 이해하는 능력과 다른 예시 코드들을 제 코드에 적용하는 능력을 크게 기를 수 있었습니다. 다양한 예시를 찾아보았으며 각각의 예시 코드들을 보면서 공통점과 패턴을 찾기 위해 노력하였습니다. 이번 프로젝트를 통해 d3를 사용할 수 있게 되었다는 성취감 보다는 처음 접하는 기술을 어떻게 저의 코드에 적용해야 하는지, 다양한 예시를 찾기 위해 어떻게 검색해야 하는지 알게 된 성취감이 더 뿌듯하였습니다. 어려운 문제를 직면했을 때 이를 해결하는 힘을 기르게 된 뜻깊은 프로젝트였습니다.

<br>
 프로젝트 초반에 다양한 경우의 수를 고려하며 백엔드 API를 만들다 보니 프로젝트의 진도가 진행되지 않았습니다. 불특정 다수의 코드 스타일을 미리 알 방법이 없으니 '만약 경로가 내가 생각한 대로 설정되어있지 않다면 어쩌지?', '만약 프로젝트가 타입스크립트로 진행했을 때는 확장자를 어떻게 추출해야 할까?', '컴포넌트를 구조 분해 할당의 유무로 구분했는데 만약 컴포넌트를 구조 분해 할당으로 import 했다면 어쩌지?', 등등. 정말 수많은 고민과 고려사항들이 제 프로젝트의 발목을 잡았습니다. 이를 해결하기 위해 내가 할 수 있는 것과 정말 필요한 기능은 무엇인지 정하고 우선순위를 정했습니다. 그 후 우선순위로 나온 기능들을 최대한 단계별로 분리했습니다. 단계별로 분리하니 어디서부터 시작해야 하는지와 내가 할 수 있는 기능들이 보이기 시작했고, 하나씩 해결해 나갔습니다. 이를 통해 아무리 막막하고 거대한 일도 우선순위를 정하고 세분화한다면 해결할 수 있다는 자신감을 얻게 되었습니다. 또한, 폴더구조의 중요성과 코드 규칙의 중요성을 되돌아 보게 되었습니다.
 
<br>
<br>
<br>
 욕심이 많았던 만큼 아쉬움도 많은 프로젝트였습니다. 고민으로만 하루를 날린 적도 있었고, 너무 어려운 주제를 선택한 건 아닌지 후회도 많이 했습니다. 하지만 그만큼 많이 배울 수 있었고 초기 기획이 세부적이고 자세할수록 프로젝트의 수정이 적어진다는 것을 느꼈습니다. 기획과 개발 기간 동안 했던 수많은 고민이 개발자가 되는 데 필요한 고민이었다는 것을 그리고 그러한 고민이 저를 더 성장할 수 있게끔 도와주는 발판이라는 점을 항상 되새길 것입니다.

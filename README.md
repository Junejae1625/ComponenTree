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

Backend-repo : https://github.com/Junejae1625/ComponenTree-Backend.git

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

## :pushpin: 위기 및 극복 방법

git clone이 실행된 후 clone한 내부의 폴더구조를 읽어야 하는데 git clone 이 완료되기 전에 폴더를 읽어 오류가 발생하었습니다. 이를 해결하기 위해 new Promise() 내부에서 exec 명령어를 사용했습니다. 기존 해결방법으로는 `'exec('cd repo && mkdir ${UNIQUE} && cd ${UNIQUE} && git clone ${url} && ls', () => {})' `명령어를 사용했지만, new Promise()를 사용하여 git clone이 완료되는 시점까지를 동기화 해주었습니다. 이를 통해 어느시점에 에러가 발생하는지 자세히 파악할 수 있게 되었습니다.

<br>

프로젝트 초반에 파일을 cat 하여 import한 컴포넌트들을 타고 들어가는 과정에서 import한 컴포넌트의 경로가 상대경로로 설정되어 있어 Current Working Directory와 현재 파일의 경로가 맞지 않아 오류가 발생하였습니다. 또한, import 경로가 파일인 경우 cd 명령어로 해당 파일로 이동할 수 없어 오류가 발생하였습니다. 이를 해결하기 위해 cat 명령어를 사용하기 전의 경로를 가져와 유동적으로 경로를 변경할 수 있게끔 함수를 구현했으며, 리눅스 파일 검색 명령어인 'find'를 활용하여 경로가 폴더인지 파일인지 구분하였습니다.

<br>

그래프를 그려주는 화면에서 반응형 페이지를 구현하기 위해 `ResizeObserver()`를 사용하였습니다. 그래프를 보여주기 위해 사용된 svg태그에 ref를 부여하여 해당 ref를 인수로 넘겨주었습니다. 이 후 페이지의 변화가 일어날 때마다 width값과 height값을 가져올 수 있었고 이후, width값과 height값을 리턴해주는 커스텀훅으로 만들었습니다. 이를 통해 그래프를 보여주는 페이지에서 반응형을 구현할 수 있었습니다.

<br>

## :books: 프로젝트 설명

인풋창에 git clone할 주소를 입력한 후 'React'와 'Next'버튼 중 하나를 선택한 후 'Go' 버튼을 누르면 백엔드 서버에 API 요청을 보냅니다.

백엔드 서버에 요청이 들어가게 되면, 입력받은 주소를 리눅스 명령어로 git clone을 진행합니다.
동시에 여러건의 요청을 받을 수 있기 때문에 각 요청마다 유니크한 값을 주기 위해 폴더를 uuid 값으로 지정해주고 그 내부에서 git clone을 진행합니다.

### `Next`

`Next`버튼을 선택했다면 pages 폴더를 find 명령어로 탐색 한 후에 tree 명령어로 하위 폴더 및 파일 목록들을 추출합니다. 추출된 목록 중 파일만 함수를 실행시킵니다.

이 함수는 재귀함수로 현재 경로와 파일명과 확장자를 매개변수로 받습니다. 현재 경로로 Working Directory를 변경시키고 해당 폴더에 위치한 파일을 cat 하여 import 한 컴포넌트들을 추출합니다. 만약 컴포넌트가 있다면 이 함수를 다시 호출하여 해당 페이지의 자식요소로 넣어주고, 더이상 컴포넌트가 존재하지 않는다면 다음페이지로 이동하여 동일한 로직을 실행합니다.

이 때, import한 항목들이 컴포넌트인지 확인하기 위해 다음과 같은 조건을 걸어주었습니다.

<br/>

> 주석 처리의 유무 <br/>
> 객체의 구조분해할당이 이뤄졌는지의 유무 <br/>
> react 혹은 next의 유무 <br/>
> @의 유무 <br/>
> styled의 유무 <br/>

<br/>

위의 조건을 충족시킨 import 항목들을 함수를 통해 import한 해당 컴포넌트의 경로가 폴더인지 파일인지 확인하며, Working Directory를 폴더까지 이동한 후에 Current Working Directory를 얻습니다.

컴포넌트의 이름은 함수형 컴포넌트를 기준으로 진행하였으며 'export default'를 포함하고 있는 함수명을 찾아 'componentName'으로 지정해줍니다.

이후 다시 함수를 호출하여 데이터를 계층구조화 합니다.

결과적으로는 컴포넌트에서 import한 컴포넌트들의 경로는 importPath에 담기고, 컴포넌트들은 children에 담기게 됩니다.

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

d3에서 사용할 nodes와 links를 추출하기 위해 계층구조화 된 데이터에 재귀함수를 사용하였습니다.
nodes는 컴포넌트의 이름과 import한 횟수이며, links는 nodes 배열의 인덱스 값을 사용하였습니다.

위의 모든 과정이 끝나면 git clone한 폴더를 삭제합니다.

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

## :runner: 앞으로의 방향

브라우저의 작동방식을 고려하여 렌딩페이지에서 리 플로우를 최소화 하기 위해 많이 고민했습니다. 그래서 제가 내린 결론은 '마우스가 이동할 때 height 값을 변경하는 것이 아니라 background 속성만 변경하게 된다면 리 페인트만 일어나겠다!'였습니다. 그래서 'scrollHeight' 값과 'event.clientY'값을 가져와 특정 비율의 background 속성에 변화를 해주었습니다. 하지만 속성과 메서드를 사용했다는 이유만으로도, 리 플로우가 발생하는 항목들이 있다는 것을 알게 되었습니다. ([참고](https://12bme.tistory.com/140)) 유저들에게 좋은 경험을 주기 위해 더 나은 방법은 없는지 끊임없이 고민하고 공부하는 개발자가 되어야겠다고 생각했습니다.

욕심이 많았던 만큼 아쉬움도 많은 프로젝트였습니다. 고민으로만 하루를 날린 적도 있었고, 너무 어려운 주제를 선택한 건 아닌지 후회도 많이 했습니다. 하지만 그만큼 많이 배울 수 있었고 기획의 중요성을 느낄 수 있었습니다.
프로젝트 동안 했던 수많은 고민이 개발자가 되는 데 필요한 고민이었다는 것과 그러한 고민이 저를 더 성장할 수 있게끔 도와주는 발판이라는 점을 항상 되새길 것입니다.

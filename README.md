# 이것이 취업을 위한 코딩 테스트다 with 자바스크립트

# 목차

## [3. 그리디](3/)

## [4. 구현](4/)

- [0으로 초기화된 이차원 배열 만들기](4/4-4.js)

## [5. DFS / BFS](5/)

- [DFS](5/5-8.js)
- [BFS](5/5-9.js)
- [~으로 초기화된 일차원 배열 만들기](5/5-8.js)
- [연속된 숫자의 입력 받기](5/5-10.js)

## [6. 정렬](6/)

- [선택 정렬](6/6-1.js)
- [삽입 정렬](6/6-2.js)
- [퀵 정렬 1](6/6-4.js)
- [퀵 정렬 2](6/6-5.js)
- [계수 정렬](6/6-6.js)

## [7. 이진 탐색](7/)

- [재귀로 구현한 이진 탐색](7/7-2.js)
- [반복문으로 구현한 이진 탐색](7/7-3.js)

- [집합 자료형으로 데이터 포함 검사](7/7-7.js)

## [8. 다이나믹 프로그래밍](8/)

- [재귀호출 피보나치](8/8-2.js)
- [반복문 피보나치](8/8-4.js)

### 문제

- [1로 만들기(바텀 업)](8/8-5.js)
- [개미 전사(바텀 업)](8/8-6.js)
- [바닥 공사(바텀 업)](8/8-7.js)
- [효율적인 화폐 구성(바텀 업)](8/8-8.js)

## [9. 최단 경로](9/)

- [다익스트라 알고리즘 - 특정 노드에서 특정 노드까지 최단 거리](9/9-1.js)
- [플로이드 워셜 알고리즘 - 모든 노드에서 모든 노드까지 최단 거리](9/9-3.js)

- [**우선순위 큐**](9/PriorityQueue.js)
- [**우선 순위 큐를 이용한 성능 개선 다익스트라 알고리즘**](9/9-2.js)

## [10. 그래프 이론](10/)

- [서로소 집합 알고리즘](10/10-3.js)
- [사이클 판별 - 모든 합연산(union) 이후 루트 노드가 모두 같으면 사이클](10/10-4.js)
- [크루스칼 알고리즘 - 모든 노드를 연결하는 최소 비용 구하기](10/10-5.js)
  - 간선의 비용으로 정렬한 다음 사이클이 생기지 않으면 서로 연결
- [위상 정렬 - 선후 관계를 가지는 순서로 정렬](10/10-6.js)
  - ex) 고급 알고리즘의 선행 과목은 자료구조와 알고리즘

### 문제

- [팀 결성 - 서로소](10/10-7.js)
- [도시 분할 계획 - 크루스칼](10/10-8.js)
- [커리큘럼 - 위상 정렬](10/10-9.js)

## +백준에서 `nodejs`로 입력 받기

```js
// 1. 하나의 값을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 3. 여러 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
  ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);
```

1번 내용에서 이것저것 변형시키면 된다.

# 오답 노트

## 그리디

- [ ] [만들 수 없는 금액](./11/3.js)
- [ ] [무지의 먹방 라이브](./11/6.js)

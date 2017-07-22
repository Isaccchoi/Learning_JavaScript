let currenttempC = 22; // 섭씨 언더
// let은 변수 선언시 사용

currenttempC = 22.5;
// let은 선언시에만 사용 하고, 각 변수는 한 번만 선언합니다.

let targetTempC; // let targetTempC = undefined;와 같음
// 초기값을 할당하지 않으면 undefined가 들어감

let targetTempC, room1 = "conference_room_a", room2 = "lobby";
// let을 이용해 여러 변수를 한 번에 선언하는 것도 가능

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
// 상수는 변경 불가, 상수이름에는 대문자와 밑줄만 사용하는것을 권장(규칙은 아님)
// 고정된 값을 사용할 때 상수를 사용 - 이해하기 쉬우며, 실수로 바꾸는 일이 줄어듬
// 변수 상수중 정하기 힘들때 상수로 하는 것이 프로그램의 안정성을 높힐 수 있음

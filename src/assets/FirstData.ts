import {types} from "../page/Chapter";
import oneFour from "./image/1-4.png"
import oneTen from "./image/1-10.png"
import oneEleven from "./image/1-11.png"
import oneThirteen from "./image/1-13.png"

export const FirstData: types = [
    {
        "id": 1,
        "date": "20년 11월",
        "problem": "운영체제의 발달 과정을 순서대로 나열하시오.",
        "state": "list",
        "listData": ["1. 다중 처리 시스템", "2. 범용 시스템", "3. 분산 처리 시스템", "4. 일괄 처리 시스템"],
        "result": ["4 1 2 3"]
    },
    {
        "id": 2,
        "date": "20년 8월",
        "problem": "구글(Google) 사의 모바일 컴퓨터용 운영체제(OS) 안드로이드(Android)는 버전 1.1부터 버전 9까지의 모든 코드 네임이 디저트 이름이다. 버전 7이 누가(Nougat), 버전 8이 오레오(Oreo)였다. 그렇다면 버전 9의 코드 네임은 무엇인지 쓰시오.",
        "state": "text",
        "result": ["Pie", "파이"]
    },
    {
        "id": 3,
        "date": "이전기출",
        "problem": "컴퓨터 시스템을 구성하고 있는 하드웨어 장치와 일반 컴퓨터 사용자 또는 컴퓨터에서 실행되는 응용 프로그램의 중간에 위치하여 사용자들이 보다 쉽고 간편하게 컴퓨터 시스템을 이용할 수 있도록 제어 관리하는 프로그램이 무엇인지 쓰시오.",
        "state": "text",
        "result": ["운영체제", "OS", "Operating System"]
    },
    {
        "id": 4,
        "date": "이전기출",
        "problem": "컴퓨터 시스템의 구성은 아래 그림과 같은 개념으로 설명될 수 있다. 괄호 안에 들어갈 가장 적합한 프로그램을 쓰시오.",
        "state": "img",
        "url": `${oneFour}`,
        "result": ["운영체제", "OS", "Operating System"]
    },
    {
        "id": 5,
        "date": "이전기출",
        "problem": "운영체제의 성능 평가 기준 중 시스템에 작업을 지시하고 나서부터 결과를 받을 때까지의 경과 시간을 무엇이라고 하는지 쓰시오.",
        "state": "text",
        "result": ["반환 시간", "Turn Around Time"]
    },
    {
        "id": 6,
        "date": "이전기출",
        "problem": "운영체제의 성능 평가 기준 중 시스템이 주어진 문제를 얼마나 정확하게 해결하는가를 나타내는 척도를 무엇이라고 하는지 쓰시오.",
        "state": "text",
        "result": ["신뢰도", "Reliability"]
    },
    {
        "id": 7,
        "date": "이전기출",
        "problem": "다음 설명이 의미하는 운영체제의 성능 평가 기준을 쓰시오.",
        "state": "list",
        "listData": ["· 컴퓨터 시스템 내의 한정된 각종 자원을 여러 사용자가 요구할 때, 어느 정도 신속하고 충분히 지원해 줄 수 있는지의 정도이다.", "· 사용 가능한 하드웨어 자원의 수나 다중 프로그래밍 정도 등의 요소가 좌우하는 것으로, 같은 종류의 시스템 자원수가 많을 경우에는 이것이 높아질 수 있다."],
        "result": ["사용 가능도", "Availability"]
    },
    {
        "id": 8,
        "date": "이전기출",
        "problem": "다음 보기 중 운영체제의 종류를 모두 골라 기호(㉠~㉥)로 쓰시오.",
        "state": "list",
        "listData": ["㉠ Windows", "㉡ LINUX", "㉢ PL/1", "㉣ MS-DOS", "㉤ PASCAL", "㉥ UNIX"],
        "result": ["ㄱ ㄴ ㄹ ㅂ"]
    },
    {
        "id": 9,
        "date": "20년 6월",
        "problem": "CUI(Command Use Interface)는 명령어를 직접 입력해서 명령을 수행하는 방식으로, DOS에서 주로 사용한다. 반면 마우스로 아이콘이나 메뉴를 선택하여 명령을 수행하는 방식으로 주로 Windows에서 사용하는 인터페이스 방식을 가리키는 용어를 쓰시오.",
        "state": "text",
        "result": ["GUI", "Graphic User Interface", "그래픽 사용자 인터페이스"]
    },
    {
        "id": 10,
        "date": "20년 11월",
        "problem": "Windows 10의 캡쳐 도구와 비슷한 기능으로, 아래와 같은 화면이 표시되도록 하는 단축키를 쓰시오. (예시: Windows Key + Tab)",
        "state": "img",
        "url": `${oneTen}`,
        "result": ["Windows Key + Shift + S"]
    },
    {
        "id": 11,
        "date": "20년 8월",
        "problem": "Windows 10을 사용하는 컴퓨터에서 모니터 두 대를 연결하여 사용 할 때 다음과 같은 메뉴가 표시되도록 하는 단축키를 쓰시오. (예시: Windows Key + Tab)",
        "state": "img",
        "url": `${oneEleven}`,
        "result": ["Windows Key + P"]
    },
    {
        "id": 12,
        "date": "20년 6월",
        "problem": '"파일 탐색기" 기능을 수행하기 위한 Windows 10의 단축키를 쓰시오. (예시: Windows Key + Tab)',
        "state": "text",
        "result": ["Windows Key + E"]
    },
    {
        "id": 13,
        "date": "21년 11월",
        "problem": "다음은 Windows 10에서 작업 표시줄이 ‹그림›과 같을 때, 'Discord'를 실행하기 위한 바로 가기 키이다. 괄호에 들어갈 알맞은 숫자를 쓰시오.",
        "state": "img",
        "url": `${oneThirteen}`,
        "result": ["4"]
    },
    {
        "id": 14,
        "date": "21년 8월",
        "problem": "다음은 여러 개의 창을 사용하는 중에 바탕 화면을 보기 위해 모든 창을 최소화하는 바로가기 키이다. 괄호에 들어갈 알맞은 키를 쓰시오.",
        "state": "list",
        "listData": ["Windows Key + ( )"],
        "result": ["D"]
    },
    {
        "id": 15,
        "date": "21년 4월",
        "problem": "다음 중 한글 Windows 10에서 현재 활성화된 Window 창을 종료할 때 사용하는 단축키를 쓰시오. (단 [키 목록 보기]에서 찾아 [예시]와 같이 쓰시오.)",
        "state": "list",
        "listData": ["[키 목록 보기]", "Ctrl, Alt, Shift, PgUp, PgDn, Home, End, Tab, 숫자 0~9, 알파벳 a~z, A~Z, 기능키 F1~F12, Windows Key, Insert, Delete, [한/영], [한자], ~, !, @, #, $, %, ^, &, *, -, +, (, )", "[예시]", "Windows Key + n"],
        "result": ["Alt + F4"]
    },
    {
        "id": 16,
        "date": "21년 4월",
        "problem": "LINUX 운영체제에 대한 다음 설명에서 괄호(①, ②)에 들어갈 적합한 용어를 쓰시오.",
        "state": "list",
        "listData": ["· 사용자는 (①)을 통해 운영체제와 대화를 수행하는데, (①)은 사용자의 명령이 입력되면 이것을 번역하여 명령을 수행하는 명령어 해석기이자, 사용자와 시스템 간의 인터페이스 역할을 담당한다.", "· (②)은 운영체제의 핵심으로, 장치 관리, 프로세스 관리, 프로세스간 통신, 파일 관리 등의 작업을 수행한다. 컴퓨터가 부팅될 때 주기억장치에 적재되며, 프로그램과 하드웨어 간의 인터페이스 역할을 담당한다."],
        "result": ["쉘, 커널", "Shell, Kernel"]
    },
    {
        "id": 17,
        "date": "이전기출",
        "problem": "다음이 설명하는 운영체제(OS)를 쓰시오.",
        "state": "list",
        "listData": ["· 1960년대 AT&T Bell 연구소, MIT, General Electric이 공동 개발한 운영체제이다.", "· Time Sharing System을 위해 설계되었다.", "· 대부분 C 언어로 작성되어 있다.", "· Tree 구조의 파일 시스템을 갖는다."],
        "result": ["UNIX", "유닉스"]
    },
    {
        "id": 18,
        "date": "이전기출",
        "problem": "사용자의 명령어를 인식하여 프로그램을 호출하고 명령을 수행하는 명령어 해석기로, 시스템과 사용자 간의 인터페이스를 담당하는 UNIX 시스템의 구성 요소를 쓰시오.",
        "state": "text",
        "result": ["쉘", "Shell"]
    }, {
        "id": 19,
        "date": "이전기출",
        "problem": "다음이 설명하는 운영체제(OS)를 쓰시오.",
        "state": "list",
        "listData": ["· 1991년 Linus Torvalds가 UNIX를 기반으로 개발한 운영체제이다.", "· 프로그램 소스 코드가 무료로 공개되어 있기 태문에 프로그래머가 원하는 기능을 추가할 수 있고, 다양한 플랫폼에 설치하여 사용이 가능하며, 재배포가 가능하다."],
        "result": ["LINUX", "리눅스"]
    },
    {
        "id": 20,
        "date": "21년 8월",
        "problem": "영어 'List'에서 파생된 단어로, 리눅스(Linux)에서 파일 목록을 표시하는 명령어를 쓰시오.",
        "state": "text",
        "result": ["ls"]
    },
    {
        "id": 21,
        "date": "21년 6월",
        "problem": "UNIX에서 사용하는 명령어에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 명령어를 쓰시오.",
        "state": "list",
        "listData": ["· ( ① ) : 파일을 삭제하는 명령어이다.", "· ( ② ) : 파일의 사용 권한을 변경할 때 사용하는 명령어이다."],
        "result": ["rm, chmod"]
    },
    {
        "id": 22,
        "date": "짠!~ 깜짝놀랬지!~",
        "problem": "다음 Javascript언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
        "state": "code",
        "codeData": "const abcd = 1;\nabcd += 120;\nabcd = 500;\nconsole.log(abcd);\nconsole.log('후후...과연 이 글자가 나올까?ssssssssssssssssssssss');",
        "language": "javascript",
        "result": [""]
    },
    {
        "id": 23,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 24,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 25,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 26,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 27,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 28,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 29,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
    {
        "id": 30,
        "date": "",
        "problem": "",
        "state": "",
        "result": [""]
    },
]
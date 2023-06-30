import {types} from "../page/Chapter";

export const PastQuestion: types[] = [
    [
        {
            "id": 1,
            "date": "기출 예상",
            "problem": "다음 Java로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
            "state": "code",
            "language": "java",
            "code": "public class Test {\n    public static void main(String[] args) {\n        char num = 0x26;\n        System.out.printf(\"%05x\", num << 3);\n    }\n}",
            "result": [
                "00130"
            ]
        },
        {
            "id": 2,
            "date": "기출 예상",
            "problem": "다음은 사용자 \"KoreanCheck\"에게 <MyTable>의 검색 권한을 부여하기 위한 SQL문이다. <보기>를 참조하여 괄호에 들어갈 알맞은 명령어를 찾아 기호로 쓰시오.",
            "state": "list",
            "listData": [
                "SQL: (    ) SELECT ON MyTable TO KoreanCheck",
                "<보기>",
                "1. CREATE",
                "2. ALTER",
                "3. DROP",
                "4. INSERT",
                "5. DELETE",
                "6. UPDATE",
                "7. GRANT",
                "8. REVOKE",
                "9. COMMIT",
                "10. ROLLBACK"
            ],
            "result": [
                "7"
            ]
        },
        {
            "id": 3,
            "date": "기출 예상",
            "problem": "다음 Java언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
            "state": "code",
            "language": "java",
            "code": "public class Test {\n    public static void main(String[] args) {\n        int[] arr = { 4, 8, 12, 24 };\n        for (int number : arr) {\n            System.out.println(number / 8f);\n        }\n    }\n}",
            "result": [
                "0.5\n1.0\n1.5\n3.0",
                "0.5\n1.0\n1.5\n3.0\n"
            ]
        },
        {
            "id": 4,
            "date": "기출 예상",
            "problem": "<SuperTable>에서 'amount' 속성의 값을 8배로 증가시키고자 할 때 사용해야 할 SQL문으로 알맞은 것을 <보기>에서 찾아 쓰시오.",
            "state": "list",
            "listData": [
                "<보기>",
                "1. ALTER SuperTable COLUMN amount *= 8;",
                "2. ALTER SuperTable ADD amount = amount * 8;",
                "3. ALTER SuperTable UPDATE amount = amount * 8;",
                "4. INSERT SuperTable SET amount = amount * 8;",
                "5. UPDATE amount = amount * 8 FROM SuperTable;",
                "6. UPDATE SuperTable SET amount = amount * 8;",
                "7. UPDATE SET amount = amount * 8 FROM SuperTable;",
                "8. UPDATE SuperTable SET amount *= 8;"
            ],
            "result": [
                "6"
            ]
        },
        {
            "id": 5,
            "date": "기출 예상",
            "problem": "다음 C언어로 구현된 프로그램에 \"Wassup Boy?\"를 입력하였을 때 그 실행 결과를 쓰시오.",
            "state": "code",
            "language": "c",
            "code": "#include <stdio.h>\n\nmain() {\n    int len = 0;\n    char str[50];\n    gets(str);\n    for(int i = 0; str[i]; i++) len += 2;\n    printf(\"%d\", len);\n}",
            "result": [
                "22"
            ]
        },
        {
            "id": 6,
            "date": "기출 예상",
            "problem": "자식 테이블의 항목 값을 삭제할 때 부모 테이블과의 관계로 인하여 삭제가 불가능한 현상은 어떤 무결성 제약으로 인해 발생한 것인지 <보기>에서 찾아 기호를 쓰시오.",
            "state": "list",
            "listData": [
                "<보기>",
                "1. 참조 무결성",
                "2. 도메인 무결성",
                "3. 개체 무결성",
                "4. 고유 무결성",
                "5. 관계 무결성",
                "6. 키 무결성",
                "7. 사용자 정의 무결성",
                "8. NULL 무결성"
            ],
            "result": [
                "1"
            ]
        },
        {
            "id": 7,
            "date": "기출 예상",
            "problem": "다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
            "state": "code",
            "language": "c",
            "code": "#include <stdio.h>\nint num;\n\nvoid grow() {\n    num = 16448000;\n}\n\nint main() {\n    printf(\"%d\", num);\n    num = num * 64 + 1;\n    printf(\"%d\", num);\n    grow();\n    return 0;\n}",
            "result": [
                "01"
            ]
        },
        {
            "id": 8,
            "date": "기출 예상",
            "problem": "소프트웨어 내부의 논리적인 경로, 소스 코드의 복잡도 등을 평가하는 것에 목적을 두는 테스트를 <보기>에서 찾아 기호로 쓰시오.",
            "state": "list",
            "listData": [
                "<보기>",
                "1. 회복 테스트",
                "2. 안전 테스트",
                "3. 구조 테스트",
                "4. 회귀 테스트",
                "5. 병행 테스트",
                "6. 강도 테스트",
                "7. 성능 테스트",
                "8. 프로그램 테스트"
            ],
            "result": [
                "3"
            ]
        },
        {
            "id": 9,
            "date": "기출 예상",
            "problem": "관계형 데이터베이스에서 릴레이션을 구성하는 각각의 행으로, 파일 구조에서는 레코드라고 불린다. 속성의 모임으로 구성되어 각 개체들의 개별 정보를 표현하는 데 사용되는 이것을 가리키는 용어를 쓰시오.",
            "state": "text",
            "result": [
                "튜플",
                "투플",
                "Tuple",
                "tuple",
                "TUPLE"
            ]
        },
        {
            "id": 10,
            "date": "기출 예상",
            "problem": "다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
            "state": "code",
            "language": "c",
            "code": "#include <stdio.h>\nint max = 100;\n\nint main() {\n    int num = 99;\n    if(num >= max) printf(\"max가 큽니다.\");\n    else printf(\"max의 값은 %d\", max);\n    return 0;\n}",
            "result": [
                "max의 값은 100"
            ]
        },
        {
            "id": 11,
            "date": "기출 예상",
            "problem": "Windows 10 운영체제에서 지원하는 CPU 소켓의 지원 개수를 Home 버전과 Pro 버전으로 구분하여 예시와 같이 쓰시오.",
            "state": "list",
            "listData": [
                "<예시>",
                "Home: 0, Pro: 0"
            ],
            "result": [
                "Home: 1, Pro: 2"
            ]
        },
        {
            "id": 12,
            "date": "기출 예상",
            "problem": "다음은 <사원> 테이블에서 'NAME'이 '최'로 시작하고, INCENTIVE가 500 이상인 데이터를 조회하는 <SQL문>이다. 괄호에 알맞은 수식을 채워 <SQL문>을 완성하시오. (단, 모든 예약어는 대문자로 쓴다.)",
            "state": "list",
            "listData": [
                "<SQL문>",
                "SELECT * FROM 사원 (     );"
            ],
            "result": [
                "WHERE NAME LIKE \"최%\" AND INCENTIVE >= 500",
                "WHERE INCENTIVE >= 500 AND NAME LIKE \"최%\"",
                "WHERE NAME LIKE \"최%\" AND 500 <= INCENTIVE",
                "WHERE 500 <= INCENTIVE AND NAME LIKE \"최%\"",
                "WHERE NAME LIKE \"최%\" AND NOT INCENTIVE < 500",
                "WHERE NOT INCENTIVE < 500 AND NAME LIKE \"최%\"",
                "WHERE NAME LIKE \"최%\" AND NOT 500 > INCENTIVE",
                "WHERE NOT 500 > INCENTIVE AND NAME LIKE \"최%\""
            ]
        },
        {
            "id": 13,
            "date": "기출 예상",
            "problem": "CPU와 입출력 장치 간의 속도 차이를 완화하기 위해 사용하는 것으로, 태표적으로 프린터에서 사용하는 이 기능은 무엇인지 쓰시오.",
            "state": "text",
            "result": [
                "스풀",
                "Spool",
                "spool",
                "SPOOL"
            ]
        },
        {
            "id": 14,
            "date": "기출 예상",
            "problem": "인터넷에 관한 다음 설명에서 괄호에 들어갈 알맞은 답을 쓰시오.",
            "state": "list",
            "listData": [
                "인터넷에 연결된 모든 컴퓨터 자원을 구분하기 위한 고유한 주소로 TCP/IP 주고에서 주로 (     ) 라고 불린다."
            ],
            "result": [
                "IP 주소",
                "IP주소",
                "IP ADDRESS",
                "IP Address",
                "ip 주소",
                "ip주소",
                "ip address",
                "Internet Protocol Address",
                "INTERNET PROTOCOL ADDRESS",
                "internet protocol address"
            ]
        },
        {
            "id": 15,
            "date": "기출 예상",
            "problem": "IP 주소는 네트워크 부분의 길이에 따라 A클래스에서 E클레스까지 총 5단계로 구성되는데, 이중 B클래스에서 기본적으로 사용하는 서브넷 마스크를 쓰시오.",
            "state": "text",
            "result": [
                "255.255.0.0"
            ]
        },
        {
            "id": 16,
            "date": "기출 예상",
            "problem": "다음은 OSI 7층과 TCP/IP의 계층을 서로 대응시킨 것이다. 다음 <보기>에 나온 OSI 7 계층에 해당하는 TCP/IP 계층을 쓰시오.",
            "state": "list",
            "listData": [
                "<보기>",
                "데이터 링크 계층"
            ],
            "result": [
                "네트워크 액세스 계층",
                "네트워크액세스 계층"
            ]
        },
        {
            "id": 17,
            "date": "기출 예상",
            "problem": "다음은 <프로그래밍 언어> 테이블을 생성하는 SQL문이다. <처리 조건>을 참조해 괄호에 들어갈 알맞은 예약어를 <예시>와 같이 입력해 SQL문을 완성하시오. (단, 정답 입력시 모든 문자를 소문자 또는 대문자로만 입력해야 한다.)",
            "state": "list",
            "listData": [
                "<처리조건>",
                "- id는 기본키이다.",
                "- startDate는 <연도> 테이블의 'date' 속성을 참조하는 외래키이다.",
                "- language는 중복 값을 가질 수 없다.",
                "",
                "<SQL문>",
                "CREATE (      ) 프로그래밍_언어 (",
                "id INT NOT NULL,",
                "name CHAR(32),",
                "creator CHAR(64) NOT NULL,",
                "language CHAR(64) (      ),",
                "startDate CHAR(128) NOT NULL,",
                "(      ) KEY(id),",
                "(      ) KEY(startDate), REFERENCES 연도(date)",
                ");",
                "",
                "<예시>",
                "예약어, 예약어, 예약어"
            ],
            "result": [
                "TABLE, UNIQUE, PRIMARY, FOREIGN",
                "table, unique, primary, foreign"
            ]
        },
        {
            "id": 18,
            "date": "기출 예상",
            "problem": "다음은 Windows 10에서 작업 표시줄이 ‹그림›과 같을 때, 'Discord'를 실행하기 위한 바로 가기 키이다. 괄호에 들어갈 알맞은 숫자를 쓰시오.",
            "state": "img",
            "url": "",
            "result": [
                "4"
            ]
        },
        {
            "id": 19,
            "date": "기출 예상",
            "problem": "다음 두 테이블과 <결과>를 참고하여 <SQL문>의 괄호에 들어갈 알맞은 예약어를 쓰시오.",
            "state": "list",
            "listData": [
                "<SQL문>",
                "SELECT Code_a, Name FROM Student, Records",
                "WHERE Code_a = Code_b (      ) Subject = 'Data';"
            ],
            "result": [
                "and",
                "AND"
            ]
        },
        {
            "id": 20,
            "date": "기출 예상",
            "problem": "다음 C언어로 구현된 프로그램을 분석하여 그 실행 결과를 쓰시오.",
            "state": "code",
            "language": "c",
            "code": "#include <stdio.h>\n\nint main() {\n    int num = 1;\n    for(int i = 1; ; i++) {\n        num *= i + 1;\n        if(i > 4) break;\n    }\n    printf(\"%d\", num);\n    return 0;\n}",
            "result": [
                "720"
            ]
        }
    ],
]
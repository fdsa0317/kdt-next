import Student from "./_component/Student";

export default function page() {

    // 다음은 학생의 출석부이다
    // 출석 여부(isPresent)에 따라 출석한 사람만 
    // 컴포넌트로 출력하고 이름을 파란색, 글자크기를 "20px"로 변경하기
    // 단, style은 Container에 선언한다.
    const attendanceData = [
        { id: 1, name: "인덱승현", isPresent: true,  },
        { id: 2, name: "김희수", isPresent: false, },
        { id: 3, name: "조수민", isPresent: true, },
        { id: 4, name: "박지호", isPresent: false, },
        { id: 5, name: "한혜진", isPresent: true, },
        { id: 6, name: "이상아", isPresent: false, },
        { id: 7, name: "김진휘", isPresent: true, },
        { id: 8, name: "정우영", isPresent: false, },
        { id: 9, name: "오슬기", isPresent: true, },
        { id: 10, name: "오준승", isPresent: true },
        { id: 11, name: "오지혁", isPresent: true },
        { id: 12, name: "이예나", isPresent: true },
        { id: 13, name: "채진성", isPresent: true },
        { id: 14, name: "이시우", isPresent: true },
    ];

    const attendanceList = attendanceData
        .filter(({isPresent}) => isPresent)
        .map((student, i) => (
            <Student key={i} student={student} />
        ))

    return (
        <>
            <ul>
                {attendanceList}
            </ul>
        </>
    );
}
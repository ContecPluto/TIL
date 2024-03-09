package hijava.practice;

/**
 * JVM 은 메모리에 공간을 잡는다. JVM은 HelloJava를 생성하며 그순간 main이 실행된다.
 * 첫번쨰 자바 실습
 * @author 김준호 
 * @update say 함수 추가(2024-03-10 by 김준호)
 */
public class HelloJava {

//     제일먼저 실행됨.
	public static void main(String[] args) {
//		 HelloJava에게 Say 라는 명령을 내림
		HelloJava.say("Hello World ! ! !");
//         JVM이 스스로 화면에 출력		
		System.out.println("Hello World ! ! !");
	}

	/**
	 * void 는 return type 이다.
	 * 
	 * @param mug 표현할 메세
	 */
	public static void say(String msg) {
		System.out.println(msg);
	}

	/**
	 * 메모리 => JVM => HelloJava 가 존재 () 안의 연산을 먼저 실행합니다. JVM은 메모리속에 "Hello World ! !
	 * !"를 저장합니다. 메모리 주소와 함수를 연결합니다.
	 */

	
	/**
	 * ctrl + d: delete line
	 * ctrl + shift + L 단축키 목록 보기
	 * ctrl + / 주석
	 * ctrl + shift + f 코드 정리하기
	 */
}

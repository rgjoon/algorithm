package com.test;

public class QuardTree {
	public static class Counter {
		int mCount;
		
		public Counter() {
			mCount = 0;
		}
		
		int next() {
			return mCount++;
		}
	}
	
	public String reverse(String s, Counter c) {
		char k = s.charAt(c.next());
		
		if( k == 'b' || k == 'w' ) {
			return String.format("%c", k);
		}

		String upperLeft = reverse(s, c);
		String upperRight = reverse(s, c);
		String lowerLeft = reverse(s, c);
		String lowerRight = reverse(s, c);
		
		return "x" + lowerLeft + lowerRight + upperLeft + upperRight;
	}
	
	public static void main(String[] args) {
		QuardTree t = new QuardTree();
		System.out.println(t.reverse("xxwwwbxwxwbbbwwxxxwwbbbwwwwbb", new QuardTree.Counter()));
	}
}

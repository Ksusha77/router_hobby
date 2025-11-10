class Token {
    public String type; // Token type: Identifier Keyword...
    public String value;// Token value
}
public class TokenStream {
    private boolean isEof = false;
    // next character in input stream
    private char nextChar = '';
    private BufferedReader input;
    // Pass a filename for the program text as a source for
    // the TokenStream
    public TokenStream (String fileName) {
    try {
    input = new BufferedReader
    (new FileReader(fileName));
    }
    catch (FileNotFoundException e) {
    System.out.println("File not found: " +
    fileName);
    System.exit(1);
    }
    }
    
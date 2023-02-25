package view.ver01.hiwindow;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class PrepareForScript {
    public static void main(String[] args) {
        File file = new File("src/view/ver01/hiwindow/hoursInsert_for_export.html");
        if (!file.exists()) {
            System.out.println("File does not exists.");
            System.exit(1);
        }

        StringBuilder content = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line = "";
            while ((line = reader.readLine()) != null) {
                if (line.equals("")) {
                    line = " ";
                }
                content.append("hiWindow.document.writeln(\"");
                content.append(line.replaceAll("\"", "\\\\\""));
                content.append("\");\n");
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        File fileResults = new File("src/view/ver01/hiwindow/converted.txt");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileResults))) {
            writer.write(content.toString());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

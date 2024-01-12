package parameterization;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class ParaDemo {

	@Parameters({ "us", "ow" })
	@Test(priority = 1)
	public void login(String us, String ow) {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\CDAC\\Desktop\\Selenium\\chromedriver-win32\\chromedriver.exe");

		WebDriver d = new ChromeDriver();
		d.manage().window().maximize();
		d.get("https://www.saucedemo.com/v1/");
		d.findElement(By.xpath("//input[@id='user-name']")).sendKeys(us);
		d.findElement(By.xpath("//input[@id='password']")).sendKeys(ow);
		d.findElement(By.xpath("//input[@id='login-button']")).click();
		
		System.out.println(d.getTitle());

	}
	@Parameters({ "usV", "owV" })
	@Test(priority = 2)
	public void loginValid(String usV, String owV) {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\CDAC\\Desktop\\Selenium\\chromedriver-win32\\chromedriver.exe");

		WebDriver d = new ChromeDriver();
		d.manage().window().maximize();
		d.get("https://www.saucedemo.com/v1/");
		d.findElement(By.xpath("//input[@id='user-name']")).sendKeys(usV);
		d.findElement(By.xpath("//input[@id='password']")).sendKeys(owV);
		d.findElement(By.xpath("//input[@id='login-button']")).click();
		System.out.println(d.getTitle());

	}
	
}

import {MarkdownRenderer} from "@/components/markdown-renderer";
import {TutorialLayout} from "@/components/tutorial-layout";
import {notFound} from "next/navigation";

// Sample tutorial content - you can easily add more tutorials here
const tutorialContent: Record<string, string> = {
  banking: `# 恒生銀行商業電子銀行登入及查閱教學

這個教學是專為中年用戶設計的，假設您對電腦使用經驗很少。我們將一步一步教您如何在 Windows 電腦上使用 Chrome 瀏覽器來操作恒生銀行的商業電子銀行（e-Banking）。請慢慢跟隨步驟，如果遇到問題，可以咨詢家人或致電恒生銀行客戶服務熱線（電話：2822 0228）。

**重要提醒：**  
- 電子銀行涉及財務，請勿分享您的登入資料給任何人。  
- 本教學基於恒生銀行官方資訊，如果有更新，請參考官方網站：[恒生銀行商業電子銀行頁面](https://www.hang。  

## 步驟 1: 開啟 Chrome 瀏覽器

## 步驟 2: 訪問恒生銀行商業電子銀行網站

1. <a href="https://www.hangseng.com/zh-hk/business/banking-digitally/online-services-business-ebanking-services/" target="_blank" >點解這裡</a>

    **或**

2. 在Chrome 主頁按常用連結 （稍後設定) 

3. 進入後找出登入連結 （參考下圖）

![e-banking langing page](https://res.cloudinary.com/ltdev/image/upload/v1762495575/wai-wing-training/Screenshot_2025-11-07_at_13.42.56_ptfwur.png)

---

![e-banking langing page link](https://res.cloudinary.com/ltdev/image/upload/v1762495575/wai-wing-training/Screenshot_2025-11-07_at_13.44.21_nmumct.png)

## 步驟 3: 登入帳戶

1. 在登入頁面，找到「用戶名稱」或的輸入框。輸入您的用戶名稱（這是銀行提供給您的）。  

2. 接下來輸入您的密碼。請小心輸入，不要讓別人看到。  

3. 點擊「流動裝置」按鈕。

![login page](https://res.cloudinary.com/ltdev/image/upload/v1762495830/wai-wing-training/Screenshot_2025-11-07_at_13.45.14_mhlyum.png)

---

4.  發送手機認證

![verification page](https://res.cloudinary.com/ltdev/image/upload/v1762495839/wai-wing-training/Screenshot_2025-11-07_at_13.48.00_y3uft0.png)

5. 打開手機內恒生商業應用程式認證

![loding](https://res.cloudinary.com/ltdev/image/upload/v1762495845/wai-wing-training/Screenshot_2025-11-07_at_13.52.11_z9g2ky.png)

## 步驟 4: 基本操作
登入後，您會看到主畫面。以下是簡單功能的使用方法：

### 檢查帳戶餘額及信用卡資料

![main page](https://res.cloudinary.com/ltdev/image/upload/v1762495854/wai-wing-training/Screenshot_2025-11-07_at_13.53.31_nddl3h.png)

### 用完後登出

![logout](https://res.cloudinary.com/ltdev/image/upload/v1762495857/wai-wing-training/Screenshot_2025-11-07_at_13.58.56_qidhxa.png)

**安全提示：**  
- 不要在公共電腦使用。  
- 定期更改密碼。  
- 如果懷疑帳戶異常，立即聯絡銀行。  
- 啟用雙重驗證（Two-Factor Authentication）。  

如果您需要更多幫助，請提供具體問題，或讓家人協助訪問官方資源。記住，練習幾次後就會熟悉了！
  `,

  download: `# 在 Chrome 瀏覽器上如何下載檔案以及找到下載的檔案：初學者指南

歡迎學習在 Chrome 瀏覽器上如何下載檔案！這份指南專為初學者設計，特別是對筆記型電腦不太熟悉的中年朋友。下載檔案可能一開始看起來有點難，但只要跟著步驟練習，你很快就能上手！讓我們一步步開始吧！

## 第一步：下載檔案

1. **開啟 Chrome 瀏覽器**
   - 在筆記型電腦的桌面上，找到 Chrome 圖示（彩色的圓形圖案），雙擊開啟。
   - 如果找不到 Chrome，點擊螢幕左下角的「開始」按鈕，輸入「Chrome」並點擊開啟。

2. **前往網站並開始下載**
   - 在 Chrome 上方的網址列輸入網站地址，然後按「Enter」鍵進入網站。
   - 找到你要下載的檔案，例如照片、PDF 文件或音樂檔案，通常會有「下載」按鈕或連結。
   - 點擊「下載」按鈕，或右鍵點擊檔案，選擇「另存為」或「儲存連結為」。
   - 螢幕會顯示一個視窗，讓你選擇儲存位置（通常預設是「下載」資料夾），點擊「儲存」開始下載。

3. **檢查下載進度**
   - 下載時，Chrome 底部會出現一個小視窗，顯示檔案名稱和進度。
   - 如果想暫停，點擊檔案旁的「暫停」按鈕；想取消，點擊「取消」按鈕。
   - 下載完成後，檔案名稱旁會顯示一個小箭頭或「開啟」選項。

> **小提示**：下載檔案時，確保網站是安全的（網址開頭有「https://」），避免下載可疑檔案！

## 第二步：找到下載的檔案

1. **開啟 Chrome 的下載頁面**
   - 在 Chrome 右上角，點擊三個小點（選單按鈕）。
   - 點擊「下載內容」或「Downloads」，會顯示你最近下載的檔案清單。
   - 點擊清單中的檔案名稱旁邊的「在資料夾中顯示」，即可看到檔案所在的資料夾。

2. **檢查「下載」資料夾**
   - 大多數下載的檔案會儲存在筆記型電腦的「下載」資料夾（Downloads）。
   - 開啟「檔案總管」：
     - 點擊桌面上的「此電腦」或「我的電腦」圖示。
     - 在左邊欄找到「下載」（Downloads），點擊進去。
   - 你會看到下載的檔案，例如圖片、PDF 或文件。

3. **開啟或移動檔案**
   - 雙擊檔案名稱來開啟（例如，點擊照片會用圖片檢視器開啟，PDF 會用閱讀器開啟）。
   - 如果想移動檔案到其他地方（例如桌面）：
     - 右鍵點擊檔案，選擇「剪下」。
     - 前往桌面或其他資料夾，右鍵點擊空白處，選擇「貼上」。

> **小提示**：把常用的檔案整理到桌面或一個專屬資料夾，找起來更方便！

## 第三步：常見問題解答

- **下載的檔案不見了？** 在 Chrome 的「下載內容」清單中檢查，或在「下載」資料夾裡找。如果還是找不到，試著重新下載。
- **檔案無法開啟？** 確認檔案類型（例如 PDF 需要 PDF 閱讀器），或請家人檢查是否需要安裝軟體。
- **下載速度很慢？** 檢查網路連線是否穩定，或暫停其他正在使用的網路程式。

## 第四步：保持耐心與樂趣

- 下載檔案就像學新技能，一開始可能不熟悉，多試幾次就會越來越順手！
- 試著下載你感興趣的東西，例如食譜 PDF、旅遊照片或線上課程講義，讓學習更有趣。
- 如果遇到困難，休息一下或請教家人，學習應該是開心的！

## 額外建議

- **檢查檔案安全**：只從可信任的網站下載檔案，避免點擊來路不明的連結。
- **整理檔案**：定期清理「下載」資料夾，把不需要的檔案刪除，保持電腦整潔。
- **尋求幫助**：如果不確定如何操作，可以請熟悉電腦的家人或朋友現場指導。

> **小挑戰**：試著從網路上找一張免費風景照片（例如搜尋「免費風景圖片」），下載到「下載」資料夾，然後找到並開啟它，看看自己的成果！
`,

  typing: `# 學習如何在筆記型電腦上打字：初學者指南

歡迎學習如何在筆記型電腦上打字！這份指南專為初學者設計，特別是對筆記型電腦不太熟悉的朋友。打字可能一開始看起來有點難，但只要練習，你很快就能上手！讓我們一步步開始吧！

## 第一步：認識鍵盤

1. **鍵盤在哪裡？**
   - 鍵盤是筆記型電腦下半部、螢幕下方那塊有很多按鍵的地方。
   - 按鍵上有英文字母、數字、符號和中文輸入的標記（像注音或倉頡符號）。

2. **鍵盤的樣子**
   - 鍵盤中間是字母鍵（A-Z），上面是數字鍵（0-9），兩邊有特殊符號（像！、@、#）。
   - 鍵盤右邊有「Enter」鍵，按下它就像換行或確認。
   - 鍵盤下方中間有個長條鍵，叫做「空白鍵」，用來在文字間加空格。

3. **按鍵怎麼按？**
   - 用指尖輕輕按下按鍵，聽到「喀」一聲，表示按成功了。
   - 不要太用力，輕輕按就行！

## 第二步：準備開始學打字
   - 進入 「TypingClub」 <a href="https://www.edclub.com/sportal/program-48.game" target="_blank"> 點擊這裡</a>
  
  -  **每天練習一點**

   - 每天花10分鐘去完成 「TypingClub」 的練習，目標是完成關卡 1 - 81
   - 每天練習可以幫你熟悉鍵盤。

  - **常見問題解答**
    - **鍵盤按鍵沒反應？** 檢查筆記型電腦是否開機，或按鍵是否卡住。
    - **找不到某個字？** 有些字有多種注音組合，試試不同聲調或用箭頭鍵找。
    - **輸入法不見了？** 再點右下角語言圖示，選回「Microsoft 注音」。

  - **使用線上資源**
    - 在YouTube搜尋「速成輸入法教學」，有免費影片可以看。
  
  > **小挑戰**： 完成 「TypingClub」上的 關卡 1 - 10

## 第三步：保持耐心與樂趣

- 打字就像學寫字，一開始可能慢，但多練習就會變快！
- 試著打你喜歡的東西，例如寫一封簡單的電子郵件給朋友，或記錄每天的心情。
- 如果覺得累，休息一下再繼續，學習應該是開心的！



## 額外建議

- **鍵盤位置**：把筆記型電腦放在桌上，雙手輕放在鍵盤上，用食指和中指按鍵最舒服。
- **姿勢**：坐直，螢幕與眼睛保持30-40公分的距離，保護眼睛和背部。
- **尋求幫助**：如果有家人或朋友熟悉電腦，可以請他們現場教你幾次。`,

  advanced: `# Advanced Topics

Ready to take your skills to the next level?

## Deep Dive

Now that you understand the basics, let's explore more complex concepts.

### Advanced Techniques

- **Optimization**: Making your code more efficient
- **Patterns**: Common design patterns
- **Architecture**: Structuring large projects

## Complex Example

\`\`\`typescript
interface Config {
  name: string;
  options: Record<string, any>;
}

class AdvancedSystem {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  execute(): void {
    console.log('Executing with config:', this.config);
  }
}
\`\`\`

## Real-World Application

These concepts are used in production systems every day.`,

  "best-practices": `# Best Practices

Learn the industry standards and recommended approaches.

## Code Quality

Writing clean, maintainable code is essential.

### Guidelines

1. **Readability**: Write code that others can understand
2. **Consistency**: Follow established patterns
3. **Documentation**: Comment your code appropriately
4. **Testing**: Always test your implementations

## Example of Good Code

\`\`\`javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}
\`\`\`

## Common Pitfalls

Avoid these common mistakes:

- Not handling edge cases
- Ignoring error handling
- Over-complicating solutions
- Skipping code reviews

> **Pro Tip**: Always review your code before committing!`,
};

export default async function TutorialPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const content = tutorialContent[id];

  if (!content) {
    notFound();
  }

  return (
    <TutorialLayout>
      <MarkdownRenderer content={content} />
    </TutorialLayout>
  );
}

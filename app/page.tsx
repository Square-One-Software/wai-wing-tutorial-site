import {MarkdownRenderer} from "@/components/markdown-renderer";
import {TutorialLayout} from "@/components/tutorial-layout";

const welcomeContent = `# 威榮培訓網站 - 輕鬆學習電腦基礎技能

![歡迎圖片](https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071)  

## 歡迎來到威榮培訓網站！

您好！威榮培訓網站是專為威榮人力資源管理公司的業主及員工設計的線上學習平台。我們的目標是幫助大家輕鬆掌握基本的電腦技能，讓您在日常工作中更有效率、更自信。

無論您是初學者、中年用戶，或是對電腦不太熟悉，我們的教程都以簡單、步驟式的教學方式呈現。從開啟瀏覽器到使用電子銀行，我們涵蓋了實用的基礎知識，讓您逐步進步。

## 最新教程
- **電腦打字**：學習用鍵盤打字。  
  [開始學習](tutorial/typing)  
- **下載檔案**： 如何使用Chrome瀏覽器下載檔案。  
  [開始學習](tutorial/download)  
- **電子銀行登入教學**：專為商業用戶的恒生銀行e-Banking指南。  
  [開始學習](tutorial/banking)  

威榮培訓網站 - 讓電腦學習變得簡單有趣！  
© 2025 威榮人力資源管理公司。所有權利保留。
`;

export default function HomePage() {
  return (
    <TutorialLayout>
      <MarkdownRenderer content={welcomeContent} />
    </TutorialLayout>
  );
}

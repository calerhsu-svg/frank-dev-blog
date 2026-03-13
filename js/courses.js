// ── COURSE CONTENT DATA ──────────────────────────────────────────
const COURSES={
  'unity-guide':{
    id:'unity-guide',type:'free',icon:'🎮',
    pages:12,
    toc:{
      tw:['第一章：Unity 安裝與環境設定','第二章：介面導覽與基本操作','第三章：C# 程式設計基礎','第四章：GameObject 與 Component','第五章：物理系統入門','第六章：UI 系統 (Canvas, Button, Text)','第七章：動畫系統 (Animator)','第八章：音效與粒子特效','第九章：場景管理與切換','第十章：Build 打包與發布','附錄 A：常用快捷鍵一覽','附錄 B：推薦學習資源'],
      jp:['第1章：Unityインストールと環境設定','第2章：インターフェースと基本操作','第3章：C#プログラミング基礎','第4章：GameObjectとComponent','第5章：物理システム入門','第6章：UIシステム (Canvas, Button, Text)','第7章：アニメーションシステム (Animator)','第8章：サウンドとパーティクル','第9章：シーン管理と切り替え','第10章：ビルドとリリース','付録A：よく使うショートカット','付録B：おすすめ学習リソース'],
      cn:['第一章：Unity 安装与环境设置','第二章：界面导览与基本操作','第三章：C# 程序设计基础','第四章：GameObject 与 Component','第五章：物理系统入门','第六章：UI 系统 (Canvas, Button, Text)','第七章：动画系统 (Animator)','第八章：音效与粒子特效','第九章：场景管理与切换','第十章：Build 打包与发布','附录 A：常用快捷键一览','附录 B：推荐学习资源'],
      ph:['Chapter 1: Unity Installation & Setup','Chapter 2: Interface & Basic Operations','Chapter 3: C# Programming Basics','Chapter 4: GameObject & Component','Chapter 5: Physics System Intro','Chapter 6: UI System (Canvas, Button, Text)','Chapter 7: Animation System (Animator)','Chapter 8: Sound & Particle Effects','Chapter 9: Scene Management','Chapter 10: Build & Publish','Appendix A: Common Shortcuts','Appendix B: Recommended Resources']
    },
    preview:{
      tw:[
        {t:'h3',s:'第一章：Unity 安裝與環境設定'},
        {t:'p',s:'Unity 是目前全球最主流的遊戲引擎之一，支援 2D/3D 遊戲開發、AR/VR、模擬應用等多種場景。本章將手把手帶你從零開始安裝 Unity Hub 與 Unity Editor。'},
        {t:'h4',s:'1.1 下載 Unity Hub'},
        {t:'p',s:'前往 Unity 官網（unity.com）下載 Unity Hub。Hub 是管理 Unity 版本與專案的工具，建議使用最新的 LTS（長期支援版本）。'},
        {t:'code',s:'// 安裝完成後，建立你的第一個專案\n// 選擇 2D 或 3D 模板\n// 建議初學者先選 2D — 比較容易上手\n\n專案設定建議：\n├── 專案名稱：MyFirstGame\n├── 模板：2D (Built-in Render Pipeline)\n├── 位置：桌面/UnityProjects/\n└── Unity 版本：2022.3 LTS'},
        {t:'h4',s:'1.2 介面初探'},
        {t:'p',s:'打開專案後你會看到五個主要面板：Scene（場景編輯）、Game（遊戲預覽）、Hierarchy（物件階層）、Inspector（屬性面板）、Project（資源管理）。花 10 分鐘熟悉各面板的位置，這對後面的操作至關重要。'},
        {t:'lock',s:'🔒 以下內容需要完整下載才能查看…'}
      ],
      jp:[
        {t:'h3',s:'第1章：Unityインストールと環境設定'},
        {t:'p',s:'Unityは現在世界で最も主流のゲームエンジンの一つで、2D/3Dゲーム開発、AR/VR、シミュレーションなど多様なシーンをサポートしています。本章ではUnity HubとUnity Editorのインストールをゼロから丁寧にガイドします。'},
        {t:'h4',s:'1.1 Unity Hubのダウンロード'},
        {t:'p',s:'Unity公式サイト（unity.com）からUnity Hubをダウンロードしてください。Hubはバージョンとプロジェクトを管理するツールです。最新のLTS版を推奨します。'},
        {t:'code',s:'// インストール完了後、最初のプロジェクトを作成\n// 2Dまたは3Dテンプレートを選択\n// 初心者には2Dがおすすめ\n\nプロジェクト設定：\n├── プロジェクト名：MyFirstGame\n├── テンプレート：2D (Built-in Render Pipeline)\n├── 保存先：デスクトップ/UnityProjects/\n└── Unityバージョン：2022.3 LTS'},
        {t:'h4',s:'1.2 インターフェース概要'},
        {t:'p',s:'プロジェクトを開くと5つの主要パネルが表示されます：Scene（シーン編集）、Game（プレビュー）、Hierarchy（階層）、Inspector（プロパティ）、Project（リソース管理）。'},
        {t:'lock',s:'🔒 以降の内容はダウンロード後にご覧いただけます…'}
      ],
      cn:[
        {t:'h3',s:'第一章：Unity 安装与环境设置'},
        {t:'p',s:'Unity 是目前全球最主流的游戏引擎之一，支持 2D/3D 游戏开发、AR/VR、模拟应用等多种场景。本章将手把手带你从零开始安装 Unity Hub 与 Unity Editor。'},
        {t:'h4',s:'1.1 下载 Unity Hub'},
        {t:'p',s:'前往 Unity 官网（unity.com）下载 Unity Hub。Hub 是管理 Unity 版本与项目的工具，建议使用最新的 LTS（长期支持版本）。'},
        {t:'code',s:'// 安装完成后，创建你的第一个项目\n// 选择 2D 或 3D 模板\n// 建议初学者先选 2D\n\n项目设置建议：\n├── 项目名称：MyFirstGame\n├── 模板：2D (Built-in Render Pipeline)\n├── 位置：桌面/UnityProjects/\n└── Unity 版本：2022.3 LTS'},
        {t:'h4',s:'1.2 界面初探'},
        {t:'p',s:'打开项目后你会看到五个主要面板：Scene（场景编辑）、Game（游戏预览）、Hierarchy（对象层级）、Inspector（属性面板）、Project（资源管理）。'},
        {t:'lock',s:'🔒 以下内容需要完整下载才能查看…'}
      ],
      ph:[
        {t:'h3',s:'Chapter 1: Unity Installation & Setup'},
        {t:'p',s:'Unity is one of the most popular game engines in the world, supporting 2D/3D game development, AR/VR, simulations, and more. This chapter will guide you step by step to install Unity Hub and Unity Editor from scratch.'},
        {t:'h4',s:'1.1 Download Unity Hub'},
        {t:'p',s:'Go to the Unity website (unity.com) to download Unity Hub. Hub is the tool for managing Unity versions and projects. We recommend using the latest LTS (Long Term Support) version.'},
        {t:'code',s:'// After installation, create your first project\n// Choose 2D or 3D template\n// Beginners should start with 2D\n\nProject settings:\n├── Name: MyFirstGame\n├── Template: 2D (Built-in Render Pipeline)\n├── Location: Desktop/UnityProjects/\n└── Unity Version: 2022.3 LTS'},
        {t:'h4',s:'1.2 Interface Overview'},
        {t:'p',s:'After opening the project, you\'ll see five main panels: Scene (editing), Game (preview), Hierarchy (objects), Inspector (properties), and Project (asset management).'},
        {t:'lock',s:'🔒 Download the full guide to see the rest…'}
      ]
    }
  },
  'cocos-cheatsheet':{
    id:'cocos-cheatsheet',type:'free',icon:'🥥',
    pages:4,
    toc:{
      tw:['節點操作 API','生命週期回調','事件系統','動畫 & Tween','物理系統','UI 元件','音效管理','常用工具函數'],
      jp:['ノード操作API','ライフサイクルコールバック','イベントシステム','アニメーション & Tween','物理システム','UIコンポーネント','サウンド管理','よく使うユーティリティ'],
      cn:['节点操作 API','生命周期回调','事件系统','动画 & Tween','物理系统','UI 组件','音效管理','常用工具函数'],
      ph:['Node API','Lifecycle Callbacks','Event System','Animation & Tween','Physics System','UI Components','Audio Management','Common Utilities']
    },
    preview:{
      tw:[
        {t:'h3',s:'Cocos Creator 快速上手 Cheatsheet'},
        {t:'p',s:'這份速查表涵蓋 Cocos Creator 3.x 最常用的 API 與模式，開發時隨時查閱，讓你不再翻文件翻到頭痛。'},
        {t:'h4',s:'📌 節點操作 API'},
        {t:'code',s:'// 取得節點\nthis.node                          // 當前節點\nthis.node.parent                   // 父節點\nthis.node.children                 // 子節點陣列\nfind(\"Canvas/Player\")              // 全域路徑搜尋\nthis.node.getChildByName(\"Weapon\") // 子節點名稱搜尋\n\n// 位置 / 旋轉 / 縮放\nthis.node.setPosition(100, 200, 0)\nthis.node.setRotationFromEuler(0, 0, 45)\nthis.node.setScale(2, 2, 1)\n\n// 啟用 / 停用\nthis.node.active = true  // 顯示\nthis.node.active = false // 隱藏（含子節點）'},
        {t:'h4',s:'📌 生命週期回調'},
        {t:'code',s:'onLoad()    // 節點初始化，只呼叫一次\nstart()     // 第一次 update 前呼叫\nonEnable()  // 節點啟用時\nonDisable() // 節點停用時\nupdate(dt)  // 每幀呼叫，dt = delta time\nlateUpdate(dt) // update 之後呼叫\nonDestroy() // 節點銷毀時'},
        {t:'lock',s:'🔒 以下內容需要完整下載才能查看…'}
      ],
      jp:[
        {t:'h3',s:'Cocos Creator クイックスタート Cheatsheet'},
        {t:'p',s:'このチートシートはCocos Creator 3.xで最もよく使うAPIとパターンをカバーしています。開発中にいつでも参照できます。'},
        {t:'h4',s:'📌 ノード操作 API'},
        {t:'code',s:'// ノード取得\nthis.node                          // 現在のノード\nthis.node.parent                   // 親ノード\nthis.node.children                 // 子ノード配列\nfind("Canvas/Player")              // グローバルパス検索\nthis.node.getChildByName("Weapon") // 子ノード名検索\n\n// 位置 / 回転 / スケール\nthis.node.setPosition(100, 200, 0)\nthis.node.setRotationFromEuler(0, 0, 45)\nthis.node.setScale(2, 2, 1)\n\n// 有効 / 無効\nthis.node.active = true  // 表示\nthis.node.active = false // 非表示（子ノード含む）'},
        {t:'h4',s:'📌 ライフサイクルコールバック'},
        {t:'code',s:'onLoad()    // 初期化、一度だけ呼ばれる\nstart()     // 最初のupdate前に呼ばれる\nonEnable()  // ノード有効時\nonDisable() // ノード無効時\nupdate(dt)  // 毎フレーム呼ばれる\nlateUpdate(dt) // update後に呼ばれる\nonDestroy() // ノード破棄時'},
        {t:'lock',s:'🔒 以降の内容はダウンロード後にご覧いただけます…'}
      ],
      cn:[
        {t:'h3',s:'Cocos Creator 快速上手 Cheatsheet'},
        {t:'p',s:'这份速查表涵盖 Cocos Creator 3.x 最常用的 API 与模式，开发时随时查阅。'},
        {t:'h4',s:'📌 节点操作 API'},
        {t:'code',s:'// 获取节点\nthis.node                          // 当前节点\nthis.node.parent                   // 父节点\nthis.node.children                 // 子节点数组\nfind("Canvas/Player")              // 全局路径搜索\nthis.node.getChildByName("Weapon") // 子节点名称搜索\n\n// 位置 / 旋转 / 缩放\nthis.node.setPosition(100, 200, 0)\nthis.node.setRotationFromEuler(0, 0, 45)\nthis.node.setScale(2, 2, 1)\n\n// 启用 / 停用\nthis.node.active = true  // 显示\nthis.node.active = false // 隐藏（含子节点）'},
        {t:'h4',s:'📌 生命周期回调'},
        {t:'code',s:'onLoad()    // 节点初始化，只调用一次\nstart()     // 第一次 update 前调用\nonEnable()  // 节点启用时\nonDisable() // 节点停用时\nupdate(dt)  // 每帧调用\nlateUpdate(dt) // update 之后调用\nonDestroy() // 节点销毁时'},
        {t:'lock',s:'🔒 以下内容需要完整下载才能查看…'}
      ],
      ph:[
        {t:'h3',s:'Cocos Creator Quick Start Cheatsheet'},
        {t:'p',s:'This cheatsheet covers the most commonly used APIs and patterns in Cocos Creator 3.x. Keep it handy during development.'},
        {t:'h4',s:'📌 Node API'},
        {t:'code',s:'// Get nodes\nthis.node                          // Current node\nthis.node.parent                   // Parent node\nthis.node.children                 // Child nodes array\nfind("Canvas/Player")              // Global path search\nthis.node.getChildByName("Weapon") // Search by name\n\n// Position / Rotation / Scale\nthis.node.setPosition(100, 200, 0)\nthis.node.setRotationFromEuler(0, 0, 45)\nthis.node.setScale(2, 2, 1)\n\n// Enable / Disable\nthis.node.active = true  // Show\nthis.node.active = false // Hide (including children)'},
        {t:'h4',s:'📌 Lifecycle Callbacks'},
        {t:'code',s:'onLoad()    // Node init, called once\nstart()     // Called before first update\nonEnable()  // When node is enabled\nonDisable() // When node is disabled\nupdate(dt)  // Called every frame\nlateUpdate(dt) // Called after update\nonDestroy() // When node is destroyed'},
        {t:'lock',s:'🔒 Download the full cheatsheet to see more…'}
      ]
    }
  },
  'perf-course':{
    id:'perf-course',type:'paid',icon:'📱',price:'NT$990',
    lessons:{
      tw:['Lesson 1：為什麼你的遊戲會卡？（效能瓶頸分析）','Lesson 2：Object Pooling 深度實作','Lesson 3：Draw Call 優化與 Sprite Atlas 管理','Lesson 4：記憶體管理與資源釋放策略','Lesson 5：Profiler 工具完全攻略'],
      jp:['Lesson 1：なぜゲームがカクつくのか（ボトルネック分析）','Lesson 2：Object Pooling 深掘り実装','Lesson 3：Draw Call最適化とSprite Atlas管理','Lesson 4：メモリ管理とリソース解放戦略','Lesson 5：Profilerツール完全攻略'],
      cn:['Lesson 1：为什么你的游戏会卡？（性能瓶颈分析）','Lesson 2：Object Pooling 深度实作','Lesson 3：Draw Call 优化与 Sprite Atlas 管理','Lesson 4：内存管理与资源释放策略','Lesson 5：Profiler 工具完全攻略'],
      ph:['Lesson 1: Why Your Game Lags (Bottleneck Analysis)','Lesson 2: Object Pooling Deep Dive','Lesson 3: Draw Call Optimization & Sprite Atlas','Lesson 4: Memory Management & Resource Release','Lesson 5: Profiler Tools Complete Guide']
    },
    preview:{
      tw:[
        {t:'h3',s:'Lesson 1：為什麼你的遊戲會卡？'},
        {t:'p',s:'在開始優化之前，你必須先理解「效能」這件事。很多初學者一遇到卡頓就急著去改程式碼，但其實效能瓶頸有三大來源：CPU、GPU、和記憶體。找錯地方優化，不但浪費時間，還可能讓程式更複雜。'},
        {t:'h4',s:'效能三角：CPU / GPU / Memory'},
        {t:'p',s:'CPU 瓶頸通常來自邏輯計算過重（AI、物理、大量迴圈）；GPU 瓶頸來自渲染過多（Draw Call、Overdraw、高解析度貼圖）；記憶體瓶頸則是資源載入太多或記憶體洩漏。'},
        {t:'code',s:'// 快速判斷瓶頸類型的方法：\n//\n// 1. 打開 Profiler，觀察 CPU vs GPU 時間\n//    CPU Time > 16ms → CPU 瓶頸\n//    GPU Time > 16ms → GPU 瓶頸\n//\n// 2. 檢查記憶體使用量\n//    Unity: Window > Analysis > Profiler > Memory\n//    Cocos: cc.profiler.showStats()\n//\n// 3. 常見紅線指標：\n//    Draw Calls > 100  → 考慮合批\n//    Triangles > 100K  → 考慮 LOD\n//    Texture Memory > 200MB → 考慮壓縮'},
        {t:'h4',s:'課程範例專案'},
        {t:'p',s:'本課程附帶一個完整的 Unity 範例專案，包含一個刻意寫得很慢的 2D 射擊遊戲。我們將在每個 Lesson 中逐步優化它，最終達到 60 FPS 穩定運行。'},
        {t:'lock',s:'🔒 購買後觀看完整課程內容 + 下載範例專案…'}
      ],
      jp:[
        {t:'h3',s:'Lesson 1：なぜゲームがカクつくのか'},
        {t:'p',s:'最適化を始める前に、「パフォーマンス」を理解する必要があります。多くの初心者はカクつきに遭遇するとすぐにコードを変更しますが、実はボトルネックには3つの源があります：CPU、GPU、メモリです。'},
        {t:'h4',s:'パフォーマンス三角：CPU / GPU / Memory'},
        {t:'p',s:'CPUボトルネックは通常、重い計算（AI、物理、大量のループ）から来ます。GPUボトルネックはレンダリング過多（Draw Call、Overdraw）から、メモリボトルネックはリソースの過剰読み込みやメモリリークから来ます。'},
        {t:'code',s:'// ボトルネック判定方法：\n//\n// 1. Profilerを開き、CPU vs GPU時間を確認\n//    CPU Time > 16ms → CPUボトルネック\n//    GPU Time > 16ms → GPUボトルネック\n//\n// 2. メモリ使用量を確認\n//    Unity: Window > Analysis > Profiler > Memory\n//    Cocos: cc.profiler.showStats()\n//\n// 3. 注意すべき指標：\n//    Draw Calls > 100  → バッチング検討\n//    Triangles > 100K  → LOD検討\n//    Texture Memory > 200MB → 圧縮検討'},
        {t:'h4',s:'サンプルプロジェクト'},
        {t:'p',s:'本コースには意図的に遅く作った2Dシューティングゲームが付属しています。各レッスンで段階的に最適化し、最終的に安定60FPSを達成します。'},
        {t:'lock',s:'🔒 購入後に完全なコース内容 + サンプルプロジェクトをダウンロード…'}
      ],
      cn:[
        {t:'h3',s:'Lesson 1：为什么你的游戏会卡？'},
        {t:'p',s:'在开始优化之前，你必须先理解「性能」这件事。很多初学者一遇到卡顿就急着去改代码，但其实性能瓶颈有三大来源：CPU、GPU、和内存。找错地方优化，不但浪费时间，还可能让程序更复杂。'},
        {t:'h4',s:'性能三角：CPU / GPU / Memory'},
        {t:'p',s:'CPU 瓶颈通常来自逻辑计算过重（AI、物理、大量循环）；GPU 瓶颈来自渲染过多（Draw Call、Overdraw、高分辨率贴图）；内存瓶颈则是资源加载太多或内存泄漏。'},
        {t:'code',s:'// 快速判断瓶颈类型的方法：\n//\n// 1. 打开 Profiler，观察 CPU vs GPU 时间\n//    CPU Time > 16ms → CPU 瓶颈\n//    GPU Time > 16ms → GPU 瓶颈\n//\n// 2. 检查内存使用量\n//    Unity: Window > Analysis > Profiler > Memory\n//    Cocos: cc.profiler.showStats()\n//\n// 3. 常见红线指标：\n//    Draw Calls > 100  → 考虑合批\n//    Triangles > 100K  → 考虑 LOD\n//    Texture Memory > 200MB → 考虑压缩'},
        {t:'h4',s:'课程示例项目'},
        {t:'p',s:'本课程附带一个完整的 Unity 示例项目，包含一个刻意写得很慢的 2D 射击游戏。我们将在每个 Lesson 中逐步优化它，最终达到 60 FPS 稳定运行。'},
        {t:'lock',s:'🔒 购买后观看完整课程内容 + 下载示例项目…'}
      ],
      ph:[
        {t:'h3',s:'Lesson 1: Why Your Game Lags'},
        {t:'p',s:'Before optimizing, you need to understand "performance." Many beginners rush to change code when they encounter lag, but bottlenecks actually come from three sources: CPU, GPU, and Memory.'},
        {t:'h4',s:'Performance Triangle: CPU / GPU / Memory'},
        {t:'p',s:'CPU bottlenecks come from heavy logic (AI, physics, loops). GPU bottlenecks from too much rendering (Draw Calls, Overdraw). Memory bottlenecks from excessive resource loading or memory leaks.'},
        {t:'code',s:'// Quick bottleneck identification:\n//\n// 1. Open Profiler, check CPU vs GPU time\n//    CPU Time > 16ms → CPU bottleneck\n//    GPU Time > 16ms → GPU bottleneck\n//\n// 2. Check memory usage\n//    Unity: Window > Analysis > Profiler > Memory\n//    Cocos: cc.profiler.showStats()\n//\n// 3. Warning indicators:\n//    Draw Calls > 100  → Consider batching\n//    Triangles > 100K  → Consider LOD\n//    Texture Memory > 200MB → Consider compression'},
        {t:'h4',s:'Sample Project'},
        {t:'p',s:'This course includes a complete Unity sample project with an intentionally slow 2D shooter. We\'ll optimize it step by step across each lesson, achieving a stable 60 FPS.'},
        {t:'lock',s:'🔒 Purchase to access full course content + download sample project…'}
      ]
    }
  },
  'arch-course':{
    id:'arch-course',type:'paid',icon:'⚙️',price:'NT$1,490',
    lessons:{
      tw:['Lesson 1：為什麼遊戲需要架構？','Lesson 2：事件系統（Event Bus）實作','Lesson 3：有限狀態機（FSM）設計','Lesson 4：MVC / MVVM 在遊戲中的應用','Lesson 5：管理器模式（Manager Pattern）','Lesson 6：資源管理與物件池整合','Lesson 7：實戰：用架構做一個完整小遊戲'],
      jp:['Lesson 1：なぜゲームにアーキテクチャが必要か','Lesson 2：イベントシステム（Event Bus）実装','Lesson 3：有限ステートマシン（FSM）設計','Lesson 4：MVC / MVVMのゲーム活用','Lesson 5：マネージャーパターン','Lesson 6：リソース管理とオブジェクトプール統合','Lesson 7：実戦：アーキテクチャで完全なゲームを作る'],
      cn:['Lesson 1：为什么游戏需要架构？','Lesson 2：事件系统（Event Bus）实作','Lesson 3：有限状态机（FSM）设计','Lesson 4：MVC / MVVM 在游戏中的应用','Lesson 5：管理器模式（Manager Pattern）','Lesson 6：资源管理与对象池整合','Lesson 7：实战：用架构做一个完整小游戏'],
      ph:['Lesson 1: Why Games Need Architecture','Lesson 2: Event System (Event Bus)','Lesson 3: Finite State Machine (FSM)','Lesson 4: MVC / MVVM in Games','Lesson 5: Manager Pattern','Lesson 6: Resource Management & Object Pool','Lesson 7: Build a Complete Game with Architecture']
    },
    preview:{
      tw:[
        {t:'h3',s:'Lesson 2：事件系統（Event Bus）實作'},
        {t:'p',s:'當你的遊戲規模超過一定程度，到處寫 GetComponent 和直接引用會讓程式碼變成一團義大利麵。事件系統是解耦的第一步——讓模組之間透過「事件」溝通，而不是直接互相呼叫。'},
        {t:'h4',s:'核心概念'},
        {t:'p',s:'Event Bus 就像一個公告板：任何人都可以「發布」消息，任何人都可以「訂閱」感興趣的消息。發布者不需要知道誰在聽，訂閱者也不需要知道誰在發。'},
        {t:'code',s:'// 簡單的 C# 事件系統實作\npublic static class EventBus {\n    static Dictionary<string, Action<object>> events\n        = new Dictionary<string, Action<object>>();\n\n    public static void Subscribe(string eventName, Action<object> cb) {\n        if (!events.ContainsKey(eventName))\n            events[eventName] = null;\n        events[eventName] += cb;\n    }\n\n    public static void Publish(string eventName, object data = null) {\n        if (events.ContainsKey(eventName))\n            events[eventName]?.Invoke(data);\n    }\n\n    public static void Unsubscribe(string eventName, Action<object> cb) {\n        if (events.ContainsKey(eventName))\n            events[eventName] -= cb;\n    }\n}\n\n// 使用範例\nEventBus.Subscribe("enemy_killed", (data) => {\n    int score = (int)data;\n    UpdateScoreUI(score);\n});\n\nEventBus.Publish("enemy_killed", 100);'},
        {t:'lock',s:'🔒 購買後觀看完整課程內容 + 下載範例專案…'}
      ],
      jp:[
        {t:'h3',s:'Lesson 2：イベントシステム（Event Bus）実装'},
        {t:'p',s:'ゲームの規模が大きくなると、GetComponentや直接参照があちこちに散らばり、コードがスパゲッティ化します。イベントシステムはモジュール間を「イベント」で疎結合にする第一歩です。'},
        {t:'h4',s:'コアコンセプト'},
        {t:'p',s:'Event Busは掲示板のようなもの：誰でもメッセージを「発行」でき、誰でも興味のあるメッセージを「購読」できます。'},
        {t:'code',s:'// シンプルなC#イベントシステム\npublic static class EventBus {\n    static Dictionary<string, Action<object>> events\n        = new Dictionary<string, Action<object>>();\n\n    public static void Subscribe(string name, Action<object> cb) {\n        if (!events.ContainsKey(name))\n            events[name] = null;\n        events[name] += cb;\n    }\n\n    public static void Publish(string name, object data = null) {\n        if (events.ContainsKey(name))\n            events[name]?.Invoke(data);\n    }\n}\n\n// 使用例\nEventBus.Subscribe("enemy_killed", (data) => {\n    int score = (int)data;\n    UpdateScoreUI(score);\n});\nEventBus.Publish("enemy_killed", 100);'},
        {t:'lock',s:'🔒 購入後に完全なコース + サンプルプロジェクトをダウンロード…'}
      ],
      cn:[
        {t:'h3',s:'Lesson 2：事件系统（Event Bus）实作'},
        {t:'p',s:'当你的游戏规模超过一定程度，到处写 GetComponent 和直接引用会让代码变成一团意大利面。事件系统是解耦的第一步。'},
        {t:'h4',s:'核心概念'},
        {t:'p',s:'Event Bus 就像一个公告板：任何人都可以「发布」消息，任何人都可以「订阅」感兴趣的消息。'},
        {t:'code',s:'// 简单的 C# 事件系统实作\npublic static class EventBus {\n    static Dictionary<string, Action<object>> events\n        = new Dictionary<string, Action<object>>();\n\n    public static void Subscribe(string name, Action<object> cb) {\n        if (!events.ContainsKey(name))\n            events[name] = null;\n        events[name] += cb;\n    }\n\n    public static void Publish(string name, object data = null) {\n        if (events.ContainsKey(name))\n            events[name]?.Invoke(data);\n    }\n}\n\n// 使用示例\nEventBus.Subscribe("enemy_killed", (data) => {\n    UpdateScoreUI((int)data);\n});\nEventBus.Publish("enemy_killed", 100);'},
        {t:'lock',s:'🔒 购买后观看完整课程内容 + 下载示例项目…'}
      ],
      ph:[
        {t:'h3',s:'Lesson 2: Event System (Event Bus)'},
        {t:'p',s:'When your game grows, using GetComponent and direct references everywhere turns your code into spaghetti. The Event System is the first step to decoupling — modules communicate through "events" instead of calling each other directly.'},
        {t:'h4',s:'Core Concept'},
        {t:'p',s:'Event Bus is like a bulletin board: anyone can "publish" messages, anyone can "subscribe" to messages they\'re interested in.'},
        {t:'code',s:'// Simple C# Event System\npublic static class EventBus {\n    static Dictionary<string, Action<object>> events\n        = new Dictionary<string, Action<object>>();\n\n    public static void Subscribe(string name, Action<object> cb) {\n        if (!events.ContainsKey(name))\n            events[name] = null;\n        events[name] += cb;\n    }\n\n    public static void Publish(string name, object data = null) {\n        if (events.ContainsKey(name))\n            events[name]?.Invoke(data);\n    }\n}\n\n// Usage\nEventBus.Subscribe("enemy_killed", (data) => {\n    UpdateScoreUI((int)data);\n});\nEventBus.Publish("enemy_killed", 100);'},
        {t:'lock',s:'🔒 Purchase to access full course + sample project…'}
      ]
    }
  },
  'fullgame-course':{
    id:'fullgame-course',type:'paid',icon:'🕹️',price:'NT$2,490',
    lessons:{
      tw:['Lesson 1：專案建立與資源規劃','Lesson 2：角色控制與觸控操作','Lesson 3：關卡設計與地圖編輯器','Lesson 4：敵人 AI 與碰撞系統','Lesson 5：UI 系統（主選單、暫停、結算）','Lesson 6：音效、特效與遊戲感','Lesson 7：存檔系統與排行榜','Lesson 8：App Store / Google Play 上架完整流程'],
      jp:['Lesson 1：プロジェクト作成とリソース計画','Lesson 2：キャラクター操作とタッチ入力','Lesson 3：ステージ設計とマップエディター','Lesson 4：敵AI＆衝突システム','Lesson 5：UIシステム（メニュー、ポーズ、リザルト）','Lesson 6：サウンド、エフェクト、ゲームフィール','Lesson 7：セーブシステムとランキング','Lesson 8：App Store / Google Play リリース完全ガイド'],
      cn:['Lesson 1：项目创建与资源规划','Lesson 2：角色控制与触控操作','Lesson 3：关卡设计与地图编辑器','Lesson 4：敌人 AI 与碰撞系统','Lesson 5：UI 系统（主菜单、暂停、结算）','Lesson 6：音效、特效与游戏感','Lesson 7：存档系统与排行榜','Lesson 8：App Store / Google Play 上架完整流程'],
      ph:['Lesson 1: Project Setup & Resource Planning','Lesson 2: Character Control & Touch Input','Lesson 3: Level Design & Map Editor','Lesson 4: Enemy AI & Collision System','Lesson 5: UI System (Menu, Pause, Results)','Lesson 6: Sound, Effects & Game Feel','Lesson 7: Save System & Leaderboard','Lesson 8: App Store / Google Play Publishing']
    },
    preview:{
      tw:[
        {t:'h3',s:'Lesson 2：角色控制與觸控操作'},
        {t:'p',s:'這一課我們將實作一個手機遊戲最核心的部分——角色控制。我們會用 Cocos Creator 的觸控事件系統，做出流暢的角色移動和跳躍。'},
        {t:'h4',s:'觸控事件基礎'},
        {t:'p',s:'手機遊戲的操作體驗決定了遊戲的好壞。我們需要處理觸摸開始、移動和結束三個階段，並加入適當的手感優化（如輸入緩衝和加速度）。'},
        {t:'code',s:'// Cocos Creator 觸控控制範例\n@ccclass("PlayerController")\nexport class PlayerController extends Component {\n    @property speed = 300\n    @property jumpForce = 500\n\n    private moveDir = 0\n    private rb: RigidBody2D = null\n\n    start() {\n        this.rb = this.getComponent(RigidBody2D)\n\n        // 觸控事件監聽\n        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)\n        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)\n        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)\n    }\n\n    onTouchStart(e: EventTouch) {\n        const loc = e.getUILocation()\n        if (loc.y > screen.windowSize.height * 0.6) {\n            // 螢幕上方 → 跳躍\n            this.jump()\n        } else {\n            // 螢幕下方 → 左右移動\n            this.moveDir = loc.x > screen.windowSize.width / 2 ? 1 : -1\n        }\n    }\n\n    jump() {\n        this.rb.linearVelocity = v2(this.rb.linearVelocity.x, this.jumpForce)\n    }\n\n    update(dt: number) {\n        const pos = this.node.position\n        this.node.setPosition(pos.x + this.moveDir * this.speed * dt, pos.y)\n    }\n}'},
        {t:'lock',s:'🔒 購買後觀看完整 8 小時課程 + 完整原始碼…'}
      ],
      jp:[
        {t:'h3',s:'Lesson 2：キャラクター操作とタッチ入力'},
        {t:'p',s:'このレッスンではモバイルゲームの最も重要な部分——キャラクター操作を実装します。Cocos Creatorのタッチイベントシステムを使い、滑らかなキャラクター移動とジャンプを作ります。'},
        {t:'h4',s:'タッチイベント基礎'},
        {t:'p',s:'モバイルゲームの操作感がゲームの良し悪しを決めます。タッチ開始、移動、終了の3フェーズを処理し、入力バッファリングや加速度で手触りを最適化します。'},
        {t:'code',s:'// Cocos Creator タッチ操作サンプル\n@ccclass("PlayerController")\nexport class PlayerController extends Component {\n    @property speed = 300\n    @property jumpForce = 500\n    private moveDir = 0\n    private rb: RigidBody2D = null\n\n    start() {\n        this.rb = this.getComponent(RigidBody2D)\n        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)\n        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)\n        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)\n    }\n\n    onTouchStart(e: EventTouch) {\n        const loc = e.getUILocation()\n        if (loc.y > screen.windowSize.height * 0.6) {\n            this.jump() // 上部タッチ → ジャンプ\n        } else {\n            this.moveDir = loc.x > screen.windowSize.width / 2 ? 1 : -1\n        }\n    }\n\n    jump() {\n        this.rb.linearVelocity = v2(this.rb.linearVelocity.x, this.jumpForce)\n    }\n\n    update(dt: number) {\n        const pos = this.node.position\n        this.node.setPosition(pos.x + this.moveDir * this.speed * dt, pos.y)\n    }\n}'},
        {t:'lock',s:'🔒 購入後に8時間の完全コース + ソースコードをダウンロード…'}
      ],
      cn:[
        {t:'h3',s:'Lesson 2：角色控制与触控操作'},
        {t:'p',s:'这一课我们将实作一个手机游戏最核心的部分——角色控制。我们会用 Cocos Creator 的触控事件系统，做出流畅的角色移动和跳跃。'},
        {t:'h4',s:'触控事件基础'},
        {t:'p',s:'手机游戏的操作体验决定了游戏的好坏。我们需要处理触摸开始、移动和结束三个阶段，并加入适当的手感优化。'},
        {t:'code',s:'// Cocos Creator 触控控制示例\n@ccclass("PlayerController")\nexport class PlayerController extends Component {\n    @property speed = 300\n    @property jumpForce = 500\n    private moveDir = 0\n\n    start() {\n        this.rb = this.getComponent(RigidBody2D)\n        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)\n    }\n\n    onTouchStart(e: EventTouch) {\n        const loc = e.getUILocation()\n        if (loc.y > screen.windowSize.height * 0.6) {\n            this.jump()\n        } else {\n            this.moveDir = loc.x > screen.windowSize.width / 2 ? 1 : -1\n        }\n    }\n\n    update(dt: number) {\n        const pos = this.node.position\n        this.node.setPosition(pos.x + this.moveDir * this.speed * dt, pos.y)\n    }\n}'},
        {t:'lock',s:'🔒 购买后观看完整 8 小时课程 + 完整源代码…'}
      ],
      ph:[
        {t:'h3',s:'Lesson 2: Character Control & Touch Input'},
        {t:'p',s:'In this lesson we\'ll implement the most critical part of a mobile game — character control. We\'ll use Cocos Creator\'s touch event system for smooth character movement and jumping.'},
        {t:'h4',s:'Touch Event Basics'},
        {t:'p',s:'The controls make or break a mobile game. We need to handle touch start, move, and end phases, plus add game feel optimizations like input buffering and acceleration.'},
        {t:'code',s:'// Cocos Creator Touch Control Example\n@ccclass("PlayerController")\nexport class PlayerController extends Component {\n    @property speed = 300\n    @property jumpForce = 500\n    private moveDir = 0\n\n    start() {\n        this.rb = this.getComponent(RigidBody2D)\n        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this)\n    }\n\n    onTouchStart(e: EventTouch) {\n        const loc = e.getUILocation()\n        if (loc.y > screen.windowSize.height * 0.6) {\n            this.jump()\n        } else {\n            this.moveDir = loc.x > screen.windowSize.width / 2 ? 1 : -1\n        }\n    }\n\n    update(dt: number) {\n        const pos = this.node.position\n        this.node.setPosition(pos.x + this.moveDir * this.speed * dt, pos.y)\n    }\n}'},
        {t:'lock',s:'🔒 Purchase to access full 8-hour course + complete source code…'}
      ]
    }
  }
}

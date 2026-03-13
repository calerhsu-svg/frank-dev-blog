// ── POSTS DATA ──
const POSTS_TW=[
  {id:1,cover:"🎮",title:"Unity vs Cocos Creator：兩年實戰後的真心話比較",
   excerpt:"很多人問我：「學遊戲開發要選 Unity 還是 Cocos？」用了兩年這兩個引擎，踩過很多坑之後，我終於可以給出一個比較誠實的答案……",
   content:[
     {t:"p",s:"很多人問我：「學遊戲開發要選 Unity 還是 Cocos？」用了兩年這兩個引擎之後，我終於可以給出一個比較誠實的答案：兩個都很好，但適合的場景不同。"},
     {t:"h3",s:"Unity 的強項"},
     {t:"p",s:"Unity 的生態系無庸置疑是目前最完整的。Asset Store 裡有海量的素材和工具、YouTube 上有數不清的教學、社群論壇幾乎任何問題都有人回答過。如果你想做 3D 遊戲，或者目標是主機、PC 平台，Unity 幾乎是唯一選擇。"},
     {t:"h3",s:"Cocos Creator 的強項"},
     {t:"p",s:"Cocos 在手機 2D 遊戲和 H5 網頁遊戲方面有壓倒性的優勢，尤其在台灣和中國市場。它的底層效能在手機端非常出色，而且針對微信小遊戲等平台有原生支援。"},
     {t:"h3",s:"我的建議"},
     {t:"p",s:"如果你剛入門，我建議先從 Unity 開始——學習資源多、社群活躍、遇到問題容易找到答案。等有了基礎概念再學 Cocos，轉換成本其實不高，因為核心的遊戲開發邏輯是相通的。"},
     {t:"h3",s:"兩個都學有沒有意義？"},
     {t:"p",s:"非常有意義！特別是如果你想接案，同時會 Unity 和 Cocos 能讓你接到更多不同類型的專案，競爭力也會大幅提升。我目前接的案子約一半 Unity、一半 Cocos，兩邊都接讓收入更穩定。"}
   ],tags:["Unity","Cocos","入門"],date:"2026-02-20",readTime:"7 分鐘"},
  {id:2,cover:"📱",title:"手機遊戲效能優化的 5 個關鍵技巧",
   excerpt:"做手機遊戲最大的挑戰之一就是效能。玩家的手機型號五花八門，要讓遊戲在低階機上也跑得順，你必須從一開始就養成好習慣……",
   content:[
     {t:"p",s:"做手機遊戲最大的挑戰之一就是效能。玩家的手機型號五花八門，要讓遊戲在低階機上也跑得順，你必須從一開始就養成好習慣。"},
     {t:"h3",s:"技巧 1：善用 Object Pooling（物件池）"},
     {t:"p",s:"頻繁的 Instantiate 和 Destroy 是效能殺手。子彈、特效、敵人這類大量生成的物件，一定要用 Object Pool 管理，重複利用而不是一直生成銷毀。這一個改動往往能讓幀率提升 20-30%。"},
     {t:"h3",s:"技巧 2：控制 Draw Call 數量"},
     {t:"p",s:"把多張小圖合併成 Sprite Atlas，讓同一批 sprite 只需要一次 Draw Call。這在 Cocos 和 Unity 都適用，是 2D 遊戲優化最基礎也最有效的方法之一。"},
     {t:"h3",s:"技巧 3：Update 裡的程式碼要精簡"},
     {t:"p",s:"每一幀都執行的邏輯要盡量輕量。避免在 Update 裡做字串操作、大量的碰撞查詢或 Find 物件等昂貴操作。能在 Awake/Start 初始化的就不要放在 Update 裡。"},
     {t:"h3",s:"技巧 4：用 Profiler 找真正的瓶頸"},
     {t:"p",s:"很多人優化的地方根本不是瓶頸所在。一定要先打開 Profiler，找到真正佔用最多時間的地方，再針對性地優化。不要憑直覺猜，要用數據說話。"},
     {t:"h3",s:"技巧 5：適當使用 LOD 和圖集"},
     {t:"p",s:"遠處的物件不需要高細節，LOD 系統可以根據距離自動切換模型。圖集（Atlas）則確保同場景的 UI 元素盡量共用材質，減少渲染批次。"}
   ],tags:["Unity","Cocos","效能優化"],date:"2026-02-05",readTime:"6 分鐘"},
  {id:3,cover:"🕹️",title:"從零開始學 Unity：給完全新手的入門路線圖",
   excerpt:"你對遊戲開發有興趣，但不知道從哪裡開始？這篇文章幫你規劃一條清晰的學習路線，從安裝 Unity 到做出第一個可玩的 Demo，一步步帶你走……",
   content:[
     {t:"p",s:"你對遊戲開發有興趣，但不知道從哪裡開始？這篇文章幫你規劃一條清晰的學習路線，讓你少走彎路。"},
     {t:"h3",s:"第一階段：熟悉 Unity 環境（1-2 週）"},
     {t:"p",s:"下載安裝 Unity Hub 和 Unity Editor（LTS 版本）。花幾天時間熟悉介面：Scene View、Game View、Inspector、Hierarchy。"},
     {t:"h3",s:"第二階段：學習 C# 基礎（2-4 週）"},
     {t:"p",s:"Unity 使用 C# 作為腳本語言。你需要了解：變數與型別、條件判斷與迴圈、函式與類別、MonoBehaviour 的生命週期（Awake、Start、Update）。建議邊學邊寫，不要只看教學。"},
     {t:"h3",s:"第三階段：做出第一個完整遊戲（4-8 週）"},
     {t:"p",s:"選一個簡單的遊戲類型：2D 平台跳躍、打磚塊或頂視角射擊。重要的是做「完整」的遊戲——有開始畫面、遊戲邏輯、結束條件和分數顯示。完成度比品質更重要。"},
     {t:"h3",s:"最後一點建議"},
     {t:"p",s:"學習遊戲開發最大的陷阱是「一直在看教學，卻沒有真正動手做」。規定自己每看一個教學，就要做一個對應的小練習。動手比觀看重要一百倍。"}
   ],tags:["Unity","入門","教學"],date:"2026-01-18",readTime:"8 分鐘"},
  {id:4,cover:"💼",title:"遊戲開發接案經驗分享：如何談到第一個客戶",
   excerpt:"接案是很多獨立遊戲開發者的收入來源，但第一個客戶是最難的。我分享自己從「什麼案子都沒有」到穩定接案的過程……",
   content:[
     {t:"p",s:"接案是很多獨立遊戲開發者的收入來源，但第一個客戶是最難的。這裡分享我自己從「什麼案子都沒有」到穩定接案的真實過程。"},
     {t:"h3",s:"第一步：建立作品集"},
     {t:"p",s:"沒有客戶願意找一個「沒有任何作品」的開發者。在開始接案之前，先做 2-3 個展示你能力的小遊戲 Demo，放到 itch.io 或 GitHub 上。"},
     {t:"h3",s:"第二步：用低價建立信譽"},
     {t:"p",s:"第一個客戶，我是以非常低的價格接的。這聽起來不划算，但那個案子給了我：真實的客戶評價、實際交付的經驗。"},
     {t:"h3",s:"談價格的關鍵"},
     {t:"p",s:"報價前一定要先徹底了解需求，不要給「概括性報價」。把項目拆細，逐項估算工時，加上 20-30% 的緩衝。寧可報貴再談，也不要報便宜再追加。"},
     {t:"h3",s:"最重要的一件事"},
     {t:"p",s:"準時交付，超出預期。接案最強大的行銷工具是「客戶介紹客戶」。只要你把每一個案子做好，口碑會幫你找到下一個客戶。"}
   ],tags:["接案","心得"],date:"2026-01-03",readTime:"7 分鐘"},
  {id:5,cover:"🎨",title:"遊戲 UI 設計入門：讓玩家直覺看懂介面",
   excerpt:"很多開發者都曾輕忽 UI 設計，以為「功能做好就好」。但糟糕的 UI 會讓玩家在第一分鐘就放棄你的遊戲……",
   content:[
     {t:"p",s:"很多開發者（包括我自己）都曾輕忽 UI 設計，以為「功能做好就好」。但糟糕的 UI 會讓玩家在第一分鐘就放棄你的遊戲。"},
     {t:"h3",s:"原則 1：清晰比好看更重要"},
     {t:"p",s:"玩家不會研究你的介面，他們只想直覺知道該怎麼做。HP 條要明顯、按鈕要清楚知道是按鈕、重要資訊要放在最顯眼的位置。"},
     {t:"h3",s:"原則 2：善用視覺層級"},
     {t:"p",s:"透過大小、顏色、對比來引導玩家的視線。最重要的元素最大最醒目，次要的縮小或降低對比。一個畫面不要有超過 3 個「重點」。"},
     {t:"h3",s:"原則 3：回饋要即時且明確"},
     {t:"p",s:"每個玩家的操作都要有反應：按鈕按下要有視覺變化、受傷要有閃紅、拾取物品要有動畫。缺乏回饋會讓玩家懷疑「我剛才的操作有沒有成功？」"}
   ],tags:["UI設計","教學"],date:"2025-12-15",readTime:"5 分鐘"},
  {id:6,cover:"🚀",title:"Cocos Creator 新手必踩的 5 個坑（以及如何避開）",
   excerpt:"我剛開始學 Cocos 的時候，有幾個坑踩了不止一次。現在把它們整理出來，希望讓你少浪費幾個小時的除錯時間……",
   content:[
     {t:"p",s:"我剛開始學 Cocos Creator 的時候，有幾個坑踩了不止一次。現在把它們整理出來，希望讓你少浪費幾個小時的除錯時間。"},
     {t:"h3",s:"坑 1：忽略 Node 的 Anchor Point"},
     {t:"p",s:"Cocos 的節點位置是由 Anchor Point 決定的，預設在中心（0.5, 0.5）。如果你發現節點位置總是「歪掉」，十有八九是 Anchor Point 沒設對。"},
     {t:"h3",s:"坑 2：直接在腳本裡用字串找節點"},
     {t:"p",s:"用 find() 動態查找節點不只效能差，還很容易因為節點改名而出錯。養成習慣：在 Inspector 裡用 @property 拖拉指定節點引用。"},
     {t:"h3",s:"坑 3：不了解 Canvas 的縮放邏輯"},
     {t:"p",s:"Cocos 的 Canvas 有多種縮放模式，選錯會讓 UI 在不同螢幕比例上跑版。大多數手機遊戲推薦 FIXED_HEIGHT。"},
     {t:"h3",s:"坑 4：TypeScript 型別沒有善用"},
     {t:"p",s:"Cocos 3.x 強力建議使用 TypeScript，但很多新手還是像寫 JavaScript 一樣隨意。型別宣告可以讓 IDE 幫你找到大量的低級錯誤。"},
     {t:"h3",s:"坑 5：跳過版控直接開發"},
     {t:"p",s:"沒有版控直接開發是災難的開始。現在就建立 Git repo，每次有意義的進展就 commit。"}
   ],tags:["Cocos","教學","心得"],date:"2025-11-28",readTime:"6 分鐘"}
]

const POSTS_JP=[
  {id:1,cover:"🎮",title:"Unity vs Cocos Creator：2年間の実戦後の本音比較",
   excerpt:"「ゲーム開発にはUnityとCocosどちらを選ぶべき？」2年間両エンジンを使い、多くの失敗を経験した後、ようやく正直な答えが出せます……",
   content:[
     {t:"p",s:"「ゲーム開発にはUnityとCocosどちらを選ぶべき？」2年間両エンジンを使った後、正直な答えが出せるようになりました：どちらも優れていますが、適したシーンが違います。"},
     {t:"h3",s:"Unityの強み"},
     {t:"p",s:"UnityのエコシステムはAsset Storeに豊富な素材とツール、YouTubeには無数のチュートリアル、コミュニティフォーラムでほぼすべての問題に回答があります。3Dゲームやコンソール・PCプラットフォームが目標ならUnityが最適です。"},
     {t:"h3",s:"Cocos Creatorの強み"},
     {t:"p",s:"Cocosはモバイル2DゲームとH5ウェブゲームで圧倒的な優位性を持ちます。特に台湾と中国市場では強く、モバイル端末でのパフォーマンスが非常に優れています。"},
     {t:"h3",s:"私のアドバイス"},
     {t:"p",s:"初心者なら、まずUnityから始めることをお勧めします。学習リソースが豊富で、コミュニティも活発です。基礎を固めてからCocosを学ぶのは難しくありません。"},
     {t:"h3",s:"両方学ぶ価値はあるか？"},
     {t:"p",s:"非常に価値があります！特にフリーランスを考えているなら、UnityとCocosの両方ができることで、より多くの案件を受けられます。"}
   ],tags:["Unity","Cocos","入門"],date:"2026-02-20",readTime:"7分"},
  {id:2,cover:"📱",title:"モバイルゲームパフォーマンス最適化の5つのポイント",
   excerpt:"モバイルゲーム開発最大の課題の一つはパフォーマンスです。様々なデバイスでスムーズに動くよう、最初から良い習慣を身につける必要があります……",
   content:[
     {t:"p",s:"モバイルゲーム開発最大の課題の一つはパフォーマンスです。多様なデバイスでスムーズに動かすには、最初から良い習慣が必要です。"},
     {t:"h3",s:"ポイント1：Object Poolingを活用する"},
     {t:"p",s:"頻繁なInstantiateとDestroyはパフォーマンスの敵。弾、エフェクト、敵などは必ずObject Poolで管理し再利用しましょう。この一つの改善でフレームレートが20-30%向上することもあります。"},
     {t:"h3",s:"ポイント2：Draw Call数を制御する"},
     {t:"p",s:"複数の小さな画像をSprite Atlasに統合し、同じバッチのスプライトが一回のDraw Callで済むようにしましょう。"},
     {t:"h3",s:"ポイント3：Updateのコードを軽量に"},
     {t:"p",s:"毎フレーム実行されるロジックはできるだけ軽量に。文字列操作、多数のコリジョン検索、Findなどの重い処理はUpdateに入れないようにしましょう。"},
     {t:"h3",s:"ポイント4：Profilerで本当のボトルネックを見つける"},
     {t:"p",s:"最適化する前に必ずProfilerを開いて、本当に時間を消費している箇所を特定しましょう。直感に頼らず、データで判断することが重要です。"}
   ],tags:["Unity","Cocos","最適化"],date:"2026-02-05",readTime:"6分"},
  {id:3,cover:"🕹️",title:"Unity完全初心者ガイド：ロードマップ",
   excerpt:"ゲーム開発に興味があるけど、どこから始めればいい？この記事でUnityインストールから最初のゲーム完成まで、明確な学習ロードマップを紹介します……",
   content:[
     {t:"p",s:"ゲーム開発に興味があるけど、どこから始めればいいか分からない？この記事では、遠回りしないための明確な学習ロードマップを紹介します。"},
     {t:"h3",s:"フェーズ1：Unity環境に慣れる（1-2週間）"},
     {t:"p",s:"Unity HubとUnity Editor（LTSバージョン）をダウンロードしてインストール。Scene View、Game View、Inspector、Hierarchyなどのインターフェースに慣れましょう。"},
     {t:"h3",s:"フェーズ2：C#の基礎を学ぶ（2-4週間）"},
     {t:"p",s:"Unityはスクリプト言語にC#を使用します。変数と型、条件分岐とループ、関数とクラス、MonoBehaviourのライフサイクル（Awake、Start、Update）を学びましょう。"},
     {t:"h3",s:"フェーズ3：最初の完全なゲームを作る（4-8週間）"},
     {t:"p",s:"シンプルなゲームタイプを選びましょう：2Dプラットフォーマー、ブロック崩し、トップダウンシューター。スタート画面、ゲームロジック、終了条件、スコア表示がある「完全な」ゲームを作ることが重要です。"}
   ],tags:["Unity","入門","チュートリアル"],date:"2026-01-18",readTime:"8分"},
  {id:4,cover:"💼",title:"ゲーム開発フリーランス体験談：最初のクライアントを獲得するには",
   excerpt:"フリーランスはインディーゲーム開発者の収入源の一つですが、最初のクライアントが最も難しい。私が「案件ゼロ」から安定受注までの過程を共有します……",
   content:[
     {t:"p",s:"フリーランスはインディーゲーム開発者の収入源の一つですが、最初のクライアントが最も難しいです。「案件ゼロ」から安定受注までの実際のプロセスを共有します。"},
     {t:"h3",s:"ステップ1：ポートフォリオを作る"},
     {t:"p",s:"「作品が何もない」開発者を雇いたいクライアントはいません。フリーランスを始める前に、スキルをアピールできる小さなゲームDemoを2-3個作り、itch.ioかGitHubに公開しましょう。"},
     {t:"h3",s:"ステップ2：低価格で信頼を築く"},
     {t:"p",s:"最初のクライアントは非常に安い価格で受けました。割に合わないように聞こえますが、それによって実際の顧客レビュー、実際の納品経験、「クライアントが本当に求めるもの」を理解する機会が得られました。"},
     {t:"h3",s:"価格交渉のポイント"},
     {t:"p",s:"見積もりを出す前に必ず要件を徹底的に理解しましょう。プロジェクトを細分化し、各工程の工数を見積もり、20-30%のバッファを加えます。"}
   ],tags:["フリーランス","体験談"],date:"2026-01-03",readTime:"7分"},
  {id:5,cover:"🎨",title:"ゲームUIデザイン入門：プレイヤーが直感的に理解できるインターフェース",
   excerpt:"多くの開発者はUIデザインを軽視し、「機能が動けばいい」と思っています。しかし、悪いUIはプレイヤーを最初の1分で離脱させます……",
   content:[
     {t:"p",s:"多くの開発者（私自身も含め）はUIデザインを軽視し、「機能が動けばいい」と思っていました。しかし、悪いUIはプレイヤーを最初の1分で離脱させます。"},
     {t:"h3",s:"原則1：見た目より分かりやすさが重要"},
     {t:"p",s:"プレイヤーはインターフェースを研究しません。HPバーを目立たせ、ボタンはボタンだと分かるように、重要な情報は最も目立つ位置に置きましょう。"},
     {t:"h3",s:"原則2：視覚的な階層を活用する"},
     {t:"p",s:"サイズ、色、コントラストを使ってプレイヤーの視線を誘導します。最重要要素を最大最目立つように、一画面に「重点」は3つ以内にしましょう。"}
   ],tags:["UIデザイン","チュートリアル"],date:"2025-12-15",readTime:"5分"},
  {id:6,cover:"🚀",title:"Cocos Creator初心者がはまる5つの落とし穴（と回避方法）",
   excerpt:"Cocos Creatorを学び始めたとき、何度も同じ落とし穴にはまりました。デバッグ時間を節約するためにまとめました……",
   content:[
     {t:"p",s:"Cocos Creatorを学び始めた頃、何度も同じ落とし穴にはまりました。デバッグ時間を節約できるよう、まとめておきます。"},
     {t:"h3",s:"落とし穴1：NodeのAnchor Pointを無視する"},
     {t:"p",s:"Cocosのノード位置はAnchor Pointによって決まります。デフォルトは中央（0.5, 0.5）。ノードの位置がずれていたら、ほぼ確実にAnchor Pointの問題です。"},
     {t:"h3",s:"落とし穴2：スクリプトで文字列でノードを検索する"},
     {t:"p",s:"find()で動的にノードを検索するのはパフォーマンスが悪いだけでなく、ノード名変更でエラーが発生しやすいです。Inspectorで@propertyドラッグ指定を習慣にしましょう。"},
     {t:"h3",s:"落とし穴3：Canvasのスケールロジックを理解しない"},
     {t:"p",s:"CocosのCanvasには複数のスケールモードがあり、間違えると異なる画面比率でUIが崩れます。多くのモバイルゲームはFIXED_HEIGHTを推奨します。"}
   ],tags:["Cocos","チュートリアル","体験談"],date:"2025-11-28",readTime:"6分"}
]

const POSTS_CN=[
  {id:1,cover:"🎮",title:"Unity vs Cocos Creator：两年实战后的真心话比较",
   excerpt:"很多人问我：「学游戏开发要选 Unity 还是 Cocos？」用了两年这两个引擎，踩过很多坑之后，我终于可以给出一个比较诚实的答案……",
   content:[
     {t:"p",s:"很多人问我：「学游戏开发要选 Unity 还是 Cocos？」用了两年这两个引擎之后，我终于可以给出一个比较诚实的答案：两个都很好，但适合的场景不同。"},
     {t:"h3",s:"Unity 的强项"},
     {t:"p",s:"Unity 的生态系无庸置疑是目前最完整的。Asset Store 里有海量的素材和工具、YouTube 上有数不清的教学、社群论坛几乎任何问题都有人回答过。如果你想做 3D 游戏，Unity 几乎是唯一选择。"},
     {t:"h3",s:"Cocos Creator 的强项"},
     {t:"p",s:"Cocos 在手机 2D 游戏和 H5 网页游戏方面有压倒性的优势，尤其在中国市场。它的底层性能在手机端非常出色，而且针对微信小游戏等平台有原生支持。"},
     {t:"h3",s:"我的建议"},
     {t:"p",s:"如果你刚入门，我建议先从 Unity 开始——学习资源多、社群活跃。等有了基础概念再学 Cocos，转换成本其实不高。"},
     {t:"h3",s:"两个都学有没有意义？"},
     {t:"p",s:"非常有意义！特别是如果你想接案，同时会 Unity 和 Cocos 能让你接到更多不同类型的项目，竞争力也会大幅提升。"}
   ],tags:["Unity","Cocos","入门"],date:"2026-02-20",readTime:"7 分钟"},
  {id:2,cover:"📱",title:"手机游戏性能优化的 5 个关键技巧",
   excerpt:"做手机游戏最大的挑战之一就是性能。玩家的手机型号五花八门，要让游戏在低端机上也跑得顺，你必须从一开始就养成好习惯……",
   content:[
     {t:"p",s:"做手机游戏最大的挑战之一就是性能。要让游戏在低端机上也跑得顺，你必须从一开始就养成好习惯。"},
     {t:"h3",s:"技巧 1：善用 Object Pooling（对象池）"},
     {t:"p",s:"频繁的 Instantiate 和 Destroy 是性能杀手。子弹、特效、敌人这类大量生成的对象，一定要用 Object Pool 管理。这一个改动往往能让帧率提升 20-30%。"},
     {t:"h3",s:"技巧 2：控制 Draw Call 数量"},
     {t:"p",s:"把多张小图合并成 Sprite Atlas，让同一批 sprite 只需要一次 Draw Call。这是 2D 游戏优化最基础也最有效的方法之一。"},
     {t:"h3",s:"技巧 3：Update 里的代码要精简"},
     {t:"p",s:"每一帧都执行的逻辑要尽量轻量。避免在 Update 里做字符串操作、大量的碰撞查询或 Find 对象等昂贵操作。"},
     {t:"h3",s:"技巧 4：用 Profiler 找真正的瓶颈"},
     {t:"p",s:"一定要先打开 Profiler，找到真正占用最多时间的地方，再针对性地优化。不要凭直觉猜，要用数据说话。"},
     {t:"h3",s:"技巧 5：适当使用 LOD 和图集"},
     {t:"p",s:"远处的对象不需要高细节，LOD 系统可以根据距离自动切换模型。图集则确保同场景的 UI 元素尽量共用材质。"}
   ],tags:["Unity","Cocos","性能优化"],date:"2026-02-05",readTime:"6 分钟"},
  {id:3,cover:"🕹️",title:"从零开始学 Unity：给完全新手的入门路线图",
   excerpt:"你对游戏开发有兴趣，但不知道从哪里开始？这篇文章帮你规划一条清晰的学习路线……",
   content:[
     {t:"p",s:"你对游戏开发有兴趣，但不知道从哪里开始？这篇文章帮你规划一条清晰的学习路线，让你少走弯路。"},
     {t:"h3",s:"第一阶段：熟悉 Unity 环境（1-2 周）"},
     {t:"p",s:"下载安装 Unity Hub 和 Unity Editor（LTS 版本）。花几天时间熟悉界面：Scene View、Game View、Inspector、Hierarchy。"},
     {t:"h3",s:"第二阶段：学习 C# 基础（2-4 周）"},
     {t:"p",s:"Unity 使用 C# 作为脚本语言。你需要了解：变量与类型、条件判断与循环、函数与类、MonoBehaviour 的生命周期。"},
     {t:"h3",s:"第三阶段：做出第一个完整游戏（4-8 周）"},
     {t:"p",s:"选一个简单的游戏类型：2D 平台跳跃、打砖块或顶视角射击。重要的是做「完整」的游戏——有开始画面、游戏逻辑、结束条件和分数显示。"},
     {t:"h3",s:"最后一点建议"},
     {t:"p",s:"学习游戏开发最大的陷阱是「一直在看教学，却没有真正动手做」。动手比观看重要一百倍。"}
   ],tags:["Unity","入门","教学"],date:"2026-01-18",readTime:"8 分钟"},
  {id:4,cover:"💼",title:"游戏开发接案经验分享：如何谈到第一个客户",
   excerpt:"接案是很多独立游戏开发者的收入来源，但第一个客户是最难的……",
   content:[
     {t:"p",s:"接案是很多独立游戏开发者的收入来源，但第一个客户是最难的。这里分享我的真实过程。"},
     {t:"h3",s:"第一步：建立作品集"},
     {t:"p",s:"没有客户愿意找一个「没有任何作品」的开发者。先做 2-3 个展示你能力的小游戏 Demo。"},
     {t:"h3",s:"第二步：用低价建立信誉"},
     {t:"p",s:"第一个客户，我是以非常低的价格接的。那个案子给了我真实的客户评价和实际交付的经验。"},
     {t:"h3",s:"谈价格的关键"},
     {t:"p",s:"报价前一定要先彻底了解需求。把项目拆细，逐项估算工时，加上 20-30% 的缓冲。"},
     {t:"h3",s:"最重要的一件事"},
     {t:"p",s:"准时交付，超出预期。接案最强大的营销工具是「客户介绍客户」。"}
   ],tags:["接案","心得"],date:"2026-01-03",readTime:"7 分钟"},
  {id:5,cover:"🎨",title:"游戏 UI 设计入门：让玩家直觉看懂界面",
   excerpt:"很多开发者都曾轻忽 UI 设计，但糟糕的 UI 会让玩家在第一分钟就放弃你的游戏……",
   content:[
     {t:"p",s:"很多开发者（包括我自己）都曾轻忽 UI 设计。但糟糕的 UI 会让玩家在第一分钟就放弃你的游戏。"},
     {t:"h3",s:"原则 1：清晰比好看更重要"},
     {t:"p",s:"玩家不会研究你的界面，他们只想直觉知道该怎么做。HP 条要明显、按钮要清楚。"},
     {t:"h3",s:"原则 2：善用视觉层级"},
     {t:"p",s:"通过大小、颜色、对比来引导玩家的视线。一个画面不要有超过 3 个「重点」。"},
     {t:"h3",s:"原则 3：反馈要即时且明确"},
     {t:"p",s:"每个玩家的操作都要有反应：按钮按下要有视觉变化、受伤要有闪红。"}
   ],tags:["UI设计","教学"],date:"2025-12-15",readTime:"5 分钟"},
  {id:6,cover:"🚀",title:"Cocos Creator 新手必踩的 5 个坑（以及如何避开）",
   excerpt:"我刚开始学 Cocos 的时候，有几个坑踩了不止一次。现在把它们整理出来……",
   content:[
     {t:"p",s:"我刚开始学 Cocos Creator 的时候，有几个坑踩了不止一次。现在整理出来，希望让你少浪费几个小时的调试时间。"},
     {t:"h3",s:"坑 1：忽略 Node 的 Anchor Point"},
     {t:"p",s:"Cocos 的节点位置是由 Anchor Point 决定的，默认在中心（0.5, 0.5）。如果节点位置总是「歪掉」，十有八九是 Anchor Point 没设对。"},
     {t:"h3",s:"坑 2：直接在脚本里用字符串找节点"},
     {t:"p",s:"用 find() 动态查找节点不只性能差，还很容易因为节点改名而出错。"},
     {t:"h3",s:"坑 3：不了解 Canvas 的缩放逻辑"},
     {t:"p",s:"Cocos 的 Canvas 有多种缩放模式，选错会让 UI 在不同屏幕比例上跑版。大多数手机游戏推荐 FIXED_HEIGHT。"},
     {t:"h3",s:"坑 4：TypeScript 类型没有善用"},
     {t:"p",s:"Cocos 3.x 强力建议使用 TypeScript，类型声明可以让 IDE 帮你找到大量的低级错误。"},
     {t:"h3",s:"坑 5：跳过版控直接开发"},
     {t:"p",s:"没有版控直接开发是灾难的开始。现在就建立 Git repo，每次有意义的进展就 commit。"}
   ],tags:["Cocos","教学","心得"],date:"2025-11-28",readTime:"6 分钟"}
]

const POSTS_PH=[
  {id:1,cover:"🎮",title:"Unity vs Cocos Creator: Honest na Paghahambing Matapos ang 2 Taon",
   excerpt:"Maraming nagtatanong sa akin: \"Unity o Cocos ang dapat kong piliin?\" Pagkatapos gamitin ang dalawang engine sa loob ng 2 taon, maibibigay ko na ang honest na sagot……",
   content:[
     {t:"p",s:"Maraming nagtatanong sa akin: \"Unity o Cocos ang dapat kong piliin?\" Pagkatapos gamitin ang dalawang engine ng 2 taon, narito ang honest na sagot ko: pareho silang maganda, pero magkaiba ang angkop na gamit."},
     {t:"h3",s:"Lakas ng Unity"},
     {t:"p",s:"Ang ecosystem ng Unity ang pinakamalawak. Ang Asset Store ay may napakaraming assets at tools. Sa YouTube, walang katapusang tutorials. Kung gusto mong gumawa ng 3D games, Unity ang best na pagpipilian."},
     {t:"h3",s:"Lakas ng Cocos Creator"},
     {t:"p",s:"Ang Cocos ay napakalakas sa mobile 2D games at H5 web games, lalo na sa Asian market. Ang performance nito sa mobile devices ay napakaganda."},
     {t:"h3",s:"Ang Payo Ko"},
     {t:"p",s:"Kung baguhan ka pa lang, magsimula ka sa Unity — maraming learning resources at aktibong community. Pagkatapos matuto ng basics, madali na lang mag-switch sa Cocos."},
     {t:"h3",s:"May halaga bang matuto ng dalawa?"},
     {t:"p",s:"Oo, napakalaki! Lalo na kung gusto mong mag-freelance. Pag kabisado mo pareho, mas maraming projects ang matatanggap mo."}
   ],tags:["Unity","Cocos","Beginner"],date:"2026-02-20",readTime:"7 min"},
  {id:2,cover:"📱",title:"5 Mahahalagang Tips sa Mobile Game Performance Optimization",
   excerpt:"Isa sa pinakamalaking hamon sa mobile game development ay performance. Kailangan mong matutunang mag-optimize mula sa simula……",
   content:[
     {t:"p",s:"Isa sa pinakamalaking hamon sa mobile game dev ay performance. Kailangan tumakbo nang maayos kahit sa low-end phones."},
     {t:"h3",s:"Tip 1: Gamitin ang Object Pooling"},
     {t:"p",s:"Madalas na Instantiate at Destroy ang pumapatay sa performance. Bullets, effects, enemies — gamitin ang Object Pool para i-recycle sila. Ito lang, 20-30% na ang improvement sa framerate."},
     {t:"h3",s:"Tip 2: Kontrolin ang Draw Call Count"},
     {t:"p",s:"I-merge ang maliliit na images sa Sprite Atlas para mabawasan ang Draw Calls. Isa ito sa pinaka-basic at pinaka-effective na optimization."},
     {t:"h3",s:"Tip 3: I-simplify ang Update Code"},
     {t:"p",s:"Ang code na tumatakbo bawat frame ay dapat light lang. Iwasan ang string operations, maraming collision queries, o Find sa loob ng Update."},
     {t:"h3",s:"Tip 4: Gamitin ang Profiler para Mahanap ang Bottleneck"},
     {t:"p",s:"Huwag hulaan — gamitin ang Profiler para malaman kung saan talaga napupunta ang oras at resources."}
   ],tags:["Unity","Cocos","Optimization"],date:"2026-02-05",readTime:"6 min"},
  {id:3,cover:"🕹️",title:"Matuto ng Unity Mula sa Zero: Roadmap para sa Beginners",
   excerpt:"Interesado ka sa game development pero hindi alam kung saan magsisimula? Narito ang step-by-step na learning roadmap……",
   content:[
     {t:"p",s:"Interesado ka sa game development pero hindi alam kung saan magsisimula? Narito ang malinaw na learning roadmap."},
     {t:"h3",s:"Phase 1: Kilalanin ang Unity (1-2 Linggo)"},
     {t:"p",s:"I-download ang Unity Hub at Unity Editor (LTS version). Pamilyarisahin ang Scene View, Game View, Inspector, at Hierarchy."},
     {t:"h3",s:"Phase 2: Matuto ng C# Basics (2-4 na Linggo)"},
     {t:"p",s:"Ang Unity ay gumagamit ng C#. Kailangan mong matuto ng variables, conditions, loops, functions, classes, at MonoBehaviour lifecycle."},
     {t:"h3",s:"Phase 3: Gumawa ng Unang Complete Game (4-8 Linggo)"},
     {t:"p",s:"Pumili ng simpleng game: 2D platformer, breakout, o top-down shooter. Ang mahalaga ay completeness — may start screen, gameplay, end condition, at score."},
     {t:"h3",s:"Huling Payo"},
     {t:"p",s:"Ang pinakamalaking trap sa game dev learning: \"panay nood ng tutorials pero hindi gumagawa.\" Mas importante ang hands-on kaysa panood."}
   ],tags:["Unity","Beginner","Tutorial"],date:"2026-01-18",readTime:"8 min"},
  {id:4,cover:"💼",title:"Game Dev Freelancing: Paano Makuha ang Unang Client",
   excerpt:"Mahirap makuha ang unang client. I-share ko ang journey ko mula zero hanggang stable freelancing……",
   content:[
     {t:"p",s:"Ang freelancing ay magandang income source pero ang unang client ang pinakamahirap. I-share ko ang totoong experience ko."},
     {t:"h3",s:"Step 1: Gumawa ng Portfolio"},
     {t:"p",s:"Walang client na tatanggap ng developer na walang kahit anong ipapakita. Gumawa ka ng 2-3 demo games at i-publish sa itch.io o GitHub."},
     {t:"h3",s:"Step 2: Magsimula sa Mababang Presyo"},
     {t:"p",s:"Ang unang client ko, tinanggap ko sa mababang presyo. Pero nakuha ko ang real client feedback at delivery experience."},
     {t:"h3",s:"Tips sa Pricing"},
     {t:"p",s:"Bago mag-quote, i-breakdown mo ang project at i-estimate ang bawat task. Mag-add ng 20-30% buffer."},
     {t:"h3",s:"Ang Pinaka-importante"},
     {t:"p",s:"On-time delivery at exceed expectations. Ang best marketing tool ay word-of-mouth."}
   ],tags:["Freelance","Experience"],date:"2026-01-03",readTime:"7 min"},
  {id:5,cover:"🎨",title:"Game UI Design Basics: Gawing Intuitive ang Interface",
   excerpt:"Maraming developers ang hindi pinapansin ang UI design. Pero ang masamang UI ay nakakapatay ng laro sa unang minuto……",
   content:[
     {t:"p",s:"Maraming developers (kasama ako) ang hindi masyado pinapansin ang UI design. Pero ang masamang UI ay pumapatal sa laro sa unang minuto."},
     {t:"h3",s:"Principle 1: Clarity over Beauty"},
     {t:"p",s:"Hindi pinag-aaralan ng players ang UI — gusto nila agad malaman ang gagawin. Dapat obvious ang HP bar, buttons, at important info."},
     {t:"h3",s:"Principle 2: Visual Hierarchy"},
     {t:"p",s:"Gamitin ang size, color, at contrast para i-guide ang attention. Maximum 3 focal points lang sa isang screen."},
     {t:"h3",s:"Principle 3: Instant Feedback"},
     {t:"p",s:"Bawat action ng player ay dapat may response: button press effect, damage flash, pickup animation."}
   ],tags:["UI Design","Tutorial"],date:"2025-12-15",readTime:"5 min"},
  {id:6,cover:"🚀",title:"5 Common na Pitfalls ng Cocos Creator Beginners (at Paano Iwasan)",
   excerpt:"Noong nagsisimula ako sa Cocos, maraming beses akong nahulog sa parehong bitag. Narito ang listahan para ma-save mo ang oras……",
   content:[
     {t:"p",s:"Noong nagsisimula ako sa Cocos Creator, maraming beses akong nahulog sa parehong pitfalls. Narito sila para makatipid ka ng oras."},
     {t:"h3",s:"Pitfall 1: Ignored ang Anchor Point"},
     {t:"p",s:"Ang position ng Cocos nodes ay base sa Anchor Point (default 0.5, 0.5). Kung palaging mali ang position, most likely Anchor Point ang problema."},
     {t:"h3",s:"Pitfall 2: String-based Node Finding"},
     {t:"p",s:"Ang find() ay mabagal at madaling masira pag nagpalit ng node name. Gamitin ang @property drag-and-drop sa Inspector."},
     {t:"h3",s:"Pitfall 3: Hindi Naiintindihan ang Canvas Scaling"},
     {t:"p",s:"May iba't ibang scale modes ang Canvas. Para sa karamihan ng mobile games, FIXED_HEIGHT ang recommended."},
     {t:"h3",s:"Pitfall 4: Hindi Nagamit nang Maayos ang TypeScript"},
     {t:"p",s:"Cocos 3.x ay strongly recommends TypeScript. Type declarations ay tumutulong sa IDE na mahanap ang bugs."},
     {t:"h3",s:"Pitfall 5: Walang Version Control"},
     {t:"p",s:"Development without Git ay recipe for disaster. Mag-commit sa bawat meaningful progress."}
   ],tags:["Cocos","Tutorial","Experience"],date:"2025-11-28",readTime:"6 min"}
]

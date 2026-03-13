// ── DAILY TUTORIALS ─────────────────────────────────────────────
const DAILY_TUTORIALS=[
  {tag:"Unity",title_tw:"Object Pooling 物件池模式",title_jp:"Object Pooling パターン",title_cn:"Object Pooling 对象池模式",title_ph:"Object Pooling Pattern",
   content_tw:"頻繁的 Instantiate/Destroy 是手遊效能殺手。用物件池預先建立物件、重複利用，可減少 GC 壓力。",
   content_jp:"頻繁なInstantiate/Destroyはモバイルゲームのパフォーマンスを破壊します。Object Poolで事前生成・再利用してGC圧力を軽減。",
   content_cn:"频繁的 Instantiate/Destroy 是手游性能杀手。用对象池预先创建对象、重复利用，可减少 GC 压力。",
   content_ph:"Frequent Instantiate/Destroy kills mobile performance. Use Object Pooling to pre-create and reuse objects, reducing GC pressure.",
   code:"public class ObjectPool : MonoBehaviour {\n    [SerializeField] GameObject prefab;\n    Queue<GameObject> pool = new Queue<GameObject>();\n\n    public GameObject Get() {\n        if (pool.Count > 0) {\n            var obj = pool.Dequeue();\n            obj.SetActive(true);\n            return obj;\n        }\n        return Instantiate(prefab);\n    }\n\n    public void Return(GameObject obj) {\n        obj.SetActive(false);\n        pool.Enqueue(obj);\n    }\n}"},
  {tag:"Cocos",title_tw:"Cocos Creator 生命週期",title_jp:"Cocos Creator ライフサイクル",title_cn:"Cocos Creator 生命周期",title_ph:"Cocos Creator Lifecycle",
   content_tw:"了解 onLoad → onEnable → start → update → onDisable → onDestroy 的順序，是避免 Bug 的基礎。",
   content_jp:"onLoad → onEnable → start → update → onDisable → onDestroy の順序を理解することがバグ回避の基本です。",
   content_cn:"了解 onLoad → onEnable → start → update → onDisable → onDestroy 的顺序，是避免 Bug 的基础。",
   content_ph:"Understanding onLoad → onEnable → start → update → onDisable → onDestroy order is fundamental to avoiding bugs.",
   code:"@ccclass('MyComponent')\nexport class MyComponent extends Component {\n    onLoad() { /* 節點載入，初始化資料 */ }\n    onEnable() { /* 啟用時註冊事件 */ }\n    start() { /* 第一次 update 前，安全取得其他元件 */ }\n    update(dt: number) { /* 每幀執行 */ }\n    onDisable() { /* 停用時移除事件 */ }\n    onDestroy() { /* 銷毀時清理資源 */ }\n}"},
  {tag:"C#",title_tw:"C# Coroutine 協程",title_jp:"C# コルーチン",title_cn:"C# 协程 Coroutine",title_ph:"C# Coroutines",
   content_tw:"Coroutine 讓你在不阻塞主執行緒的情況下實現延遲、等待等非同步流程，是 Unity 遊戲邏輯的核心工具。",
   content_jp:"Coroutineはメインスレッドをブロックせずに遅延・待機などの非同期フローを実現する、Unityゲームロジックの中核ツールです。",
   content_cn:"Coroutine 让你在不阻塞主线程的情况下实现延迟、等待等异步流程，是 Unity 游戏逻辑的核心工具。",
   content_ph:"Coroutines let you implement delays and async flows without blocking the main thread - a core Unity tool.",
   code:"IEnumerator SpawnWaves() {\n    for (int i = 0; i < 5; i++) {\n        SpawnEnemy();\n        yield return new WaitForSeconds(2f);\n    }\n    yield return new WaitUntil(() => enemies.Count == 0);\n    ShowVictoryScreen();\n}"},
  {tag:"Design Pattern",title_tw:"Singleton 單例模式",title_jp:"シングルトンパターン",title_cn:"Singleton 单例模式",title_ph:"Singleton Pattern",
   content_tw:"遊戲管理器（AudioManager、GameManager）常用 Singleton，確保全域只有一個實例。但要小心不要過度使用。",
   content_jp:"AudioManagerやGameManagerなどでよく使われるSingleton。グローバルに一つのインスタンスを保証しますが、使いすぎに注意。",
   content_cn:"游戏管理器（AudioManager、GameManager）常用 Singleton，确保全局只有一个实例。但要小心不要过度使用。",
   content_ph:"Game managers (AudioManager, GameManager) often use Singleton to ensure only one instance exists globally.",
   code:"public class GameManager : MonoBehaviour {\n    public static GameManager Instance { get; private set; }\n\n    void Awake() {\n        if (Instance != null && Instance != this) {\n            Destroy(gameObject);\n            return;\n        }\n        Instance = this;\n        DontDestroyOnLoad(gameObject);\n    }\n}"},
  {tag:"Performance",title_tw:"Sprite Atlas 圖集優化",title_jp:"Sprite Atlas 最適化",title_cn:"Sprite Atlas 图集优化",title_ph:"Sprite Atlas Optimization",
   content_tw:"把多張小圖合併成一張圖集，可以大幅減少 Draw Call。2D 遊戲優化第一步就是用圖集。",
   content_jp:"複数の小さな画像を一つのAtlasに統合するとDraw Callを大幅に削減できます。2Dゲーム最適化の第一歩。",
   content_cn:"把多张小图合并成一张图集，可以大幅减少 Draw Call。2D 游戏优化第一步就是用图集。",
   content_ph:"Combining small images into one atlas drastically reduces Draw Calls. First step in 2D game optimization.",
   code:"// Unity: Edit > Project Settings > Editor\n// Sprite Packer Mode: Always Enabled\n\n// Cocos Creator:\n// 在資源管理器建立 SpriteAtlas\n// 將多張圖片拖入圖集\n// 打包後同材質 sprite 只需 1 次 Draw Call"},
  {tag:"TypeScript",title_tw:"TypeScript 裝飾器與 Cocos",title_jp:"TypeScript デコレーターと Cocos",title_cn:"TypeScript 装饰器与 Cocos",title_ph:"TypeScript Decorators & Cocos",
   content_tw:"Cocos 3.x 用 @ccclass 和 @property 裝飾器來聲明元件和屬性，讓 Inspector 可以拖拉設定。",
   content_jp:"Cocos 3.xは@ccclassと@propertyデコレーターでコンポーネントとプロパティを宣言し、Inspectorでドラッグ設定可能に。",
   content_cn:"Cocos 3.x 用 @ccclass 和 @property 装饰器来声明组件和属性，让 Inspector 可以拖拉设定。",
   content_ph:"Cocos 3.x uses @ccclass and @property decorators to declare components and properties for Inspector drag-and-drop.",
   code:"@ccclass('Player')\nexport class Player extends Component {\n    @property(Number)\n    speed: number = 200;\n\n    @property(Node)\n    bulletSpawn: Node = null;\n\n    @property(Prefab)\n    bulletPrefab: Prefab = null;\n}"},
  {tag:"Unity",title_tw:"事件系統 Event System",title_jp:"イベントシステム",title_cn:"事件系统 Event System",title_ph:"Event System",
   content_tw:"用 C# 的 event/delegate 實現觀察者模式，解耦遊戲系統之間的依賴。比直接引用更靈活。",
   content_jp:"C#のevent/delegateでObserverパターンを実現し、システム間の依存を疎結合に。直接参照より柔軟。",
   content_cn:"用 C# 的 event/delegate 实现观察者模式，解耦游戏系统之间的依赖。比直接引用更灵活。",
   content_ph:"Use C# event/delegate to implement Observer pattern, decoupling game system dependencies.",
   code:"public static class GameEvents {\n    public static event Action<int> OnScoreChanged;\n    public static event Action OnGameOver;\n\n    public static void ScoreChanged(int score)\n        => OnScoreChanged?.Invoke(score);\n    public static void GameOver()\n        => OnGameOver?.Invoke();\n}\n// 訂閱: GameEvents.OnScoreChanged += UpdateUI;\n// 觸發: GameEvents.ScoreChanged(100);"},
  {tag:"Unity",title_tw:"狀態機 State Machine",title_jp:"ステートマシン",title_cn:"状态机 State Machine",title_ph:"State Machine",
   content_tw:"用狀態機管理遊戲狀態（選單、遊玩中、暫停、結束），讓邏輯清晰不混亂。",
   content_jp:"ステートマシンでゲーム状態（メニュー、プレイ中、一時停止、終了）を管理し、ロジックを整理。",
   content_cn:"用状态机管理游戏状态（菜单、游玩中、暂停、结束），让逻辑清晰不混乱。",
   content_ph:"Use state machines to manage game states (menu, playing, paused, game over) for clean logic flow.",
   code:"public enum GameState { Menu, Playing, Paused, GameOver }\n\npublic class GameFSM {\n    GameState current = GameState.Menu;\n\n    public void ChangeState(GameState next) {\n        ExitState(current);\n        current = next;\n        EnterState(next);\n    }\n}"},
  {tag:"Cocos",title_tw:"Tween 動畫系統",title_jp:"Tween アニメーション",title_cn:"Tween 动画系统",title_ph:"Tween Animation System",
   content_tw:"用 Cocos 的 tween 系統輕鬆實現動畫效果，無需動畫編輯器，程式碼簡潔直觀。",
   content_jp:"CocosのtweenシステムでアニメーションEditorなしに簡単にアニメーション実装。コードが簡潔で直感的。",
   content_cn:"用 Cocos 的 tween 系统轻松实现动画效果，无需动画编辑器，代码简洁直观。",
   content_ph:"Use Cocos tween system for easy animations without the animation editor - clean and intuitive code.",
   code:"tween(this.node)\n    .to(0.3, { scale: new Vec3(1.2, 1.2, 1) })\n    .to(0.2, { scale: new Vec3(1, 1, 1) })\n    .start();\n\n// 連鎖動畫\ntween(this.node)\n    .to(1, { position: new Vec3(200, 0, 0) })\n    .delay(0.5)\n    .to(1, { position: Vec3.ZERO })\n    .union()\n    .repeatForever()\n    .start();"},
  {tag:"Unity",title_tw:"Audio 音效管理",title_jp:"オーディオ管理",title_cn:"Audio 音效管理",title_ph:"Audio Management",
   content_tw:"集中管理音效播放，避免多個 AudioSource 混亂。用 Dictionary 快速查找音效。",
   content_jp:"音声再生を一元管理し、複数AudioSourceの混乱を防止。Dictionaryで高速音声検索。",
   content_cn:"集中管理音效播放，避免多个 AudioSource 混乱。用 Dictionary 快速查找音效。",
   content_ph:"Centralize audio playback to avoid AudioSource chaos. Use Dictionary for quick sound lookup.",
   code:"public class AudioManager : MonoBehaviour {\n    [System.Serializable]\n    public struct Sound {\n        public string name;\n        public AudioClip clip;\n    }\n    public Sound[] sounds;\n    Dictionary<string, AudioClip> dict;\n\n    void Awake() {\n        dict = new Dictionary<string, AudioClip>();\n        foreach (var s in sounds)\n            dict[s.name] = s.clip;\n    }\n\n    public void Play(string name) {\n        if (dict.TryGetValue(name, out var clip))\n            AudioSource.PlayClipAtPoint(clip, Camera.main.transform.position);\n    }\n}"},
  {tag:"C#",title_tw:"Delta Time 的正確用法",title_jp:"Delta Timeの正しい使い方",title_cn:"Delta Time 的正确用法",title_ph:"Correct Delta Time Usage",
   content_tw:"永遠用 Time.deltaTime 乘以移動速度，確保不同幀率下行為一致。不然高幀率的玩家會跑更快！",
   content_jp:"常にTime.deltaTimeを速度に掛けて、異なるフレームレートでも一貫した動作を保証。",
   content_cn:"永远用 Time.deltaTime 乘以移动速度，确保不同帧率下行为一致。不然高帧率的玩家会跑更快！",
   content_ph:"Always multiply movement speed by Time.deltaTime to ensure consistent behavior across frame rates.",
   code:"// 錯誤：幀率越高移動越快\ntransform.position += Vector3.right * speed;\n\n// 正確：與幀率無關\ntransform.position += Vector3.right * speed * Time.deltaTime;\n\n// 物理移動用 FixedUpdate\nvoid FixedUpdate() {\n    rb.MovePosition(rb.position + dir * speed * Time.fixedDeltaTime);\n}"},
  {tag:"Cocos",title_tw:"觸控輸入處理",title_jp:"タッチ入力処理",title_cn:"触控输入处理",title_ph:"Touch Input Handling",
   content_tw:"手機遊戲的觸控輸入要正確處理 TOUCH_START、TOUCH_MOVE、TOUCH_END 三個階段。",
   content_jp:"モバイルゲームのタッチ入力はTOUCH_START、TOUCH_MOVE、TOUCH_ENDの3段階を正しく処理する必要があります。",
   content_cn:"手机游戏的触控输入要正确处理 TOUCH_START、TOUCH_MOVE、TOUCH_END 三个阶段。",
   content_ph:"Mobile game touch input must handle TOUCH_START, TOUCH_MOVE, TOUCH_END stages correctly.",
   code:"onLoad() {\n    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);\n    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);\n    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);\n}\n\nonTouchMove(event: EventTouch) {\n    const delta = event.getUIDelta();\n    const pos = this.node.position;\n    this.node.setPosition(pos.x + delta.x, pos.y + delta.y);\n}"},
  {tag:"Design Pattern",title_tw:"工廠模式生成敵人",title_jp:"Factoryパターンで敵生成",title_cn:"工厂模式生成敌人",title_ph:"Factory Pattern for Enemies",
   content_tw:"用工廠模式集中管理敵人生成邏輯，方便擴展新敵人類型。",
   content_jp:"Factoryパターンで敵の生成ロジックを一元管理し、新しい敵タイプの拡張を容易に。",
   content_cn:"用工厂模式集中管理敌人生成逻辑，方便扩展新敌人类型。",
   content_ph:"Use Factory pattern to centralize enemy spawning logic, making it easy to add new enemy types.",
   code:"public static class EnemyFactory {\n    public static Enemy Create(EnemyType type, Vector3 pos) {\n        var prefab = Resources.Load<GameObject>($\"Enemies/{type}\");\n        var go = Object.Instantiate(prefab, pos, Quaternion.identity);\n        var enemy = go.GetComponent<Enemy>();\n        enemy.Init(GetConfig(type));\n        return enemy;\n    }\n}"},
  {tag:"Unity",title_tw:"Camera Follow 攝影機跟隨",title_jp:"カメラフォロー",title_cn:"Camera Follow 摄影机跟随",title_ph:"Camera Follow",
   content_tw:"用 Lerp 平滑跟隨玩家，加上 offset 和 damping 讓鏡頭移動更自然。",
   content_jp:"Lerpでプレイヤーをスムーズに追従。offsetとdampingで自然なカメラ移動を実現。",
   content_cn:"用 Lerp 平滑跟随玩家，加上 offset 和 damping 让镜头移动更自然。",
   content_ph:"Use Lerp for smooth camera follow with offset and damping for natural movement.",
   code:"public class CameraFollow : MonoBehaviour {\n    public Transform target;\n    public Vector3 offset = new Vector3(0, 5, -10);\n    public float smoothSpeed = 5f;\n\n    void LateUpdate() {\n        Vector3 desired = target.position + offset;\n        transform.position = Vector3.Lerp(\n            transform.position, desired,\n            smoothSpeed * Time.deltaTime\n        );\n        transform.LookAt(target);\n    }\n}"},
  {tag:"Performance",title_tw:"記憶體管理技巧",title_jp:"メモリ管理テクニック",title_cn:"内存管理技巧",title_ph:"Memory Management Tips",
   content_tw:"避免在 Update 中 new 物件、使用 StringBuilder 取代字串串接、及時釋放不用的資源。",
   content_jp:"Updateでのnewを避け、StringBuilderで文字列結合、不要なリソースを適時解放。",
   content_cn:"避免在 Update 中 new 对象、使用 StringBuilder 取代字符串拼接、及时释放不用的资源。",
   content_ph:"Avoid new objects in Update, use StringBuilder for string concatenation, release unused resources timely.",
   code:"// 錯誤：每幀產生垃圾\nvoid Update() {\n    string info = \"HP: \" + hp + \" / \" + maxHp; // GC!\n}\n\n// 正確：重用 StringBuilder\nStringBuilder sb = new StringBuilder();\nvoid Update() {\n    sb.Clear();\n    sb.Append(\"HP: \").Append(hp).Append(\" / \").Append(maxHp);\n    hpText.text = sb.ToString();\n}"},
  {tag:"Unity",title_tw:"Scene 場景管理",title_jp:"シーン管理",title_cn:"Scene 场景管理",title_ph:"Scene Management",
   content_tw:"用 SceneManager 搭配 async 載入場景，加上 Loading 畫面提升使用者體驗。",
   content_jp:"SceneManagerとasyncでシーンをロードし、Loading画面でUXを向上。",
   content_cn:"用 SceneManager 搭配 async 加载场景，加上 Loading 画面提升用户体验。",
   content_ph:"Use SceneManager with async loading and a Loading screen to improve UX.",
   code:"IEnumerator LoadSceneAsync(string sceneName) {\n    loadingScreen.SetActive(true);\n    var op = SceneManager.LoadSceneAsync(sceneName);\n    op.allowSceneActivation = false;\n\n    while (op.progress < 0.9f) {\n        progressBar.value = op.progress;\n        yield return null;\n    }\n    progressBar.value = 1f;\n    yield return new WaitForSeconds(0.5f);\n    op.allowSceneActivation = true;\n}"},
  {tag:"Cocos",title_tw:"螢幕適配 FIXED_HEIGHT",title_jp:"画面フィットFIXED_HEIGHT",title_cn:"屏幕适配 FIXED_HEIGHT",title_ph:"Screen Adaptation FIXED_HEIGHT",
   content_tw:"手機遊戲推薦用 FIXED_HEIGHT 模式，高度固定、寬度自動適應不同螢幕比例。",
   content_jp:"モバイルゲームではFIXED_HEIGHTモード推奨。高さ固定で幅が自動適応。",
   content_cn:"手机游戏推荐用 FIXED_HEIGHT 模式，高度固定、宽度自动适应不同屏幕比例。",
   content_ph:"FIXED_HEIGHT mode is recommended for mobile - height stays fixed, width adapts to screen ratio.",
   code:"// Canvas 元件設定：\n// Design Resolution: 720 x 1280\n// Fit Height: checked\n// Fit Width: unchecked\n\n// 程式碼動態適配：\nconst { width } = screen.windowSize;\nconst { height } = screen.windowSize;\nconst ratio = width / height;\nif (ratio > 0.5625) { // 16:9\n    // 較寬螢幕，調整左右邊距\n}"},
  {tag:"C#",title_tw:"JSON 存檔讀檔",title_jp:"JSONセーブ＆ロード",title_cn:"JSON 存档读档",title_ph:"JSON Save & Load",
   content_tw:"用 JsonUtility 把遊戲資料序列化為 JSON 儲存，簡單又實用的存檔方案。",
   content_jp:"JsonUtilityでゲームデータをJSONにシリアライズして保存。シンプルで実用的なセーブ方式。",
   content_cn:"用 JsonUtility 把游戏数据序列化为 JSON 存储，简单又实用的存档方案。",
   content_ph:"Use JsonUtility to serialize game data to JSON for a simple and practical save system.",
   code:"[System.Serializable]\npublic class SaveData {\n    public int level;\n    public int score;\n    public float[] position;\n}\n\npublic static void Save(SaveData data) {\n    string json = JsonUtility.ToJson(data);\n    File.WriteAllText(Application.persistentDataPath + \"/save.json\", json);\n}\n\npublic static SaveData Load() {\n    string path = Application.persistentDataPath + \"/save.json\";\n    if (!File.Exists(path)) return new SaveData();\n    string json = File.ReadAllText(path);\n    return JsonUtility.FromJson<SaveData>(json);\n}"},
  {tag:"Unity",title_tw:"Physics 2D 碰撞偵測",title_jp:"Physics 2D 衝突検出",title_cn:"Physics 2D 碰撞检测",title_ph:"Physics 2D Collision Detection",
   content_tw:"用 OnCollisionEnter2D 和 OnTriggerEnter2D 處理碰撞。Trigger 用於感應區域、Collision 用於物理碰撞。",
   content_jp:"OnCollisionEnter2DとOnTriggerEnter2Dで衝突処理。Triggerは感知エリア、Collisionは物理衝突に。",
   content_cn:"用 OnCollisionEnter2D 和 OnTriggerEnter2D 处理碰撞。Trigger 用于感应区域、Collision 用于物理碰撞。",
   content_ph:"Use OnCollisionEnter2D and OnTriggerEnter2D for collisions. Trigger for sensors, Collision for physics.",
   code:"void OnTriggerEnter2D(Collider2D other) {\n    if (other.CompareTag(\"Coin\")) {\n        score += 10;\n        Destroy(other.gameObject);\n    }\n}\n\nvoid OnCollisionEnter2D(Collision2D col) {\n    if (col.gameObject.CompareTag(\"Enemy\")) {\n        TakeDamage(col.gameObject.GetComponent<Enemy>().damage);\n    }\n}"},
  {tag:"Design Pattern",title_tw:"Component 元件模式",title_jp:"コンポーネントパターン",title_cn:"Component 组件模式",title_ph:"Component Pattern",
   content_tw:"Unity 和 Cocos 都使用元件模式。把功能拆成獨立元件組合在節點上，比繼承更靈活。",
   content_jp:"UnityもCocosもコンポーネントパターンを使用。機能を独立コンポーネントに分割しノードに組み合わせ。",
   content_cn:"Unity 和 Cocos 都使用组件模式。把功能拆成独立组件组合在节点上，比继承更灵活。",
   content_ph:"Both Unity and Cocos use Component pattern. Split features into independent components attached to nodes.",
   code:"// 不好：用繼承堆疊功能\nclass FlyingShootingEnemy : ShootingEnemy { }\n\n// 好：用元件組合功能\n[RequireComponent(typeof(Health))]\npublic class EnemyAI : MonoBehaviour { }\npublic class Shooter : MonoBehaviour { }\npublic class Flying : MonoBehaviour { }\n// Enemy 節點上掛 EnemyAI + Shooter + Flying"},
  {tag:"Performance",title_tw:"減少 Draw Call 的方法",title_jp:"Draw Call削減方法",title_cn:"减少 Draw Call 的方法",title_ph:"Ways to Reduce Draw Calls",
   content_tw:"除了圖集，還可以用動態合批、靜態合批、GPU Instancing 來減少渲染批次。",
   content_jp:"Atlas以外にも、動的バッチ、静的バッチ、GPU Instancingでレンダリングバッチを削減。",
   content_cn:"除了图集，还可以用动态合批、静态合批、GPU Instancing 来减少渲染批次。",
   content_ph:"Besides atlases, use dynamic batching, static batching, and GPU Instancing to reduce render batches.",
   code:"// Unity 設定：\n// Player Settings > Other Settings\n// ✅ Dynamic Batching\n// ✅ GPU Instancing (材質勾選)\n\n// 靜態物件勾選 Static\n// Profiler > Rendering 查看：\n//   Batches: 越少越好\n//   SetPass calls: 材質切換次數\n//   Triangles/Vertices: 頂點數"},
  {tag:"Cocos",title_tw:"資源預載入",title_jp:"リソースプリロード",title_cn:"资源预加载",title_ph:"Resource Preloading",
   content_tw:"用 resources.preload 提前載入資源，避免遊戲中載入時出現卡頓。",
   content_jp:"resources.preloadでリソースを事前にロードし、ゲーム中のロード遅延を防止。",
   content_cn:"用 resources.preload 提前加载资源，避免游戏中加载时出现卡顿。",
   content_ph:"Use resources.preload to load assets in advance, avoiding stutters during gameplay.",
   code:"// 預載入\nresources.preload('prefabs/enemy', Prefab, (err) => {\n    if (err) console.error(err);\n});\n\n// 使用時直接取得（已在記憶體中）\nresources.load('prefabs/enemy', Prefab, (err, prefab) => {\n    const enemy = instantiate(prefab);\n    this.node.addChild(enemy);\n});"},
  {tag:"Unity",title_tw:"粒子系統基礎",title_jp:"パーティクルシステム基礎",title_cn:"粒子系统基础",title_ph:"Particle System Basics",
   content_tw:"用 Particle System 製作爆炸、火焰、煙霧等特效。設定 Duration、Emission Rate、Shape 即可。",
   content_jp:"Particle Systemで爆発、炎、煙などのエフェクトを作成。Duration、Emission Rate、Shapeを設定するだけ。",
   content_cn:"用 Particle System 制作爆炸、火焰、烟雾等特效。设定 Duration、Emission Rate、Shape 即可。",
   content_ph:"Use Particle System for explosions, fire, smoke effects. Set Duration, Emission Rate, and Shape.",
   code:"// 程式碼控制粒子\nvar ps = GetComponent<ParticleSystem>();\nps.Play();\n\n// 爆炸特效\nvar main = ps.main;\nmain.duration = 0.5f;\nmain.startLifetime = 0.3f;\nmain.startSpeed = 10f;\nmain.startSize = 0.5f;\n\nvar emission = ps.emission;\nemission.rateOverTime = 0;\nemission.SetBursts(new[] {\n    new ParticleSystem.Burst(0f, 30)\n});"},
  {tag:"TypeScript",title_tw:"Async/Await 非同步模式",title_jp:"Async/Await 非同期パターン",title_cn:"Async/Await 异步模式",title_ph:"Async/Await Pattern",
   content_tw:"用 async/await 讓非同步程式碼像同步一樣易讀。載入資源、網路請求都適用。",
   content_jp:"async/awaitで非同期コードを同期のように読みやすく。リソースロード、ネットワーク通信に最適。",
   content_cn:"用 async/await 让异步代码像同步一样易读。加载资源、网络请求都适用。",
   content_ph:"Use async/await to make async code readable like sync. Great for loading and network requests.",
   code:"async loadLevel(levelId: number) {\n    this.showLoading();\n    try {\n        const config = await this.fetchLevelConfig(levelId);\n        const prefab = await this.loadPrefab(config.scene);\n        const scene = instantiate(prefab);\n        this.node.addChild(scene);\n    } catch (err) {\n        console.error('Failed to load level:', err);\n    } finally {\n        this.hideLoading();\n    }\n}"},
  {tag:"Unity",title_tw:"Input 輸入緩衝",title_jp:"入力バッファリング",title_cn:"Input 输入缓冲",title_ph:"Input Buffering",
   content_tw:"輸入緩衝讓玩家在動作完成前就能提前輸入下一個指令，讓操作感更流暢。",
   content_jp:"入力バッファリングでアクション完了前に次の入力を先行受付し、操作感を向上。",
   content_cn:"输入缓冲让玩家在动作完成前就能提前输入下一个指令，让操作感更流畅。",
   content_ph:"Input buffering lets players queue the next action before current one finishes, for smoother gameplay.",
   code:"float jumpBufferTime = 0.15f;\nfloat jumpBufferCounter;\n\nvoid Update() {\n    if (Input.GetButtonDown(\"Jump\"))\n        jumpBufferCounter = jumpBufferTime;\n    else\n        jumpBufferCounter -= Time.deltaTime;\n\n    if (jumpBufferCounter > 0 && isGrounded) {\n        Jump();\n        jumpBufferCounter = 0;\n    }\n}"},
  {tag:"Design Pattern",title_tw:"A* 尋路演算法基礎",title_jp:"A*パスファインディング基礎",title_cn:"A* 寻路算法基础",title_ph:"A* Pathfinding Basics",
   content_tw:"A* 是遊戲中最常用的尋路演算法。用 f = g + h 評估每個節點，找到最短路徑。",
   content_jp:"A*はゲームで最も使われる経路探索アルゴリズム。f = g + hで各ノードを評価し最短経路を発見。",
   content_cn:"A* 是游戏中最常用的寻路算法。用 f = g + h 评估每个节点，找到最短路径。",
   content_ph:"A* is the most common pathfinding algorithm in games. Uses f = g + h to evaluate nodes for shortest path.",
   code:"// A* 核心概念：\n// g = 起點到當前節點的實際代價\n// h = 當前節點到終點的預估代價（啟發式）\n// f = g + h\n\n// 常用啟發式函數（2D格子）：\n// Manhattan: |dx| + |dy|\n// Euclidean: sqrt(dx² + dy²)\n\n// Open List: 待評估的節點\n// Closed List: 已評估的節點\n// 每次取 f 值最小的節點展開"},
  {tag:"Unity",title_tw:"遊戲迴圈架構",title_jp:"ゲームループアーキテクチャ",title_cn:"游戏循环架构",title_ph:"Game Loop Architecture",
   content_tw:"理解 Unity 的執行順序：FixedUpdate（物理）→ Update（邏輯）→ LateUpdate（攝影機）。",
   content_jp:"Unityの実行順序：FixedUpdate（物理）→ Update（ロジック）→ LateUpdate（カメラ）を理解する。",
   content_cn:"理解 Unity 的执行顺序：FixedUpdate（物理）→ Update（逻辑）→ LateUpdate（摄影机）。",
   content_ph:"Understand Unity's execution order: FixedUpdate (physics) → Update (logic) → LateUpdate (camera).",
   code:"// Unity 執行順序：\n// Awake() → OnEnable() → Start()\n// ──── 每幀循環 ────\n// FixedUpdate()  ← 固定時間步，物理計算\n// Update()       ← 每幀一次，遊戲邏輯\n// LateUpdate()   ← Update 後，攝影機跟隨\n// ──── 渲染 ────\n// OnGUI()        ← UI 繪製（Legacy）\n// OnDisable() → OnDestroy()"},
  {tag:"Cocos",title_tw:"Schedule 定時器",title_jp:"Scheduleタイマー",title_cn:"Schedule 定时器",title_ph:"Schedule Timer",
   content_tw:"用 schedule 替代 setInterval，Cocos 的定時器會自動隨元件生命週期管理。",
   content_jp:"setIntervalの代わりにscheduleを使用。Cocosのタイマーはコンポーネントのライフサイクルに自動連動。",
   content_cn:"用 schedule 替代 setInterval，Cocos 的定时器会自动随组件生命周期管理。",
   content_ph:"Use schedule instead of setInterval. Cocos timers auto-manage with component lifecycle.",
   code:"// 每 2 秒生成敵人\nthis.schedule(() => {\n    this.spawnEnemy();\n}, 2);\n\n// 延遲 1 秒後執行一次\nthis.scheduleOnce(() => {\n    this.showBossWarning();\n}, 1);\n\n// 停止所有定時器\nthis.unscheduleAllCallbacks();"},
  {tag:"Performance",title_tw:"Shader 基礎入門",title_jp:"Shader基礎入門",title_cn:"Shader 基础入门",title_ph:"Shader Basics",
   content_tw:"Shader 決定物件的渲染方式。學會基本的 Vertex/Fragment shader 能大幅提升遊戲視覺表現。",
   content_jp:"Shaderはオブジェクトのレンダリング方法を決定。基本的なVertex/Fragment shaderを学べば視覚表現が大幅向上。",
   content_cn:"Shader 决定物件的渲染方式。学会基本的 Vertex/Fragment shader 能大幅提升游戏视觉表现。",
   content_ph:"Shaders determine how objects render. Learning basic Vertex/Fragment shaders greatly improves visual quality.",
   code:"// Unity ShaderLab 基本結構：\nShader \"Custom/SimpleColor\" {\n    Properties {\n        _Color (\"Color\", Color) = (1,1,1,1)\n    }\n    SubShader {\n        Pass {\n            CGPROGRAM\n            #pragma vertex vert\n            #pragma fragment frag\n            fixed4 _Color;\n            float4 vert(float4 v : POSITION) : SV_POSITION {\n                return UnityObjectToClipPos(v);\n            }\n            fixed4 frag() : SV_Target {\n                return _Color;\n            }\n            ENDCG\n        }\n    }\n}"},
  {tag:"AI",title_tw:"AI 導航網格 NavMesh",title_jp:"AIナビメッシュNavMesh",title_cn:"AI 导航网格 NavMesh",title_ph:"AI Navigation NavMesh",
   content_tw:"Unity NavMesh 讓 NPC 自動尋路避障。Bake 一次導航網格，Agent 就能在複雜地形中移動。",
   content_jp:"Unity NavMeshでNPCが自動的に障害物を回避して経路を見つけます。一度Bakeすれば複雑な地形でも移動可能。",
   content_cn:"Unity NavMesh 让 NPC 自动寻路避障。Bake 一次导航网格，Agent 就能在复杂地形中移动。",
   content_ph:"Unity NavMesh enables NPC auto-pathfinding. Bake the mesh once and agents navigate complex terrain.",
   code:"// 1. Window > AI > Navigation > Bake\n// 2. 給 NPC 加 NavMeshAgent 元件\n\npublic class EnemyAI : MonoBehaviour {\n    NavMeshAgent agent;\n    Transform player;\n\n    void Start() {\n        agent = GetComponent<NavMeshAgent>();\n        player = GameObject.FindWithTag(\"Player\").transform;\n    }\n\n    void Update() {\n        agent.SetDestination(player.position);\n    }\n}"},
  {tag:"WebGPU",title_tw:"WebGPU Compute Shader 入門",title_jp:"WebGPU Compute Shader入門",title_cn:"WebGPU Compute Shader 入门",title_ph:"WebGPU Compute Shader Intro",
   content_tw:"WebGPU 的 Compute Shader 可以在瀏覽器中利用 GPU 做平行運算，適合粒子系統和物理模擬。",
   content_jp:"WebGPUのCompute ShaderでブラウザからGPU並列計算が可能。パーティクルや物理シミュレーションに最適。",
   content_cn:"WebGPU 的 Compute Shader 可以在浏览器中利用 GPU 做并行运算，适合粒子系统和物理模拟。",
   content_ph:"WebGPU Compute Shaders enable GPU parallel computing in browsers - great for particles and physics.",
   code:"// WebGPU Compute Shader 基本架構\nconst shaderCode = `\n@group(0) @binding(0)\nvar<storage, read_write> data: array<f32>;\n\n@compute @workgroup_size(64)\nfn main(@builtin(global_invocation_id) id: vec3u) {\n    data[id.x] = data[id.x] * 2.0;\n}\n`;\n// 可在瀏覽器中跑上萬個粒子運算"},
  {tag:"Rust",title_tw:"Rust + WebAssembly 遊戲開發",title_jp:"Rust + WebAssembly ゲーム開発",title_cn:"Rust + WebAssembly 游戏开发",title_ph:"Rust + WebAssembly Game Dev",
   content_tw:"Rust 編譯成 WebAssembly 後效能接近原生，非常適合需要高效能的瀏覽器遊戲引擎核心。",
   content_jp:"RustをWebAssemblyにコンパイルするとネイティブに近い性能が得られ、ブラウザゲームエンジンのコアに最適。",
   content_cn:"Rust 编译成 WebAssembly 后性能接近原生，非常适合需要高性能的浏览器游戏引擎核心。",
   content_ph:"Rust compiled to WebAssembly achieves near-native performance, ideal for browser game engine cores.",
   code:"// Rust → Wasm 遊戲迴圈\nuse wasm_bindgen::prelude::*;\n\n#[wasm_bindgen]\npub struct Game {\n    score: u32,\n    entities: Vec<Entity>,\n}\n\n#[wasm_bindgen]\nimpl Game {\n    pub fn new() -> Game {\n        Game { score: 0, entities: vec![] }\n    }\n    pub fn update(&mut self, dt: f64) {\n        for e in &mut self.entities {\n            e.pos.x += e.vel.x * dt as f32;\n        }\n    }\n}"},
  {tag:"Unity",title_tw:"Addressables 資源管理",title_jp:"Addressables リソース管理",title_cn:"Addressables 资源管理",title_ph:"Addressables Asset Management",
   content_tw:"Addressables 比 Resources 更強大：支援遠端載入、自動引用計數、非同步 API。大型專案必備。",
   content_jp:"AddressablesはResourcesより強力：リモートロード、自動参照カウント、非同期APIをサポート。大規模プロジェクト必須。",
   content_cn:"Addressables 比 Resources 更强大：支持远程加载、自动引用计数、异步 API。大型项目必备。",
   content_ph:"Addressables is more powerful than Resources: remote loading, auto ref counting, async API. Essential for large projects.",
   code:"// Addressables 非同步載入\nasync void LoadEnemy() {\n    var handle = Addressables.LoadAssetAsync<GameObject>(\"enemy_01\");\n    await handle.Task;\n    var enemy = Instantiate(handle.Result);\n}\n\n// 釋放資源\nAddressables.Release(handle);\n\n// 遠端更新資源（不需要重新發布 App）\nvar checkHandle = Addressables.CheckForCatalogUpdates();\nawait checkHandle.Task;"},
  {tag:"ECS",title_tw:"Unity DOTS 入門：Entities 基礎",title_jp:"Unity DOTS入門：Entities基礎",title_cn:"Unity DOTS 入门：Entities 基础",title_ph:"Unity DOTS Intro: Entities Basics",
   content_tw:"DOTS 用 Entity + Component + System 取代 MonoBehaviour，資料導向帶來數十倍效能提升。",
   content_jp:"DOTSはEntity + Component + SystemでMonoBehaviourを置き換え、データ指向で数十倍の性能向上。",
   content_cn:"DOTS 用 Entity + Component + System 取代 MonoBehaviour，数据导向带来数十倍性能提升。",
   content_ph:"DOTS replaces MonoBehaviour with Entity + Component + System, giving 10-50x performance gains.",
   code:"// Component（純資料）\npublic struct MoveSpeed : IComponentData {\n    public float Value;\n}\n\n// System（邏輯）\npublic partial struct MoveSystem : ISystem {\n    public void OnUpdate(ref SystemState state) {\n        float dt = SystemAPI.Time.DeltaTime;\n        foreach (var (transform, speed) in\n            SystemAPI.Query<RefRW<LocalTransform>, RefRO<MoveSpeed>>()) {\n            transform.ValueRW.Position.x += speed.ValueRO.Value * dt;\n        }\n    }\n}"},
  {tag:"Cocos",title_tw:"Cocos Creator 3D 基礎",title_jp:"Cocos Creator 3D 基礎",title_cn:"Cocos Creator 3D 基础",title_ph:"Cocos Creator 3D Basics",
   content_tw:"Cocos Creator 3.x 全面支援 3D 開發：PBR 材質、骨骼動畫、3D 物理引擎一應俱全。",
   content_jp:"Cocos Creator 3.xは3D開発を完全サポート：PBRマテリアル、スケルタルアニメーション、3D物理エンジン完備。",
   content_cn:"Cocos Creator 3.x 全面支持 3D 开发：PBR 材质、骨骼动画、3D 物理引擎一应俱全。",
   content_ph:"Cocos Creator 3.x fully supports 3D: PBR materials, skeletal animation, 3D physics engine.",
   code:"// 3D 物理碰撞\n@ccclass('Player3D')\nexport class Player3D extends Component {\n    start() {\n        const collider = this.getComponent(BoxCollider);\n        collider?.on('onCollisionEnter', this.onCollision, this);\n    }\n\n    onCollision(event: ICollisionEvent) {\n        const other = event.otherCollider.node;\n        if (other.name === 'Coin') {\n            other.destroy();\n            this.score++;\n        }\n    }\n}"},
  {tag:"Design Pattern",title_tw:"命令模式 Command Pattern",title_jp:"コマンドパターン",title_cn:"命令模式 Command Pattern",title_ph:"Command Pattern",
   content_tw:"把玩家操作封裝成 Command 物件，就能輕鬆實現 Undo/Redo、操作重播、AI 指令等功能。",
   content_jp:"プレイヤー操作をCommandオブジェクトに封装すると、Undo/Redo、リプレイ、AI指令が簡単に実現可能。",
   content_cn:"把玩家操作封装成 Command 对象，就能轻松实现 Undo/Redo、操作重播、AI 指令等功能。",
   content_ph:"Encapsulate player actions as Command objects for easy Undo/Redo, replay, and AI commands.",
   code:"public interface ICommand {\n    void Execute();\n    void Undo();\n}\n\npublic class MoveCommand : ICommand {\n    Unit unit; Vector3 from, to;\n    public MoveCommand(Unit u, Vector3 target) {\n        unit = u; from = u.Position; to = target;\n    }\n    public void Execute() => unit.MoveTo(to);\n    public void Undo() => unit.MoveTo(from);\n}\n\n// 操作歷史\nStack<ICommand> history = new();\nvar cmd = new MoveCommand(unit, target);\ncmd.Execute();\nhistory.Push(cmd);"},
  {tag:"Performance",title_tw:"LOD 層級細節系統",title_jp:"LODレベルオブディテール",title_cn:"LOD 层级细节系统",title_ph:"LOD Level of Detail",
   content_tw:"遠處物件用低面數模型，近處用高面數。LOD 讓你在視覺品質和效能間取得平衡。",
   content_jp:"遠くのオブジェクトは低ポリモデル、近くは高ポリ。LODで視覚品質とパフォーマンスのバランスを取得。",
   content_cn:"远处物件用低面数模型，近处用高面数。LOD 让你在视觉品质和性能间取得平衡。",
   content_ph:"Far objects use low-poly models, near ones use high-poly. LOD balances visual quality and performance.",
   code:"// Unity LOD Group 設定：\n// LOD 0 (近): 100% 三角面\n// LOD 1 (中): 50% 三角面\n// LOD 2 (遠): 25% 三角面\n// Culled: 完全隱藏\n\n// 程式碼控制：\nvar lod = GetComponent<LODGroup>();\nlod.ForceLOD(0); // 強制最高品質\n\n// 最佳實踐：\n// - 手遊建議 3 級 LOD\n// - 草和樹木必用 LOD\n// - 配合 Occlusion Culling 效果更好"},
  {tag:"TypeScript",title_tw:"泛型 Generics 在遊戲中的應用",title_jp:"ゲームでのGenerics活用",title_cn:"泛型 Generics 在游戏中的应用",title_ph:"Generics in Game Development",
   content_tw:"TypeScript 泛型讓你寫出型別安全又可重用的程式碼。物件池、事件系統、資料容器都能用。",
   content_jp:"TypeScript GenericsでType Safeかつ再利用可能なコードを実現。Object Pool、イベントシステム、データコンテナに。",
   content_cn:"TypeScript 泛型让你写出类型安全又可重用的代码。对象池、事件系统、数据容器都能用。",
   content_ph:"TypeScript Generics let you write type-safe, reusable code for object pools, events, and data containers.",
   code:"// 泛型物件池\nclass Pool<T extends Component> {\n    private items: T[] = [];\n    constructor(private prefab: Prefab, private type: Constructor<T>) {}\n\n    get(): T {\n        if (this.items.length > 0) {\n            const item = this.items.pop()!;\n            item.node.active = true;\n            return item;\n        }\n        const node = instantiate(this.prefab);\n        return node.getComponent(this.type)!;\n    }\n\n    release(item: T) {\n        item.node.active = false;\n        this.items.push(item);\n    }\n}"},
  {tag:"Unity",title_tw:"ScriptableObject 資料驅動設計",title_jp:"ScriptableObject データ駆動設計",title_cn:"ScriptableObject 数据驱动设计",title_ph:"ScriptableObject Data-Driven Design",
   content_tw:"用 ScriptableObject 把遊戲數據（武器、道具、敵人屬性）從程式碼中分離，讓設計師也能調整平衡。",
   content_jp:"ScriptableObjectでゲームデータ（武器、アイテム、敵属性）をコードから分離し、デザイナーもバランス調整可能に。",
   content_cn:"用 ScriptableObject 把游戏数据（武器、道具、敌人属性）从代码中分离，让策划也能调整平衡。",
   content_ph:"Use ScriptableObject to separate game data (weapons, items, enemy stats) from code for designer-friendly tuning.",
   code:"[CreateAssetMenu(menuName = \"Game/Weapon Data\")]\npublic class WeaponData : ScriptableObject {\n    public string weaponName;\n    public int damage;\n    public float attackSpeed;\n    public float range;\n    public GameObject projectilePrefab;\n    public AudioClip attackSound;\n}\n\n// 使用：\npublic class Weapon : MonoBehaviour {\n    [SerializeField] WeaponData data;\n    void Attack() {\n        DealDamage(data.damage);\n        PlaySound(data.attackSound);\n    }\n}"}
]

// ── DAILY FUNCTIONS ─────────────────────────────────────────────
// Day changes at 11:00 JST (UTC+9) = 02:00 UTC
function getJSTDay(offset) {
  const now = new Date()
  // Convert to JST milliseconds, then subtract 11 hours so the "day" starts at 11:00 JST
  const jstMs = now.getTime() + (9 * 60 * 60 * 1000)
  const adjusted = jstMs - (11 * 60 * 60 * 1000)
  const jstDate = new Date(adjusted)
  jstDate.setDate(jstDate.getDate() + offset)
  return jstDate
}

function getDailyIndex(offset) {
  const d = getJSTDay(offset)
  const start = new Date(d.getFullYear(), 0, 0)
  const diff = d - start
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return dayOfYear % DAILY_TUTORIALS.length
}

function renderDaily() {
  const idx = getDailyIndex(dailyOffset)
  const t = DAILY_TUTORIALS[idx]
  const L = LANG[lang]

  const now = getJSTDay(dailyOffset)
  const dateStr = {
    tw: `${now.getFullYear()} 年 ${now.getMonth()+1} 月 ${now.getDate()} 日`,
    jp: `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`,
    cn: `${now.getFullYear()} 年 ${now.getMonth()+1} 月 ${now.getDate()} 日`,
    ph: `${now.toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'})}`
  }[lang]

  document.getElementById('daily-date').textContent = dateStr

  const title = t['title_'+lang] || t.title_tw
  const content = t['content_'+lang] || t.content_tw
  const codeBlock = t.code ? `<pre>${t.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>` : ''

  document.getElementById('daily-content').innerHTML = `
    <div class="daily-card">
      <span class="daily-tag">${t.tag}</span>
      <h3>${title}</h3>
      <p>${content}</p>
      ${codeBlock}
    </div>
  `
}

function changeDay(dir) {
  if (dir === 0) dailyOffset = 0
  else dailyOffset += dir
  renderDaily()
}

function captureDailyEmail() {
  const email = document.getElementById('daily-email').value
  if (!email) {
    showToast({tw:'請輸入 Email',jp:'Emailを入力してください',cn:'请输入 Email',ph:'Please enter Email'}[lang])
    return
  }
  window.location.href = `mailto:a8398433@gmail.com?subject=${encodeURIComponent('[Frank Dev] 每日教學訂閱')}&body=${encodeURIComponent('訂閱 Email: '+email)}`
  showToast({tw:'感謝訂閱！每日教學將送至你的信箱',jp:'ご登録ありがとうございます！',cn:'感谢订阅！每日教学将送至你的信箱',ph:'Thanks! Daily tips will be sent to your inbox'}[lang])
}

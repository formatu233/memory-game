# 记忆游戏 - 使用指南

## 🚀 快速开始

### 方式一：使用启动脚本（推荐）

```bash
cd memory-game
./start.sh
```

按照提示选择操作即可。

### 方式二：手动命令

#### 1. 安装依赖

```bash
npm install
```

**注意**: 如果安装速度慢，可以使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

#### 2. 开发模式

```bash
npm run dev
```

浏览器会自动打开 http://localhost:3000

#### 3. 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 📱 打包成移动端App

### Android (推荐初学者)

1. **安装 Android Studio**
   - 下载: https://developer.android.com/studio
   - 安装后需要配置 Android SDK

2. **初始化 Android 项目（首次）**

```bash
npm install @capacitor/android
npx cap add android
```

3. **构建并同步**

```bash
npm run mobile
```

4. **打开 Android Studio**

```bash
npm run android
```

在 Android Studio 中：
- 点击 Run 按钮 (绿色三角形) 运行到模拟器
- 或 Build > Build Bundle(s) / APK(s) > Build APK(s) 生成 APK

### iOS (需要 macOS 和 Xcode)

1. **安装 Xcode**
   - 从 App Store 下载 Xcode

2. **初始化 iOS 项目（首次）**

```bash
npm install @capacitor/ios
npx cap add ios
```

3. **构建并同步**

```bash
npm run mobile
```

4. **打开 Xcode**

```bash
npm run ios
```

在 Xcode 中：
- 选择模拟器或真机
- 点击 Run 按钮

## 🎮 游戏特性

- ✅ 16 张卡片（8 对）
- 🎯 流畅的翻转动画
- ⏱️ 实时计时
- 📊 步数统计
- 🏆 智能计分系统
- 📱 完美适配手机屏幕
- 🔄 一键重新开始

## 🎨 自定义游戏

### 修改卡片数量

编辑 `src/components/MemoryGame.tsx`:

```typescript
// 修改这里的数组
const EMOJIS = ['🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸', '🎹'];

// 添加更多emoji可以增加卡片数量
// 例如：
const EMOJIS = ['🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸', '🎹', '🎺', '🎻'];
// 会变成 20 张卡片（10 对）
```

### 修改颜色

编辑 `tailwind.config.js`:

```javascript
colors: {
  primary: '#4ecdc4',      // 主要颜色（卡片背景）
  secondary: '#f5576c',    // 次要颜色（按钮、完成图标）
  dark: '#1a1a2e',         // 深色背景
  darker: '#0f0f23',       // 更深的背景
  accent: '#44a08d',       // 强调色
},
```

### 修改游戏难度

编辑 `src/components/MemoryGame.tsx` 中的计分逻辑：

```typescript
const calculateScore = () => {
  const baseScore = 1000;           // 基础分
  const timePenalty = gameState.time * 5;   // 时间惩罚（每秒扣5分）
  const movesPenalty = gameState.moves * 10;  // 步数惩罚（每步扣10分）
  return Math.max(0, baseScore - timePenalty - movesPenalty);
};
```

## 📸 预览效果

游戏包含以下界面：
- 标题和说明
- 实时统计面板（步数、配对进度、时间）
- 4x4 卡片网格
- 重新开始按钮
- 游戏完成弹窗（显示得分、步数、用时）

## 🔧 常见问题

### Q: npm install 失败怎么办？

A: 尝试以下方法：
1. 清理缓存: `npm cache clean --force`
2. 删除 node_modules 和 package-lock.json，重新安装
3. 使用国内镜像: `npm config set registry https://registry.npmmirror.com`

### Q: Android Studio 打开项目后报错？

A: 确保：
1. Android SDK 已安装
2. Java JDK 已安装（推荐 JDK 11 或 17）
3. ANDROID_HOME 环境变量已设置

### Q: 卡片翻转动画不流畅？

A: 检查设备性能，降低动画数量或简化样式。

## 📝 技术说明

### 构建流程

```
React 组件 
  ↓ (Vite 构建)
dist/ 目录
  ↓ (Capacitor 同步)
Android/iOS 项目
  ↓ (Android Studio/Xcode)
APK/IPA 安装包
```

### 核心技术

- **Vite**: 快速的构建工具，提供热模块替换
- **Capacitor**: 将 Web 应用转换为原生移动应用
- **Tailwind CSS**: 实用优先的 CSS 框架
- **React Hooks**: 管理游戏状态和副作用

## 🎯 下一步

1. ✅ 安装依赖并运行开发模式
2. ✅ 在浏览器中测试游戏
3. ✅ 自定义游戏（修改卡片、颜色、难度）
4. ✅ 打包成 Android/iOS App
5. ✅ 在真机上测试

祝你玩得开心！🎉
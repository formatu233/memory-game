# 🧠 记忆游戏 - 移动端App

一个精美的记忆卡片配对游戏，使用 React + TypeScript + Capacitor 开发，可打包成 Android 和 iOS 应用。

## 🎮 游戏玩法

- 翻开卡片寻找相同的配对
- 记住卡片的位置，用最少的步数完成配对
- 计时开始后，尽快完成所有配对获得高分

## 📦 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式系统
- **Vite** - 构建工具
- **Capacitor** - 移动端打包

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式（浏览器）

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

## 📱 打包成移动端App

### Android

1. 添加 Android 平台（首次）：
   ```bash
   npm install @capacitor/android
   npx cap add android
   ```

2. 构建并同步：
   ```bash
   npm run mobile
   ```

3. 打开 Android Studio：
   ```bash
   npm run android
   ```

4. 在 Android Studio 中构建 APK 或直接运行到设备

### iOS

1. 添加 iOS 平台（首次，需要 macOS）：
   ```bash
   npm install @capacitor/ios
   npx cap add ios
   ```

2. 构建并同步：
   ```bash
   npm run mobile
   ```

3. 打开 Xcode：
   ```bash
   npm run ios
   ```

4. 在 Xcode 中构建 IPA 或直接运行到设备

## 🎨 游戏特性

- ✨ 精美的渐变UI设计
- 🎯 流畅的翻转动画
- ⏱️ 实时计时和步数统计
- 🏆 分数计算系统
- 📱 响应式设计，完美适配手机
- 🔄 一键重新开始
- 💾 自动保存最高分（通过本地存储）

## 📂 项目结构

```
memory-game/
├── src/
│   ├── components/
│   │   ├── Card.tsx          # 卡片组件
│   │   ├── GameStats.tsx     # 游戏统计
│   │   ├── GameOver.tsx      # 游戏结束弹窗
│   │   └── MemoryGame.tsx    # 主游戏组件
│   ├── types.ts              # TypeScript 类型定义
│   ├── main.tsx              # 入口文件
│   ├── index.css             # 全局样式
│   └── vite-env.d.ts         # Vite 类型声明
├── public/                   # 静态资源
├── capacitor.config.ts       # Capacitor 配置
├── tailwind.config.js        # Tailwind 配置
├── vite.config.ts            # Vite 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 项目配置
```

## 🎨 自定义

### 修改卡片数量

编辑 `src/components/MemoryGame.tsx` 中的 `EMOJIS` 数组：

```typescript
const EMOJIS = ['🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸', '🎹'];
```

### 修改颜色主题

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
colors: {
  primary: '#4ecdc4',
  secondary: '#f5576c',
  // ...
}
```

## 📋 系统要求

- Node.js 16+
- npm 或 yarn
- Android Studio (Android 打包)
- Xcode (iOS 打包，仅 macOS)

## 📝 许可证

MIT License
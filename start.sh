#!/bin/bash

# 记忆游戏 - 快速启动脚本

echo "🧠 记忆游戏 - Mobile App"
echo "============================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未安装 Node.js"
    echo "请访问 https://nodejs.org/ 下载安装"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo ""

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
    echo ""
fi

# 显示菜单
echo "请选择操作:"
echo "1. 开发模式 (浏览器)"
echo "2. 构建生产版本"
echo "3. 构建并同步到 Android"
echo "4. 构建并同步到 iOS"
echo "5. 退出"
echo ""

read -p "请输入选项 (1-5): " choice

case $choice in
    1)
        echo "🚀 启动开发服务器..."
        npm run dev
        ;;
    2)
        echo "🔨 构建生产版本..."
        npm run build
        ;;
    3)
        echo "📱 构建并同步到 Android..."
        npm run mobile
        echo ""
        echo "✅ 构建完成! 运行以下命令打开 Android Studio:"
        echo "   npm run android"
        ;;
    4)
        echo "📱 构建并同步到 iOS..."
        npm run mobile
        echo ""
        echo "✅ 构建完成! 运行以下命令打开 Xcode:"
        echo "   npm run ios"
        ;;
    5)
        echo "👋 再见!"
        exit 0
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac
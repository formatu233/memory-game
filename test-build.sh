#!/bin/bash

echo "🧠 记忆游戏 - 构建测试"
echo "========================="
echo ""

# 检查 dist 目录
if [ -d "dist" ]; then
    echo "✅ dist 目录存在"
    echo "   - dist/index.html: $(ls -lh dist/index.html | awk '{print $5}')"
    echo "   - dist/assets/: $(ls dist/assets/ | wc -l) 个文件"
    echo ""
    
    # 检查关键文件
    echo "📦 构建产物:"
    ls -lh dist/assets/
    echo ""
    
    echo "✅ 构建成功！"
    echo ""
    echo "🎮 可以使用以下方式运行:"
    echo "   - 开发模式: npm run dev"
    echo "   - 预览构建: npm run preview"
    echo "   - 移动端打包: npm run mobile"
else
    echo "❌ dist 目录不存在，构建失败"
    exit 1
fi

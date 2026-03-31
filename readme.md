# LingoFlowAI

LingoFlowAI 目前是一个以高保真原型为主的产品仓库，覆盖了学习端和管理端的核心界面，包括：

- 学习首页与每日进度
- AI 练习生成
- 场景化口语对话
- 目标与优先级管理
- 学习洞察与成长反馈
- 管理后台的用户配额、LLM 监控、系统监控与收入视图

仓库现状还没有正式应用代码，因此第一步不是直接堆页面，而是先把产品能力、系统边界和开发顺序定义清楚。

当前推荐路线已经调整为：

- 学习端：`mobile-first` 的跨平台 App（**首版完整闭环以 iOS / Android 为主**）
- 技术方向：Expo + React Native
- 用户侧 Web：**营销/落地页**在对外获客或上架推广前应具备；**浏览器内完整学习（Learner Web）**不阻塞 MVP，详见实现方案中的阶段与边界
- 管理端：单独的 Web Admin Console（运营与监控，与学习端 Web 目标不同）

## 关键文档

- [实现方案](./docs/implementation-plan.md)（含 **设计与原型来源**：前台须对齐 `stitch_insights` 中的 `DESIGN.md` 与共享 token）
- [Flow Engineering](./docs/flow-engineering.md)
- [Skills Integration Playbook](./docs/skills/README.md)
- [设计系统](./stitch_insights/lingoflow_ai/DESIGN.md)

## 当前建议

建议先按 MVP 路线实现用户端核心闭环：

1. 登录与学习目标初始化
2. Mobile 首页 Dashboard
3. AI 练习生成器
4. 场景化练习与反馈
5. Goals / Insights
6. Web 管理端基础监控
7. （随上架/投放计划）最小营销落地页与合规页

这样可以先验证「生成练习 -> 完成练习 -> 得到反馈 -> 更新成长数据」这条主链路，再逐步补齐后台运营能力。

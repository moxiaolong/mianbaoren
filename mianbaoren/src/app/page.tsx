import React from 'react';

// 定义链接数据结构
interface LinkItem {
    title: string;
    url: string;
    rating: number;
    desc: string;
}

// 星级评分组件
const StarRating = ({rating}: { rating: number }) => {
    // 生成5颗星星，根据评分显示金色或灰色
    return (
        <div className="flex items-center mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`text-lg ${
                        star <= rating
                            ? 'text-amber-400' // 金色星星
                            : 'text-gray-300'  // 灰色星星
                    }`}
                >
          ★
        </span>
            ))}
        </div>
    );
};

export default function Home() {
    // 链接数据，包含评分和描述
    const links: LinkItem[] = [
        {
            title: "SoulStation 荣格八维测试",
            url: "https://soulstation.club",
            rating: 5,
            desc: "排序法的免费荣格八维测试，型式新颖，题目也很新。虽然只有70道题，但有280个选项。题目通俗易懂，从非理性场景到理性场景循序渐进，可以避免过早的进入理性状态远离对潜意识的考察，推荐。"
        },
        {
            title: "MoonType 荣格八维测试",
            url: "https://moontype.fun/",
            rating: 4,
            desc: "MoonType的作者对荣格功能的理解很好，对功能的理解比Totypes更贴近原著。免费，200题，五度选择，一些难以考察的功能相关的问题会略显重复。"
        },

        {
            title: "Totypes 荣格八维测试",
            url: "https://totypes.com/xinggeceshi.php",
            rating: 3,
            desc: "比荣格斯更接八维理论，但还是和原著理论有较大差距，给我的感觉是内外倾两端迫选+二分法迫选。测试和初步报告免费，深度报告收费。需要登录才能测试。",
        },
        {
            title: "荣格斯 荣格心里测试",
            url: "https://www.jungus.cn/",
            rating: 2,
            desc: "荣格八维圈传播最广的测试，但其实和荣格八维理论有较大出入，题目较老，疑似暂停维护，比起类型论更像是特质论。",
        },
        {
            title: "才储 荣格认知功能测试",
            url: "https://www.apesk.com/jungtest/",
            rating: 1,
            desc: "才储主要面向企业，对免费测试不太上心，出的较早，但认可度一般。",
        },
        {
            title: "16personalities NERIS测试",
            url: "https://www.16personalities.com/",
            rating: 1,
            desc: "传播非常广泛，小人形象深入人心。经常被误认为是MBTI官网，但题目和解析都是特质论，披着MBTI字母的外衣，但却是大五人格。",
        },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900 flex items-center justify-center p-4 font-sans">
            {/* 卡片容器 */}
            <div
                className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 transform transition-all duration-500 hover:shadow-2xl">
                {/* 标题部分 */}
                <div className="text-center mb-10">
                    <h2 className="text-lg md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-3 tracking-tight">
                        mianbaoren.pages.dev
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-3 tracking-tight">
                        面包人MBTI导航
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        整理免费MBTI、免费荣格八维资源
                    </p>
                </div>

                {/* 图片部分 */}
                <div className="flex justify-center flex-col items-center w-full mb-10">
                    <img
                        src="/mianbaoren.png"
                        alt="一车面包人"
                        className="w-40 h-auto object-contain rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
                    />
                    <span className="text-xs mt-2 text-gray-500 ">
                    一车面包人
                </span>
                </div>


                {/* 链接列表 */}
                <div className="space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.title}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full flex flex-col items-start bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-indigo-100 dark:border-gray-700 group"
                        >
                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center">

                                    {link.rating >=4 && <span

                                        className={`text-lg pr-1 ${
                                            'text-amber-400' // 金色星星
                                        }`}
                                    >★</span>}
                                    <span
                                        className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {link.title}
                  </span>
                                </div>
                                <span
                                    className="text-indigo-500 dark:text-indigo-400 transform transition-transform duration-300 group-hover:translate-x-1">
                  <i className="fas fa-external-link-alt"></i>
                </span>
                            </div>
                            {/* 显示描述文本 */}
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed w-full">
                                {link.desc}
                            </p>
                        </a>
                    ))}
                </div>

                {/* 底部信息 */}
                <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex flex-row justify-center items-center py-4">
                        <span>投稿：</span>
                        <a href="https://github.com/moxiaolong/mianbaoren">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                            </svg>
                        </a>
                    </div>
                    <p>© 2025 mianbaoren.pages.dev</p>
                    <p className="py-2">仅代表个人观点，仅供学习参考。</p>
                </div>
            </div>
        </div>
    );
}
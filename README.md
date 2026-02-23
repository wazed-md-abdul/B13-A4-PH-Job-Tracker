


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer:
getElementById() নির্দিষ্ট ID অনুযায়ী একটি মাত্র element রিটার্ন করে।

getElementsByClassName() নির্দিষ্ট class অনুযায়ী একাধিক element রিটার্ন করে ।

querySelector() ব্যবহার করে প্রথম ম্যাচ করা element রিটার্ন করে।

querySelectorAll()  ব্যবহার করে সব ম্যাচ করা element রিটার্ন করে ।
### 2. How do you create and insert a new element into the DOM?
answer:
let div = document.createElement("div");
div.InnerText = "Hello World";
document.body.appendChild(div);

এখানে প্রথমে div তৈরি করেছি, তারপর লেখা যোগ করেছি, তারপর সেটা body-এর ভিতরে বসিয়েছি।
এভাবেই নতুন element তৈরি করে DOM-এ insert করা হয়
### 3. What is Event Bubbling? And how does it work?
answer:
Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো এলিমেন্টে ইভেন্ট ঘটলে সেটি প্রথমে সেই এলিমেন্টে  হয়, তারপর ধাপে ধাপে তার parent, grandparent হয়ে উপরের দিকে যায়।

অর্থাৎ ইভেন্ট নিচের এলিমেন্টে থেকে শুরু করে DOM tree-এর উপরের দিকে যায়।

### 4. What is Event Delegation in JavaScript? Why is it useful?
answer:
Event Delegation হলো এমন একটি পদ্ধতি যেখানে প্রত্যেকটি চাইল্ড এলিমেন্টে আলাদা করে ইভেন্ট লিসেনার যোগ না করে, তাদের parent এলিমেন্টে একটি single event listener যোগ করা হয়।

কেন এটি গুরুত্বপূর্ণ?

Performance উন্নত হয়, কারণ অনেকগুলো element-এ আলাদা listener বসাতে হয় না।

কোড সংক্ষিপ্ত, পরিষ্কার এবং maintain করা সহজ হয়।
### 5. What is the difference between preventDefault() and stopPropagation() methods?
answer:
দুটি দুইধরনের জিনিস।preventDefault() এবং stopPropagation() এর মধ্যে মূল পার্থক্য হলো তারা event-এর ভিন্ন ভিন্ন দিক নিয়ন্ত্রণ করে।
preventDefault()  Browser-এর default কাজ বন্ধ করে

stopPropagation()  Event-এর উপরের দিকে ছড়িয়ে যাওয়া (bubbling) বন্ধ করে


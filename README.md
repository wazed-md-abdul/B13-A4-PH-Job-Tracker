


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer:
getElementById() নির্দিষ্ট ID অনুযায়ী একটি মাত্র element রিটার্ন করে।

getElementsByClassName() নির্দিষ্ট class অনুযায়ী একাধিক element রিটার্ন করে এবং এটি একটি live HTMLCollection দেয় (DOM পরিবর্তন হলে আপডেট হয়।

querySelector() ব্যবহার করে প্রথম ম্যাচ করা element রিটার্ন করে।

querySelectorAll()  ব্যবহার করে সব ম্যাচ করা element রিটার্ন করে এবং এটি একটি static NodeList দেয় (DOM পরিবর্তন হলে নিজে থেকে আপডেট হয় না)।
### 2. How do you create and insert a new element into the DOM?
answer:
let div = document.createElement("div");
div.InnerText = "Hello World";
document.body.appendChild(div);

এখানে প্রথমে div তৈরি করেছি, তারপর লেখা যোগ করেছি, তারপর সেটা body-এর ভিতরে বসিয়েছি।
এভাবেই নতুন element তৈরি করে DOM-এ insert করা হয়
### 3. What is Event Bubbling? And how does it work?
answer:
Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো element-এ event ঘটলে সেটি প্রথমে সেই element-এ trigger হয়, তারপর ধাপে ধাপে তার parent, grandparent হয়ে উপরের দিকে propagate করে।

অর্থাৎ event নিচের element থেকে শুরু করে DOM tree-এর উপরের দিকে যায়।

উদাহরণ হিসেবে, যদি একটি button একটি div-এর ভিতরে থাকে এবং button-এ click করা হয়, তাহলে প্রথমে button-এর click event চলবে, এরপর div-এর event চলবে, তারপর প্রয়োজনে document পর্যন্ত পৌঁছাতে পারে।
### 4. What is Event Delegation in JavaScript? Why is it useful?
answer:
Event Delegation হলো এমন একটি পদ্ধতি যেখানে প্রত্যেকটি child element-এ আলাদা করে event listener যোগ না করে, তাদের parent element-এ একটি single event listener যোগ করা হয়।

এটি Event Bubbling নীতির উপর ভিত্তি করে কাজ করে। যখন কোনো child element-এ event ঘটে, সেটি bubbling হয়ে parent-এ পৌঁছায়। তখন parent-এর event listener event.target ব্যবহার করে নির্ধারণ করে কোন child element থেকে event এসেছে এবং সে অনুযায়ী action নেয়।

কেন এটি গুরুত্বপূর্ণ?

Performance উন্নত হয়, কারণ অনেকগুলো element-এ আলাদা listener বসাতে হয় না।

Dynamicভাবে যোগ করা element-এর ক্ষেত্রেও কাজ করে।

কোড সংক্ষিপ্ত, পরিষ্কার এবং maintain করা সহজ হয়।
### 5. What is the difference between preventDefault() and stopPropagation() methods?
answer:
দুটি দুইধরনের জিনিস।preventDefault() এবং stopPropagation() এর মধ্যে মূল পার্থক্য হলো তারা event-এর ভিন্ন ভিন্ন দিক নিয়ন্ত্রণ করে।
preventDefault() → Browser-এর default কাজ বন্ধ করে

stopPropagation() → Event-এর উপরের দিকে ছড়িয়ে যাওয়া (bubbling) বন্ধ করে


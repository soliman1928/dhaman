# شركة الضمان الذهبي لنقل العفش - موقع Angular

هذا المشروع عبارة عن تطبيق Angular standalone component لشركة نقل العفش مع خاصية تتبع الزيارات.

## المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- Angular CLI (الإصدار 19)

## إعداد المشروع

### 1. تثبيت Angular CLI
```bash
npm install -g @angular/cli
```

### 2. إنشاء مشروع Angular جديد
```bash
ng new furniture-transportation-angular --routing=false --style=css --standalone
cd furniture-transportation-angular
```

### 3. تحديث package.json
استبدل محتوى `package.json` بالمحتوى المقدم في هذا المشروع.

### 4. تثبيت التبعيات
```bash
npm install
```

### 5. إنشاء هيكل المجلدات
قم بإنشاء المجلدات التالية:
```
src/
├── app/
│   ├── components/
│   └── services/
└── assets/
    └── images/
```

### 6. نسخ الملفات
انسخ جميع الملفات من هذا المشروع إلى مواقعها المناسبة:

- `src/main.ts`
- `src/index.html`
- `src/styles.css`
- `src/app/app.component.ts`
- `src/app/components/furniture-transportation.component.ts`
- `src/app/services/visit-logger.service.ts`
- `angular.json`
- `tsconfig.json`
- `tsconfig.app.json`

### 7. إضافة الصور
ضع الصور التالية في مجلد `src/assets/images/`:
- `logo.png`
- `1.png`
- `cover.jpeg`
- `tran.jpg`
- `quality.png`
- `mony.png`
- `why-us-bg.jpg`
- `gallery1.jpeg` (إعادة تسمية من WhatsApp Image 2025-09-16 at 10.33.09 PM.jpeg)
- `gallery2.jpeg` (إعادة تسمية من WhatsApp Image 2025-09-16 at 10.33.11 PM.jpeg)
- `gallery3.jpeg` (إعادة تسمية من WhatsApp Image 2025-09-16 at 10.33.20 PM.jpeg)
- `gallery4.jpeg` (إعادة تسمية من WhatsApp Image 2025-09-16 at 10.33.31 PM.jpeg)
- `gallery5.jpeg` (إعادة تسمية من WhatsApp Image 2025-09-16 at 10.33.32 PM (2).jpeg)
- `gallery6.jpeg` (إعادة تسمية من WhatsApp Image 2025-09-16 at 10.33.32 PM.jpeg)

## تشغيل المشروع

```bash
ng serve
```

الموقع سيكون متاحاً على: `http://localhost:4200`

## بناء المشروع للإنتاج

```bash
ng build --configuration=production
```

## المميزات

### 1. تتبع الزيارات
- يتم تسجيل كل زيارة تلقائياً
- يحفظ: رقم الزيارة، التاريخ، الموقع، وعنوان IP
- إمكانية تحميل سجل الزيارات كملف نصي
- إمكانية مسح السجلات

### 2. التصميم المتجاوب
- متوافق مع جميع أحجام الشاشات
- دعم اللغة العربية مع اتجاه RTL

### 3. SEO محسن
- عناوين وأوصاف محسنة لمحركات البحث
- كلمات مفتاحية متعلقة بخدمات نقل العفش

## الملفات المهمة

### `visit-logger.service.ts`
خدمة مسؤولة عن:
- تسجيل الزيارات تلقائياً
- الحصول على الموقع الجغرافي وعنوان IP
- حفظ البيانات في LocalStorage
- تصدير السجلات

### `furniture-transportation.component.ts`
المكون الرئيسي للموقع يحتوي على:
- جميع أقسام الموقع
- البيانات الديناميكية للخدمات والمعرض
- إدارة سجل الزيارات

## ملاحظات مهمة

1. **API للموقع الجغرافي**: يستخدم الموقع APIs مجانية للحصول على الموقع الجغرافي وعنوان IP
2. **تخزين البيانات**: يتم حفظ سجل الزيارات في LocalStorage
3. **الخصوصية**: يطلب إذن المستخدم للوصول للموقع الجغرافي
4. **الصور**: تأكد من وضع جميع الصور في مجلد assets/images
5. **Font Awesome**: يتم تحميل أيقونات Font Awesome من CDN

## استكشاف الأخطاء

### مشكلة في الصور
إذا لم تظهر الصور، تأكد من:
- وضع الصور في المسار الصحيح: `src/assets/images/`
- استخدام الأسماء الصحيحة للصور
- بناء المشروع مرة أخرى بعد إضافة الصور

### مشكلة في تتبع الزيارات
إذا لم يعمل تتبع الزيارات:
- تحقق من console للأخطاء
- تأكد من الاتصال بالإنترنت
- قد تكون APIs محجوبة في بعض الشبكات

## الدعم

في حالة وجود مشاكل، يرجى مراجعة:
1. وحدة التحكم في المتصفح للأخطاء
2. التأكد من تثبيت جميع التبعيات بشكل صحيح
3. مراجعة إصدار Angular CLI وNode.js
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { VisitLoggerService } from '../../services/visit-logger.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-furniture-transportation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="furniture-page" dir="rtl">
      <!-- Add structured content for SEO -->
      <div class="seo-content-hidden" style="display: none;">
        <h1>{{ seoTitle }}</h1>
        <p>{{ seoDescription }}</p>
        <div itemscope itemtype="https://schema.org/LocalBusiness">
          <span itemprop="name">وايت مياه الزعيم</span>
          <span itemprop="telephone">0547293083</span>
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="addressCountry">SA</span>
            <span itemprop="addressRegion">جدة</span>
          </div>
        </div>
      </div>

      <header>
        <div class="container">
          <div class="logo-container">
            <img src="/assets/images/logo.png" alt="وايت مياه الزعيم" class="company-logo-header">
          </div>
          <h1 class="logo">وايت مياه الزعيم - 0547293083</h1>
          <p class="tagline">توصيل مياه تحلية نقية لجميع أنحاء جدة - خدمة 24 ساعة - صهاريج 7 طن - موتور رفع وليات طويلة</p>
        </div>
      </header>

      <!-- Fixed Contact Icons -->
      <div class="fixed-contact-icons" [class.hidden]="contactIconsHidden">
        <a href="tel:0547293083" class="contact-icon phone-icon" [class.hidden]="contactIconsHidden" title="اتصل بنا">
          <i class="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/966547293083" target="_blank" class="contact-icon whatsapp-icon" [class.hidden]="contactIconsHidden" title="واتساب">
          <i class="fab fa-whatsapp"></i>
        </a>
        <button class="contact-icon close-icon" (click)="toggleContactIcons()" title="إخفاء/إظهار">
          <i class="fas fa-times" *ngIf="!contactIconsHidden"></i>
          <i class="fas fa-phone-alt" *ngIf="contactIconsHidden"></i>
        </button>
      </div>

      <div class="container">
        <!-- Main content sections with proper headings for SEO -->
        <section class="contact">
          <h2>اتصل بنا الآن للحصول على أفضل خدمة توصيل مياه</h2>
          <p><i class="fas fa-phone"></i> هاتف: 0547293083</p>
          <br>
          <a href="https://wa.me/966547293083" target="_blank" class="btn-primary">
            اطلب خدمة الآن
          </a>
        </section>

        <!-- Enhanced SEO section with more structured content -->
        <section class="seo-section">
          <h2 class="seo-title">أفضل خدمة توصيل مياه تحلية في جدة - وايت مياه الزعيم</h2>

          <div class="seo-image-container">
            <div class="seo-image">
              <div class="seo-image-content">
                <div class="seo-image-logo">وايت مياه الزعيم</div>
                <div class="seo-image-text">مياه نقية ونظيفة بأفضل سعر وأسرع توصيل في جدة</div>
              </div>
            </div>
          </div>

          <div class="seo-content">
            <h3>وايت مياه الزعيم - الخيار الأمثل لتوصيل مياه تحلية نقية في جدة</h3>
            <p>
              إذا كنت تبحث عن <strong>توصيل مياه تحلية في جدة</strong> موثوقة ونقية، فإن وايت مياه الزعيم هي الخيار الأمثل لك. 
              نحن نقدم خدمات <strong>توصيل مياه الشرب النقية في جدة</strong> بأعلى معايير الجودة والنظافة، مع صهاريج حديثة سعة 
              <strong>7 طن</strong> وخدمات <strong>موتور رفع للخزانات المرتفعة</strong> وليات طويلة.
            </p>

            <h3>خدمات توصيل مياه التحلية المتكاملة في جميع أحياء جدة</h3>
            <p>
              تشمل خدماتنا <strong>توصيل مياه الروضة</strong> و<strong>توصيل مياه الفيصلية</strong> و<strong>توصيل مياه الصفا والمروة</strong> 
              بالإضافة إلى <strong>النخيل والسامر والشاطئ والنسيم</strong> و<strong>توصيل مياه للمطاعم والكافيهات</strong>. نحن نوفر 
              <strong>فاتورة ضريبية وسجل تجاري</strong> لخدمة المطاعم والكافيهات والمنشآت التجارية.
            </p>

            <h3>لماذا نحن أفضل شركة توصيل مياه في جدة؟</h3>
            <ul>
              <li>✓ خدمة 24 ساعة - نصلك في أي وقت</li>
              <li>✓ صهاريج مياه حديثة سعة 7 طن</li>
              <li>✓ موتور رفع للخزانات المرتفعة</li>
              <li>✓ ليات طويلة للوصول لأي مكان</li>
              <li>✓ أسعار تنافسية - خصم 30٪</li>
              <li>✓ مياه تحلية نقية وآمنة</li>
              <li>✓ فاتورة ضريبية وسجل تجاري</li>
              <li>✓ خدمة عملاء مميزة</li>
            </ul>

            <div class="cities-service">
              <h3>مناطق خدماتنا في جدة</h3>
              <div class="cities-grid">
                <div class="city-item">
                  <h4>وايت مياه الروضة</h4>
                  <p>توصيل سريع لمياه التحلية في حي الروضة</p>
                </div>
                <div class="city-item">
                  <h4>وايت مياه الفيصلية</h4>
                  <p>خدمة توصيل مياه نقية في الفيصلية بأفضل الأسعار</p>
                </div>
                <div class="city-item">
                  <h4>وايت مياه الصفا والمروة</h4>
                  <p>توصيل مياه تحلية في الصفا والمروة على مدار الساعة</p>
                </div>
                <div class="city-item">
                  <h4>وايت مياه النخيل والسامر</h4>
                  <p>خدمة توصيل مياه في النخيل والسامر والشاطئ والنسيم</p>
                </div>
              </div>
            </div>

            <div class="seo-keywords">
              <h4>خدماتنا المتخصصة:</h4>
              <div class="keywords-list">
                <span class="keyword" *ngFor="let keyword of keywords">{{ keyword }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Rest of your existing sections... -->
        <section class="services">
          <h2 class="service-title">خدماتنا المتكاملة لتوصيل مياه التحلية</h2>
          <p>نقدم في شركتنا خدمات توصيل مياه التحلية المتكاملة بصهاريج سعة 7 طن مع موتور رفع وليات طويلة بأسعار تنافسية. نحن نوفر فاتورة ضريبية وسجل تجاري للمطاعم والكافيهات. خدمة 24 ساعة لجميع أحياء جدة.</p>

          <div class="service-list">
            <div class="service-item" *ngFor="let service of services">
              <div class="service-img">
                <img [src]="service.image" [alt]="service.title + ' - ' + service.description">
              </div>
              <div class="service-content">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Video Section -->
        <section class="video-section">
          <h2 class="video-title">شاهد خدماتنا المميزة</h2>
          <div class="video-container">
            <video controls class="service-video" poster="/assets/images/water.jpg">
              <source src="/assets/images/work2.mp4" type="video/mp4">
              المتصفح الخاص بك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </section>

        <!-- Continue with rest of your template... -->
        <!-- Your existing sections: why-us, gallery, pricing-coverage, etc. -->
      </div>

      <footer>
        <div class="container">
          <div class="social-icons">
            <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="انستغرام"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/966547293083" aria-label="واتساب"><i class="fab fa-whatsapp"></i></a>
          </div>
          <p>وايت مياه الزعيم - خدمات توصيل مياه تحلية نقية على مدار 24 ساعة في جميع أنحاء جدة - صهاريج 7 طن - موتور رفع وليات طويلة</p>
          <p>جميع الحقوق محفوظة ©2024</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    /* تنسيقات عامة */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .furniture-page {
      font-family: 'Cairo', 'Tajawal', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.8;
      color: #1a1a1a;
      background: linear-gradient(135deg, #0a4275 0%, #1565c0 50%, #0d47a1 100%);
      min-height: 100vh;
      background-attachment: fixed;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* Fixed Contact Icons Styles */
    .fixed-contact-icons {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .contact-icon {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 26px;
      color: white;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      border: 3px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
      50% {
        box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
      }
    }

    .phone-icon {
      background: linear-gradient(135deg, #00b4db 0%, #0083b0 100%);
    }

    .phone-icon:hover {
      background: linear-gradient(135deg, #0083b0 0%, #00b4db 100%);
      transform: scale(1.15) rotate(10deg);
      color: white;
    }

    .whatsapp-icon {
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    }

    .whatsapp-icon:hover {
      background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
      transform: scale(1.15) rotate(-10deg);
      color: white;
    }

    .close-icon {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .close-icon:hover {
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
      transform: scale(1.15);
    }

    /* ترويسة الصفحة */
    header {
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.92) 0%, rgba(10, 66, 117, 0.92) 100%), 
                  url('/assets/images/header.PNG');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
      padding: 100px 0;
      text-align: center;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
      position: relative;
      overflow: hidden;
      border-bottom: 5px solid #FFD700;
    }

    header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.15) 0%, transparent 50%);
      animation: shimmer 4s ease-in-out infinite;
    }

    header::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      animation: shine 3s infinite;
    }

    @keyframes shine {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    @keyframes shimmer {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    .logo {
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 25px;
      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
      letter-spacing: 3px;
      position: relative;
      z-index: 1;
      color: #FFD700;
      text-transform: uppercase;
    }

    .tagline {
      font-size: 24px;
      margin-bottom: 30px;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      line-height: 1.8;
      position: relative;
      z-index: 1;
      font-weight: 600;
      color: #ffffff;
    }

    /* قسم SEO الجديد */
    .seo-section {
      background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
      border-radius: 25px;
      padding: 60px;
      margin: 60px 0;
      box-shadow: 0 20px 60px rgba(13, 71, 161, 0.3);
      border: 2px solid rgba(13, 71, 161, 0.2);
    }

    .seo-title {
      background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      border-bottom: 4px solid #0d47a1;
      padding-bottom: 25px;
      margin-bottom: 50px;
      text-align: center;
      font-size: 42px;
      font-weight: 900;
    }

    .seo-image-container {
      width: 100%;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
    }

    .seo-image {
      width: 100%;
      max-width: 950px;
      height: 500px;
      overflow: hidden;
      border-radius: 25px;
      box-shadow: 0 20px 70px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.85) 0%, rgba(10, 66, 117, 0.85) 100%),
                  url('/assets/images/modern.PNG');
      background-size: cover;
      background-position: center;
      position: relative;
      transition: transform 0.4s ease;
      border: 3px solid #FFD700;
    }

    .seo-image:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 80px rgba(13, 71, 161, 0.5);
    }

    .seo-image-content {
      text-align: center;
      color: white;
      padding: 40px;
      z-index: 2;
      position: relative;
    }

    .seo-image-logo {
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 25px;
      text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.8);
      letter-spacing: 3px;
      animation: fadeInDown 1s ease;
      color: #FFD700;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .seo-image-text {
      font-size: 28px;
      opacity: 0.98;
      text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
      font-weight: 600;
      line-height: 1.6;
    }

    .seo-image::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.75) 0%, rgba(10, 66, 117, 0.75) 100%);
      z-index: 1;
      border-radius: 23px;
    }

    .seo-content {
      line-height: 2;
      font-size: 18px;
      color: #2c3e50;
    }

    .seo-content h3 {
      background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 40px 0 25px;
      font-size: 32px;
      font-weight: 800;
    }

    .seo-content p {
      margin-bottom: 28px;
      color: #2c3e50;
      text-align: justify;
      font-size: 18px;
    }

    .seo-content ul {
      list-style: none;
      padding: 0;
      background: linear-gradient(135deg, #f8fbff 0%, #e8f4ff 100%);
      padding: 30px;
      border-radius: 15px;
      border-right: 5px solid #0d47a1;
    }

    .seo-content li {
      padding: 15px 0;
      padding-right: 35px;
      position: relative;
      color: #1a1a1a;
      font-size: 18px;
      transition: all 0.3s ease;
      font-weight: 600;
    }

    .seo-content li:hover {
      transform: translateX(-8px);
      color: #0d47a1;
    }

    .seo-content li::before {
      content: '💧';
      position: absolute;
      right: 0;
      font-size: 22px;
      filter: drop-shadow(2px 2px 4px rgba(13, 71, 161, 0.3));
    }

    .seo-keywords {
      background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
      padding: 35px;
      border-radius: 20px;
      margin: 50px 0;
      border-right: 6px solid #FFD700;
      box-shadow: 0 10px 40px rgba(13, 71, 161, 0.4);
    }

    .seo-keywords h4 {
      color: #FFD700;
      font-size: 26px;
      margin-bottom: 25px;
      font-weight: 800;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .keywords-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 25px;
    }

    .keyword {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      color: #1a1a1a;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 700;
      box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
      transition: all 0.3s ease;
      cursor: pointer;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .keyword:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 30px rgba(255, 215, 0, 0.6);
      background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%);
    }

    /* قسم الخدمات */
    .services {
      background: linear-gradient(135deg, #ffffff 0%, #f5f9fc 100%);
      border-radius: 25px;
      padding: 60px 50px;
      margin: 60px 0;
      box-shadow: 0 20px 60px rgba(13, 71, 161, 0.3);
      border: 2px solid rgba(13, 71, 161, 0.2);
    }

    .service-title {
      background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      border-bottom: 4px solid #0d47a1;
      padding-bottom: 20px;
      margin-bottom: 50px;
      text-align: center;
      font-size: 42px;
      font-weight: 900;
    }

    .services p {
      text-align: center;
      color: #2c3e50;
      font-size: 19px;
      line-height: 1.9;
      margin-bottom: 50px;
      max-width: 950px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 500;
    }

    .service-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 35px;
      margin-top: 40px;
    }

    .service-item {
      background: white;
      padding: 0;
      border-radius: 25px;
      overflow: hidden;
      transition: all 0.4s ease;
      box-shadow: 0 15px 40px rgba(13, 71, 161, 0.25);
      border: 2px solid rgba(13, 71, 161, 0.15);
      position: relative;
    }

    .service-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, #0d47a1 0%, #FFD700 50%, #0d47a1 100%);
      transform: scaleX(0);
      transition: transform 0.5s ease;
      background-size: 200% 100%;
      animation: gradientShift 3s ease infinite;
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .service-item:hover::before {
      transform: scaleX(1);
    }

    .service-item:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 25px 60px rgba(13, 71, 161, 0.4);
      border-color: #FFD700;
    }

    .service-img {
      height: 220px;
      overflow: hidden;
      position: relative;
    }

    .service-img::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.15) 0%, rgba(10, 66, 117, 0.15) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .service-item:hover .service-img::after {
      opacity: 1;
    }

    .service-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .service-item:hover .service-img img {
      transform: scale(1.15);
    }

    .service-content {
      padding: 30px;
      background: white;
    }

    .service-content h3 {
      color: #0d47a1;
      font-size: 24px;
      margin-bottom: 15px;
      font-weight: 800;
    }

    .service-content p {
      color: #2c3e50;
      line-height: 1.9;
      font-size: 17px;
      font-weight: 500;
    }

    /* Company Logo Styling */
    .logo-container {
      margin-bottom: 25px;
      position: relative;
      z-index: 1;
    }

    .company-logo-header {
      max-height: 150px;
      width: auto;
      filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5));
      animation: float 3s ease-in-out infinite;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border: 3px solid #FFD700;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
    }

    .company-logo {
      max-height: 300px;
      width: auto;
      transition: transform 0.3s ease;
    }

    .company-logo:hover {
      transform: scale(1.05);
    }

    /* Video Section */
    .video-section {
      background: linear-gradient(135deg, #ffffff 0%, #f5f9fc 100%);
      border-radius: 25px;
      padding: 60px 50px;
      margin: 60px 0;
      box-shadow: 0 20px 60px rgba(13, 71, 161, 0.3);
      border: 2px solid rgba(13, 71, 161, 0.2);
    }

    .video-title {
      background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      border-bottom: 4px solid #0d47a1;
      padding-bottom: 20px;
      margin-bottom: 50px;
      text-align: center;
      font-size: 42px;
      font-weight: 900;
    }

    .video-container {
      max-width: 1000px;
      margin: 0 auto;
      border-radius: 25px;
      overflow: hidden;
      box-shadow: 0 20px 70px rgba(13, 71, 161, 0.4);
      border: 3px solid #FFD700;
      position: relative;
    }

    .service-video {
      width: 100%;
      height: auto;
      display: block;
      min-height: 400px;
      background: #000;
    }

    .video-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #FFD700, #0d47a1, #FFD700);
      background-size: 200% 100%;
      animation: gradientShift 3s ease infinite;
      z-index: 10;
    }

    /* قسم لماذا نحن */
    .why-us {
      background: linear-gradient(rgba(233, 247, 254, 0.9), rgba(233, 247, 254, 0.9)), url('/assets/images/why-us-bg.jpg');
      background-size: cover;
      background-position: center;
      padding: 60px 30px;
      border-radius: 8px;
      margin: 40px 0;
      text-align: center;
      position: relative;
    }

    .why-us:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #e9f7fe;
      z-index: -1;
      border-radius: 8px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .feature {
      text-align: center;
      padding: 25px 15px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .feature i {
      font-size: 50px;
      color: #1a5fb4;
      margin-bottom: 20px;
    }

    /* معرض الصور */
    .gallery {
      margin: 50px 0;
    }

    .gallery-title {
      color: #1a5fb4;
      text-align: center;
      margin-bottom: 30px;
      font-size: 28px;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }

    .gallery-item {
      height: 250px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    /* أسعار وتغطية */
    .pricing-coverage {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 30px;
      margin: 40px 0;
    }

    .pricing, .coverage {
      background-color: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .coverage-map {
      margin-top: 20px;
      text-align: center;
    }

    .coverage-map img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    /* الاتصال */
    .contact {
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.95) 0%, rgba(10, 66, 117, 0.95) 100%), 
                  url('/assets/images/Capture3.PNG');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 80px 60px;
      border-radius: 30px;
      text-align: center;
      margin: 60px 0;
      box-shadow: 0 25px 70px rgba(13, 71, 161, 0.5);
      position: relative;
      overflow: hidden;
      border: 3px solid #FFD700;
    }

    .contact::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
      animation: rotate 25s linear infinite;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .contact h2 {
      font-size: 38px;
      margin-bottom: 30px;
      font-weight: 900;
      position: relative;
      z-index: 1;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      color: #FFD700;
    }

    .contact p {
      font-size: 28px;
      margin: 25px 0;
      position: relative;
      z-index: 1;
      font-weight: 700;
    }

    .contact p i {
      margin-left: 12px;
      color: #FFD700;
      animation: ring 2s ease-in-out infinite;
      font-size: 32px;
    }

    @keyframes ring {
      0%, 100% { transform: rotate(0deg); }
      10%, 30% { transform: rotate(-15deg); }
      20%, 40% { transform: rotate(15deg); }
    }

    .btn-primary {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      color: #1a1a1a;
      padding: 22px 60px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 60px;
      font-size: 26px;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.4s ease;
      margin-top: 35px;
      display: inline-block;
      text-decoration: none;
      box-shadow: 0 15px 40px rgba(255, 165, 0, 0.6);
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%);
      transform: translateY(-8px) scale(1.08);
      box-shadow: 0 20px 50px rgba(255, 165, 0, 0.8);
      color: #000;
      border-color: #fff;
    }

    .btn-primary:active {
      transform: translateY(-3px) scale(1.03);
    }

    /* التذييل */
    footer {
      background: linear-gradient(135deg, #0a2540 0%, #0d47a1 100%);
      color: white;
      text-align: center;
      padding: 60px 40px;
      margin-top: 100px;
      box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.4);
      position: relative;
    }

    footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #FFD700, #0d47a1, #FFD700, #0d47a1);
      background-size: 300% 100%;
      animation: gradientMove 4s ease infinite;
    }

    @keyframes gradientMove {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    footer p {
      margin: 18px 0;
      font-size: 17px;
      line-height: 1.9;
      opacity: 0.98;
      font-weight: 500;
    }

    .social-icons {
      margin: 35px 0;
      display: flex;
      justify-content: center;
      gap: 25px;
    }

    .social-icons a {
      color: white;
      font-size: 32px;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 215, 0, 0.15);
      transition: all 0.4s ease;
      border: 3px solid rgba(255, 215, 0, 0.3);
    }

    .social-icons a:hover {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      color: #0a2540;
      transform: translateY(-10px) scale(1.15);
      border-color: #FFD700;
      box-shadow: 0 15px 35px rgba(255, 215, 0, 0.5);
    }

    .visit-logs {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    /* Cities Service Grid */
    .cities-service {
      margin: 50px 0;
    }

    .cities-service h3 {
      background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 35px;
      text-align: center;
    }

    .cities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }

    .city-item {
      background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
      padding: 35px 30px;
      border-radius: 20px;
      box-shadow: 0 10px 35px rgba(13, 71, 161, 0.2);
      transition: all 0.4s ease;
      border: 2px solid rgba(13, 71, 161, 0.1);
      position: relative;
      overflow: hidden;
    }

    .city-item::before {
      content: '💧';
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 60px;
      opacity: 0.1;
      transition: all 0.4s ease;
    }

    .city-item:hover::before {
      opacity: 0.3;
      transform: scale(1.2) rotate(20deg);
    }

    .city-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 50px rgba(13, 71, 161, 0.35);
      border-color: #FFD700;
    }

    .city-item h4 {
      color: #0d47a1;
      font-size: 22px;
      font-weight: 800;
      margin-bottom: 15px;
      position: relative;
      z-index: 1;
    }

    .city-item p {
      color: #2c3e50;
      line-height: 1.8;
      font-size: 16px;
      font-weight: 500;
      position: relative;
      z-index: 1;
    }

    .fixed-contact-icons.hidden .phone-icon,
    .fixed-contact-icons.hidden .whatsapp-icon {
      display: none;
    }

    .contact-icon.hidden {
      display: none;
    }

    /* تصميم أقسام المدن */
    .cities-service {
      margin: 40px 0;
    }

    .cities-service h3 {
      background: linear-gradient(135deg, #007bff 0%, #00b4db 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 28px;
      margin-bottom: 30px;
      font-weight: 700;
      text-align: center;
    }

    .cities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
      margin-top: 30px;
    }

    .city-item {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      padding: 30px;
      border-radius: 18px;
      text-align: center;
      transition: all 0.4s ease;
      box-shadow: 0 8px 25px rgba(0, 123, 255, 0.12);
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
    }

    .city-item::before {
      content: '📍';
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 28px;
      opacity: 0.3;
    }

    .city-item:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 15px 40px rgba(0, 123, 255, 0.25);
      border-color: #007bff;
    }

    .city-item h4 {
      color: #007bff;
      font-size: 20px;
      margin-bottom: 12px;
      font-weight: 700;
    }

    .city-item p {
      color: #5a6c7d;
      line-height: 1.7;
      font-size: 15px;
    }

    /* التجاوب مع الشاشات المختلفة */
    @media (max-width: 768px) {
      .pricing-coverage {
        grid-template-columns: 1fr;
      }

      header {
        padding: 30px 0;
      }

      .logo {
        font-size: 28px;
      }

      .tagline {
        font-size: 18px;
      }

      .seo-image {
        height: 300px;
      }

      .seo-image-logo {
        font-size: 28px;
      }

      .seo-image-text {
        font-size: 18px;
      }

      .seo-content {
        font-size: 16px;
      }

      .keywords-list {
        justify-content: center;
      }

      .fixed-contact-icons {
        right: 10px;
        bottom: 10px;
      }

      .contact-icon {
        width: 50px;
        height: 50px;
        font-size: 20px;
      }

      .company-logo {
        margin-top: 20px;
        max-height: 200px;
      }
    }
  `]
})
export class FurnitureTransportationComponent implements OnInit {

   visitCount = 0;
  contactIconsHidden = false;

  seoTitle = 'وايت مياه الزعيم - أفضل خدمة توصيل مياه تحلية في جدة';
  seoDescription = 'شركة متخصصة في توصيل مياه التحلية النقية لجميع أنحاء جدة. خدمة 24 ساعة، صهاريج 7 طن، موتور رفع وليات طويلة. فاتورة ضريبية وسجل تجاري. اتصل الآن: 0547293083';

  keywords = [
    'وايت مياه جدة',
    'توصيل مياه تحلية جدة',
    'صهريج مياه 7 طن',
    'وايت مياه الزعيم',
    'مياه تحلية نقية',
    'وايت مياه الروضة',
    'وايت مياه الفيصلية',
    'وايت مياه الصفا والمروة',
    'موتور رفع مياه',
    'خدمة 24 ساعة',
    'ليات طويلة',
    'فاتورة ضريبية',
    'سجل تجاري',
    'وايت مياه للمطاعم'
  ];

  services = [
    {
      title: 'توصيل مياه 7 طن',
      description: 'صهاريج مياه حديثة سعة 7 طن لتوصيل مياه التحلية النقية لمنزلك أو مطعمك أو كافيهك.',
      image: '/assets/images/777.jpeg'
    },
    {
      title: 'موتور رفع للخزانات',
      description: 'نوفر خدمة موتور رفع مع ليات طويلة لتوصيل المياه للخزانات المرتفعة بكل سهولة.',
      image: '/assets/images/888.png'
    },
    {
      title: 'خدمة 24 ساعة',
      description: 'خدمة عملاء مميزة متوفرة على مدار الساعة - نصلك أينما كنت في جدة في أي وقت.',
      image: '/assets/images/work1.jpeg'
    },
    {
      title: 'فاتورة وسجل تجاري',
      description: 'نوفر فاتورة ضريبية وسجل تجاري للمطاعم والكافيهات والمنشآت التجارية.',
      image: '/assets/images/mony.png'
    }
  ];

  features = [
    {
      icon: 'fas fa-tint',
      title: 'مياه نقية',
      description: 'مياه تحلية نقية وآمنة 100٪ للشرب'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'سرعة التوصيل',
      description: 'توصيل سريع لجميع أنحاء جدة - نصلك في أسرع وقت'
    },
    {
      icon: 'fas fa-tag',
      title: 'أفضل الأسعار',
      description: 'أسعار تنافسية مع خصم 30٪ - أفضل سعر في السوق'
    },
    {
      icon: 'fas fa-clock',
      title: 'خدمة 24 ساعة',
      description: 'متاحون على مدار الساعة لخدمتكم'
    }
  ];

  galleryImages = [
    { src: '/assets/images/777.jpeg', alt: 'صهريج مياه 7 طن' },
    { src: '/assets/images/888.png', alt: 'توصيل مياه في جدة' },
    { src: '/assets/images/water.jpg', alt: 'مياه تحلية نقية' },
    { src: '/assets/images/work1.jpeg', alt: 'فريق العمل' },
    { src: '/assets/images/modern.PNG', alt: 'خدمة عملاء' },
    { src: '/assets/images/WhatsApp Image 2026-02-09 at 11.12.25 AM.jpeg', alt: 'وايت مياه الزعيم' }
  ];

  serviceCities = [
    'الروضة',
    'الفيصلية',
    'الصفا والمروة',
    'النخيل',
    'السامر',
    'الشاطئ',
    'النسيم',
    'وجميع أحياء جدة'
  ];

   constructor(
    private visitLoggerService: VisitLoggerService,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

   ngOnInit(): void {
    // this.updateVisitCount();
    this.setAdvancedSEOMetadata();
    
    // Only run browser-specific code in browser
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

   private setAdvancedSEOMetadata(): void {
    // Set dynamic title
    this.titleService.setTitle(this.seoTitle);
    
    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: this.seoDescription
    });

    // Add additional meta tags
    this.metaService.updateTag({
      name: 'keywords',
      content: 'وايت مياه جدة, توصيل مياه تحلية جدة, صهريج مياه 7 طن, وايت مياه الزعيم, مياه نقية جدة, خدمة 24 ساعة'
    });

    // Canonical URL
    this.metaService.updateTag({
      rel: 'canonical',
      href: 'https://your-domain.vercel.app'
    });
  }

  private addStructuredData(): void {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "وايت مياه الزعيم",
        "telephone": "+966547293083",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": "Makkah Province",
          "addressLocality": "جدة"
        },
        "areaServed": ["جدة", "الروضة", "الفيصلية", "الصفا والمروة", "النخيل"],
        "serviceType": ["توصيل مياه تحلية", "صهاريج 7 طن", "موتور رفع للخزانات", "خدمة 24 ساعة"]
      });
      document.head.appendChild(script);
    }
  }

  private setPageMetadata(): void {
    // Set page title for browser tab
    this.titleService.setTitle('وايت مياه الزعيم - أفضل خدمة توصيل مياه تحلية في جدة');
    
    // Set favicon
    this.setFavicon('/assets/images/logo.png');
    
    // Set meta description
    this.metaService.updateTag({
      name: 'description',
      content: 'وايت مياه الزعيم - خدمات توصيل مياه تحلية نقية على مدار 24 ساعة في جميع أنحاء جدة. صهاريج 7 طن، موتور رفع وليات طويلة. اتصل الآن: 0547293083'
    });
  }

  private setFavicon(iconUrl: string): void {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  // private updateVisitCount(): void {
  //   const logs = this.visitLoggerService.getAllVisitLogs();
  //   this.visitCount = logs.length;
  // }

  toggleContactIcons(): void {
    this.contactIconsHidden = !this.contactIconsHidden;
  }

  // downloadLogs(): void {
  //   this.visitLoggerService.downloadVisitLogs();
  // }

  // clearLogs(): void {
  //   this.visitLoggerService.clearLogs();
  //   this.updateVisitCount();
  // }
}
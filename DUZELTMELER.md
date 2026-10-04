# Lezzetai – Düzeltme ve Güvenlik Notları

## Kurulum
1. `npm install`
2. `.env.example` dosyasını `.env` olarak kopyalayın ve doldurun:
   - `DATABASE_URL`, `SESSION_SECRET` (en az 32 karakter), `ADMIN_EMAIL`, `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, `GOOGLE_MAPS_API_KEY`
3. `npm run db:push` (tabloları oluşturur)
4. `npm run dev`

## Yetkilendirme
- Giriş: imzalı, HttpOnly, SameSite=Lax oturum çerezi (7 gün). `localStorage`'daki kullanıcı ID'si artık yetki vermez.
- Şifreler scrypt ile hashlenir. Eski düz metin şifreler ilk başarılı girişte otomatik hashlenir.
- `/api/admin/*`, `/api/admin`, premium başvuru yönetimi, mesaj yanıtlama/onay, ödeme/premium aktivasyonu: yalnızca **admin**.
- İşletme portalı, mesaj, iyileştirme talebi, Google senkronu: yalnızca **kendi işletmesi** için işletmeci (veya admin).
- Yorum ve mekan ekleme: giriş gerekli; kullanıcı kimliği her zaman oturumdan alınır.
- Girişte kaba kuvvet sınırı, kayıtta ve Google aramasında hız sınırı, durum değiştiren isteklerde Origin kontrolü.
- Admin hesabı ilk açılışta `ADMIN_EMAIL` / `ADMIN_PASSWORD` ile oluşturulur. `ADMIN_PASSWORD` yoksa rastgele şifre üretilip sunucu konsoluna bir kez yazılır.

## Mevcut veritabanı notu
Eski kurulumda admin kaydı `info@emcoree.com` / düz metin şifreyle oluşmuştu. Seed yalnızca kayıt yoksa ekler;
o hesap hâlâ varsa ilk girişte şifresi hashlenir. **Eski şifreyi mutlaka değiştirin.**

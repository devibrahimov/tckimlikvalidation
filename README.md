# TC Kimlik Numarası Doğrulama Algoritması

Bu proje, TC Kimlik Numarası doğrulama işlemi için bir algoritma içerir. TC Kimlik Numaraları, Türkiye Cumhuriyeti vatandaşları için benzersiz 11 haneli numaralardır. Bu algoritma, belirli kurallar çerçevesinde TC Kimlik Numarası'nın geçerli olup olmadığını kontrol eder.

## Doğrulama Adımları

1. **Uzunluk ve Sayısallık Kontrolü**: TC Kimlik Numarası 11 haneli olmalıdır ve tamamen sayılardan oluşmalıdır.
2. **İlk Rakamın "0" Olmaması**: TC Kimlik Numarası "0" ile başlayamaz.
3. **9. Basamak Kontrolü**:
   - 1, 3, 5, 7, 9. basamaklardaki sayıların toplamının 7 katından, 2, 4, 6, 8. basamaklardaki sayıların toplamı çıkarılır.
   - Bu farkın 10'a bölümünden elde edilen kalan, TC Kimlik Numarası'nın 10. basamağındaki sayıya eşit olmalıdır.
4. **11. Basamak Kontrolü**:
   - İlk 10 basamağın toplamı 10'a bölündüğünde kalan, TC Kimlik Numarası'nın 11. basamağındaki sayıya eşit olmalıdır.

## Kullanım

Algoritmayı kullanmak için, `validateTCNumber` fonksiyonunu çağırmanız yeterlidir. 
Bu fonksiyon, geçerli bir TC Kimlik Numarası verildiğinde "TC Number is Correct", aksi halde "TC Number is Incorrect" döndürecektir.

 

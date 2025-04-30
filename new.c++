// ✅ شرح الكود خطوة خطوة:
// عندنا سلسلة: "hello world".
// عندنا الحروف المتحركة في متغير: "aeiou".
// بنمشي على كل حرف في السلسلة باستخدام for.
// نحول كل حرف إلى حرف صغير tolower(c) (عشان لو كان Capital ما يضيعش).
// نستخدم vowels.find(c) ➔ لو رجع مكان موجود (مش npos) ➔ يبقى الحرف متحرك.
// كل ما نلاقي حرف متحرك ➔ نزود العداد count++.
// في النهاية نطبع عدد الحروف المتحركة.




#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "hello world";
    string vowels = "aeiou";
    int count = 0;

    for (char c : str) {
        c = tolower(c); // نحول الحرف إلى صغير
        if (vowels.find(c) != string::npos) { // لو الحرف موجود في الحروف المتحركة
            count++;
        }
    }

    cout << "عدد الحروف المتحركة = " << count << endl;
    return 0;
}
 
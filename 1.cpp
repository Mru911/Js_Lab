// #include <iostream>
// #include <string>
using namespace std;

// void performAllOperation(string &binaryStr, int idx) {
//     if (idx >= binaryStr.size() - 1) {
//         return; 
//     }
//     binaryStr[idx] = (binaryStr[idx] == '1' || binaryStr[idx + 1] == '1') ? '1' : '0';
//     binaryStr.erase(idx + 1, 1);
// }

// int findMinOperations(string binaryStr) {
//     int operations = 0;
//     while (true) {
//         int idx = 0;
//         while (idx < binaryStr.size()) {
//             if (binaryStr[idx] == '1') {
//                 performAllOperation(binaryStr, idx);
//                 operations++;
//             } else {
//                 idx++;
//             }
//         }
//         if (binaryStr == "0") {
//             break;
//         }
//     }
//     return operations;
// }

// int main() {
//     string binaryStr = "101";
//     int minOperations = findMinOperations(binaryStr);
//     cout << "Minimum number of operations: " << minOperations << endl;
//     return 0;
// }

#include <iostream>
#include <string>

int minOperations(string binaryStr) {
  int operations = 0;
  
  while (binaryStr != string(binaryStr.size(), '0')) {
    int i = 0; 
    while (i < binaryStr.size()) {
      if (binaryStr[i] != '0') {
        if (binaryStr[i] == binaryStr[i+1]) {
          binaryStr[i] = '0';
          binaryStr[i+1] = '0';
        } else {
          binaryStr[i] = '1'; 
        }
        operations++;
      }
      i++;
    }
  }
  
  return operations;
}

int main() {
  string binaryStr = "101";
  int minOperations = minOperations(binaryStr);
  cout << "Minimum operations: " << minOperations << endl;
  
  return 0;
}

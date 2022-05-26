Trong dự án TrueProfit[^1] mình đã từng dịch chuyển giữa hai git server khác nhau, Ban đầu dùng Gitlab, sau đó đổi qua Bitbucket và về sau này đang chuyển đổi một số repo qua Github.

Nhưng mình đã không gặp nhiều khó khăn trong quá trình di chuyển này nhờ vào việc sử dụng custom domain.

Nếu sử dụng git URL của từng dịch vụ thì trong code sẽ import như sau:

```go
import "bitbucket.com/mongo-driver/bson/primitive"
```

Vậy lúc thay đổi qua một dịch vụ khác sẽ phải tìm và sửa lại code trong mọi file, rất bất tiện, nếu sai sót có thể dẫn tới nhiều lỗi khó debug. Trong một hệ thống serverless thì việc sót là dễ xảy ra.

Nhưng ngay từ đầu, mình đã sử dụng custom domain cho go [^2]



[^1]: [[Tại sao TrueProfit?]]
[^2]: [[Cài đặt custom domain cho go mod sử dụng nginx]]
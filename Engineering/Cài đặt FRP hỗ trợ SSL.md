A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.

Có khá nhiều feature, tốt hơn ngrok, localtunnel, nhưng ở đây chỉ bắt đầu với việc sử dụng frp để expose **localhost** dưới một **subdomain** bất kỳ, có **SSL**.

Cài đặt bao gồm 3 phần:

1.  Cài đặt domain
2.  Cài đặt frps trên server
3.  Cài đặt frpc trên máy local

## 1. CÀI ĐẶT DOMAIN

Tạo 2 record như sau, với value là IP của server mà bạn muốn dùng để cài đặt frp:

1. `frp.duocnguyen.dev.`
2. `*.frp.duocnguyen.dev.`

## 2. CÀI ĐẶT TRÊN SERVER
![[Cài đặt FRP#Cài đặt FRPS]]
### Cài nginx

![[Cài đặt nginx#^bc4a00]]

![[Cài ssl cho nginx]]

## 3. CÀI ĐẶT CLIENT
![[Cài đặt FRP#Cài đặt FRPC]]

## SỬ DỤNG

Chạy server của mình:

```bash
go run ./cmd/server/...
```

Chạy frp:

```bash
frpc -c ./frpc.ini
```

Truy cập vào trang:

```bash
https://fireass.frp.duocnguyen.dev/ping
```
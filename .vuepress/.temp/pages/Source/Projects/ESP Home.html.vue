<template><p>Một dự án nhỏ mà mình sử dụng thư viện <a href="https://esphome.io/">ESPHome</a> để tự động hóa một số thứ trong nhà.</p>
<p>Về hardware thì sử dụng ESP-32 và ESP-01 từ các công tắt tự động của <a href="https://sonoff.tech/">Sonoff</a></p>
<p>Xem thêm tại đây: <a href="https://github.com/nguyenvanduocit/esp-home">GitHub - nguyenvanduocit/esp-home: Config for all my esp-home devices</a></p>
<p>Project chứa config của các thiết bị trong nhà tôi:</p>
<ol>
<li>senses.yaml: Thiết bị đóng vai trò như các giác quan. Nó sẽ cảm nhận nhiệt độ, độ ẩm, sự hiện diện của các thành viên trong nhà.</li>
<li>catnanny.yaml: Thiết bị chăm sóc mèo có thể cho mèo ăn và uống, tương lai có thể chơi và tạo độ ấm cho chỗ ngủ của mèo.</li>
<li>wallfan.yaml: Thiết bị quản lý quạt treo tường sử dụng sonoff basic 1</li>
<li>matrixnotifier.yaml: Thiết bị notify một số thông báo quan trọng sử dụng đèn led</li>
</ol>
</template>

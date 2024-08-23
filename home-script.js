const siteURL = window.location.href;

       function openQRCode() {
            const qrCodeBox = document.getElementById('qrCodeBox');
            const shareIcon = document.getElementById('shareIcon');
            const successIcon = document.getElementById('successIcon');
            const qrshareIcon = document.getElementById('qrshareIcon');
            const qrsuccessIcon = document.getElementById('qrsuccessIcon');
            const clientName = document.getElementById('clientName');
            const qrCodeInfoPhoto = document.getElementById('qrCodeInfoPhoto');
            const qrCodeInfoTextBox = document.getElementById('qrCodeInfoTextBox');
            const siteQRCode = document.getElementById('siteQRCode');
            const qrCodeText = document.getElementById('qrCodeText');

            qrCodeBox.style.display = 'block'; // نمایش QR Code box
            setTimeout(() => {
                qrCodeBox.classList.add('open');
                shareIcon.classList.add('display');
                successIcon.classList.add('display');
                qrshareIcon.classList.add('display')
                qrsuccessIcon.classList.add('display')
                clientName.classList.add('position')
                qrCodeInfoPhoto.style.display = 'block'; // نمایش QR Code برای لینک سایت
                qrCodeInfoTextBox.style.display = 'block'; // نمایش متن QR Code
                siteQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=105x105&data=${encodeURIComponent(siteURL)}`;
                qrCodeText.textContent = siteURL; // تنظیم متن QR Code
            }, 10); // مدت زمان کوتاه برای تریگر کردن transition
        }

        function closeQRCode() {
            const qrCodeBox = document.getElementById('qrCodeBox');
            const shareIcon = document.getElementById('shareIcon');
            const successIcon = document.getElementById('successIcon');
            const qrshareIcon = document.getElementById('qrshareIcon');
            const qrsuccessIcon = document.getElementById('qrsuccessIcon');
            const clientName = document.getElementById('clientName');
            const qrCodeInfoPhoto = document.getElementById('qrCodeInfoPhoto');
            const qrCodeInfoTextBox = document.getElementById('qrCodeInfoTextBox');

            qrCodeBox.classList.remove('open');
            shareIcon.classList.remove('display');
            successIcon.classList.remove('display');
            qrshareIcon.classList.remove('display');
            qrsuccessIcon.classList.remove('display');
            clientName.classList.remove('position')
            qrCodeInfoPhoto.style.display = 'none'; // مخفی کردن QR Code برای لینک سایت
            qrCodeInfoTextBox.style.display = 'none'; // مخفی کردن متن QR Code
            setTimeout(() => {
                qrCodeBox.style.display = 'none'; // مخفی کردن QR Code box بعد از انیمیشن
            }, 3000); // مدت زمان انیمیشن
        }

        function copyQRCode() {
            // ایجاد یک عنصر موقت برای کپی کردن متن
            const textArea = document.createElement('textarea');
            textArea.value = siteURL; // لینک سایت به عنوان متن کپی شده
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            alert('لینک کپی شد: ' + siteURL); // پیغام تایید
        }
        function changeShareIcon() {
            const changeshareIcon = document.getElementById('changeShareIcon');
            changeshareIcon.classList.add('secondary-icon'); // اضافه کردن کلاس برای آیکون ثانویه
        }

        // تابع برای برگرداندن آیکون به حالت اولیه
        function revertShareIcon() {
            const shareIcon = document.getElementById('shareIcon');
            shareIcon.classList.remove('secondary-icon'); // حذف کلاس آیکون ثانویه
        }
        //menu bar js
        function toggleDiv(divId, buttonElement) {
            const divs = document.querySelectorAll('.hidden-div');
            const buttons = document.querySelectorAll('.bar-button');
            const targetDiv = document.getElementById(divId);

            if (!targetDiv || !buttonElement) {
                console.error('Invalid divId or buttonElement');
                return;
            }

            if (targetDiv.classList.contains('visible')) {
                targetDiv.classList.remove('visible');
                // Remove the active-button and any specific active classes from the div inside the button
                const activeDiv = buttonElement.querySelector('div');
                if (activeDiv) {
                    activeDiv.classList.remove('active-button');
                    if (buttonElement.classList.contains('home-bar')) {
                        activeDiv.classList.remove('active-button-home');
                    } else if (buttonElement.classList.contains('game-bar')) {
                        activeDiv.classList.remove('active-button-game');
                    } else if (buttonElement.classList.contains('alert-bar')) {
                        activeDiv.classList.remove('active-button-alert');
                    } else if (buttonElement.classList.contains('account-bar')) {
                        activeDiv.classList.remove('active-button-account');
                    }
                }
            } else {
                // Remove the visible class from all divs and active-button from all button divs
                divs.forEach((div, index) => {
                    div.classList.remove('visible');
                    if (index < buttons.length) {
                        const buttonDiv = buttons[index].querySelector('div');
                        if (buttonDiv) {
                            buttonDiv.classList.remove('active-button');
                            buttonDiv.classList.remove('active-button-home');
                            buttonDiv.classList.remove('active-button-game');
                            buttonDiv.classList.remove('active-button-alert');
                            buttonDiv.classList.remove('active-button-account');
                        }
                    }
                });
                targetDiv.classList.add('visible');
                // Add the active-button class to the div inside the clicked button
                const targetDivInButton = buttonElement.querySelector('div');
                if (targetDivInButton) {
                    targetDivInButton.classList.add('active-button');
                    if (buttonElement.classList.contains('home-bar')) {
                        targetDivInButton.classList.add('active-button-home');
                    } else if (buttonElement.classList.contains('game-bar')) {
                        targetDivInButton.classList.add('active-button-game');
                    } else if (buttonElement.classList.contains('alert-bar')) {
                        targetDivInButton.classList.add('active-button-alert');
                    } else if (buttonElement.classList.contains('account-bar')) {
                        targetDivInButton.classList.add('active-button-account');
                    }
                }
            }
        }

        // Function to activate the default button and div
        function activateDefault() {
            const defaultButton = document.querySelector('.home-bar');
            if (defaultButton) {
                toggleDiv('div0', defaultButton);
            }
        }

        // Call the activateDefault function when the page loads
        window.onload = activateDefault;

        // copy one config 
        document.addEventListener('DOMContentLoaded', function () {
    // Select all the VPN config boxes
    const vpnConfigBoxes = document.querySelectorAll('.config-box-vpn');

    vpnConfigBoxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            // Get the value of the x-data attribute
            let xDataValue = box.getAttribute('x-data');
            if (xDataValue) {
                // Process the x-data value
                let processedXData = xDataValue
                    .replace(/False/g, '') 
                    .replace(/{link: '/g, '')
                    .replace(/'}/g, '');

                // Create a temporary textarea to hold the text to be copied
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = processedXData;
                document.body.appendChild(tempTextArea);

                // Select the text in the textarea
                tempTextArea.select();
                tempTextArea.setSelectionRange(0, 99999); // For mobile devices

                // Copy the text to the clipboard
                document.execCommand('copy');

                // Remove the temporary textarea
                document.body.removeChild(tempTextArea);

                // Provide feedback to the user
                alert('کانفیگ کپی شد');
            }
        });
    });
});



        //copy all config 
        const copyButton = document.querySelector('.config-box-copy');
copyButton.addEventListener('click', function () {
  // جستجوی تمام div های با کلاس config-box-vpn
  const vpnBoxElements = document.querySelectorAll('.config-box-vpn');
  let allXData = '';

  vpnBoxElements.forEach((element, index) => {
    // استخراج مقدار x-data از هر div
    const xData = element.getAttribute('x-data');
    
    // پردازش داده‌ها برای حذف کلمات و کاراکترهای خاص
    let processedXData = xData
      .replace(/False/g, '') 
      .replace(/{link: '/g, '')
      .replace(/'}/g, '')
      

    allXData += processedXData + (index < vpnBoxElements.length - 1 ? '\n' : '');
  });

  // ایجاد یک textarea موقتی برای کپی کردن داده‌ها
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = allXData;
  document.body.appendChild(tempTextArea);

  // انتخاب و کپی کردن متن از textarea
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand('copy');

  // حذف textarea موقتی از DOM
  document.body.removeChild(tempTextArea);

  // نمایش پیام تکمیل
  alert('تمام کانفیگ ها کپی شدن');
});
        //share site
        document.addEventListener('DOMContentLoaded', function() {
            const shareIcon = document.querySelector('.share-icon');

            shareIcon.addEventListener('click', function() {
                if (navigator.share) {
                    navigator.share({
                        title: 'عنوان سایت',
                        text: 'متن اشتراک‌گذاری',
                        url: window.location.href,
                    })
                    .then(() => console.log('اشتراک‌گذاری موفقیت‌آمیز بود'))
                    .catch(error => console.log('خطا در اشتراک‌گذاری:', error));
                } else {
                    alert('دستگاه شما از اشتراک‌گذاری پشتیبانی نمی‌کند.');
                }
            });
        });


  // ابتدا مقدار متن را از div با کلاس vpn-copy دریافت کنید
  const vpnCopyText = document.querySelector('.vpn-copy').innerText;
  
  // سپس QR Code را با استفاده از کتابخانه qrcode تولید کنید
  QRCode.toDataURL(vpnCopyText, { errorCorrectionLevel: 'H' }, function (err, url) {
    if (err) {
      console.error(err);
      return;
    }

    // URL تولید شده را به تصویر درون div qr-code-info-photo اضافه کنید
    const imgElement = document.getElementById('siteQRCode');
    imgElement.src = url;
  });

        //subscribtion link copy 
        function copyLink() {
            const link = window.location.href;
            navigator.clipboard.writeText(link).then(() => {
                alert('لینک کپی شد!');
            }).catch(err => {
                alert('خطا در کپی کردن لینک: ' + err);
            });
        }

document.addEventListener("DOMContentLoaded", function () {
  const statusBox = document.getElementById("status-box");

  // فرض کنید که وضعیت کاربر را از جایی دریافت می‌کنیم
  const userStatus = "active"; // به طور مثال "active"، "limited"، "expired" یا "disabled"

  // این تابع ترجمه را شبیه‌سازی می‌کند
  function translateStatus(status) {
      const translations = {
          active: "فعال",
          limited: "محدود",
          expired: "منقضی شده",
          disabled: "غیرفعال"
      };
      return translations[status] || "نامشخص";
  }

  // تابعی برای تنظیم کلاس و متن براساس وضعیت
  function updateStatusBox(status) {
      const statusText = translateStatus(status);
      statusBox.textContent = statusText;

      // حذف کلاس‌های قبلی
      statusBox.classList.remove('bg-green', 'bg-red', 'bg-orange', 'bg-gray');

      // اضافه کردن کلاس جدید براساس وضعیت
      if (status === 'active') {
          statusBox.classList.add('bg-green');
      } else if (status === 'limited') {
          statusBox.classList.add('bg-red');
      } else if (status === 'expired') {
          statusBox.classList.add('bg-orange');
      } else {
          statusBox.classList.add('bg-gray');
      }
  }

  // به روز رسانی status-box
  updateStatusBox(userStatus);
});
function getRemark(link) {
    try {
        let remark = '';
        let removedContent = '';
        let firstPart = '';
        let secondPart = '';

        if (link.startsWith("http")) {
            remark = AlpineI18n.t("subscription");
        } else if (link.includes("vmess://")) {
            const base64Part = link.replace("vmess://", "");
            const decodedPart = atob(base64Part);
            const config = JSON.parse(decodedPart);
            remark = config.ps;
        } else {
            const fragment = link.split("#")[1];
            remark = decodeURIComponent(fragment || "");
        }

        // استخراج محتوای داخل براکت‌ها
        const matches = remark.match(/\[.*?\]/g);
        if (matches) {
            removedContent = matches.map(match => match.replace(/[\[\]]/g, '')).join(', ');
            // حذف براکت‌ها از متن اصلی
            remark = remark.replace(/\[.*?\]/g, '').trim();

            // تقسیم محتوای داخل براکت بر اساس کاراکتر '-'
            if (removedContent.includes('-')) {
                const parts = removedContent.split('-');
                firstPart = parts[0].trim();  // بخش اول قبل از '-'
                secondPart = parts[1].trim(); // بخش دوم بعد از '-'
            } else {
                firstPart = removedContent;  // اگر '-' وجود نداشته باشد، کل removedContent در firstPart ذخیره می‌شود
            }
        }

        return { vpnType: remark, firstPart, secondPart };
    } catch (e) {
        console.error("Error parsing link:", e);
        return { vpnType: "Invalid link", firstPart: "", secondPart: "" };
    }
}

  document.addEventListener("DOMContentLoaded", function() {
      const configsSection = document.getElementById('configs_section');
      const configBoxes = configsSection.getElementsByClassName('config-box-vpn');
      
      if (configBoxes.length > 8) {
          configsSection.style.overflowY = 'auto'; // فعال کردن اسکرول
      } else {
          configsSection.style.overflowY = 'hidden'; // غیر فعال کردن اسکرول
      }
  });
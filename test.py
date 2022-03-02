import pytesseract
from PIL import Image
import urllib.request
import cv2

pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files (x86)/Tesseract-OCR/tesseract.exe'
while True:
    urllib.request.urlretrieve("https://assota.dwhs.tn.edu.tw/scoreSch/ZValidCode.aspx",
    "C:/Users/whes1015/Downloads/test.png")
    #image = cv2.imread('C:/Users/whes1015/Downloads/test.png')
   # image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    #cv2.imshow('C:/Users/whes1015/Downloads/test.png', image)
    image = Image.open("C:/Users/whes1015/Downloads/test.png")
    text = pytesseract.image_to_string(image)
    print(text)

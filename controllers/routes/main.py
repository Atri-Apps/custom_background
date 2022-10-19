import os

from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
from atri_utils.uploaded_files import *
from rembg import remove
import cv2
import numpy as np
from PIL import Image
import io


def change_backgound(at, back):
    if at.Image17.custom.src != '/app-assets/istockphoto-1313110704-612x612.jpeg':
        if os.path.exists('your_file.jpeg'):
            input_img = Image.open('your_file.jpeg').resize((600, 600))
        else:
            input_img = Image.open('assets/' + at.Image17.custom.src.split('/')[-1]).resize((600,600))
        output = remove(input_img)
        output.show()
        if type(back) == str:
            back = Image.open('assets/' + back.split('/')[-1]).resize((600,600))
        elif type(back) == bytes:
            back = Image.fromarray(np.uint8(cv2.cvtColor(parse_uploaded_file(back), cv2.COLOR_RGB2BGR))).resize((600,600))
        back.paste(output, (0, 0), mask=output)
        back = cv2.cvtColor(np.asarray(back), cv2.COLOR_RGB2BGR)
        cv2.imwrite('back.jpeg', back)
        at.Image2.custom.src = create_media_response('back.jpeg', mime_type='image/png')
        os.remove('back.jpeg')
    pass

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.Background.styles.display = 'none'
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    at.Background.styles.display = 'none'
    at.Image.styles.display = 'flex'
    # print(at.Image17.custom.src)
    if os.path.exists('your_file.jpeg'):
        os.remove('your_file.jpeg')
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    #Image8 -- bg
    if at.Button2.onClick:
        if at.Image.styles.display == 'none':
            at.Background.styles.display = 'none'
            at.Image.styles.display = 'flex'
        at.Button2.styles.color = '#000000'
        at.Button3.styles.color = '#969696'
    #Image1 -- input
    if at.Button3.onClick:
        if at.Background.styles.display == 'none':
            at.Image.styles.display = 'none'
            at.Background.styles.display = 'flex'
        at.Button3.styles.color = '#000000'
        at.Button2.styles.color = '#969696'

    if at.Upload1.onChange:
        if at.Upload1.io.files != None:
            file = at.Upload1.io.files[0]
            bg_bytes = file.file.read()
            at.Image12.custom.src = create_media_response(bg_bytes, mime_type=file.content_type)
            change_backgound(at, bg_bytes)
    if at.Image4.onClick:
        at.Image12.custom.src = at.Image4.custom.src
        change_backgound(at, at.Image4.custom.src)
    if at.Image3.onClick:
        at.Image12.custom.src = at.Image3.custom.src
        change_backgound(at, at.Image3.custom.src)
    if at.Image5.onClick:
        at.Image12.custom.src = at.Image5.custom.src
        change_backgound(at, at.Image5.custom.src)
    if at.Image6.onClick:
        at.Image12.custom.src = at.Image6.custom.src
        change_backgound(at, at.Image6.custom.src)

    if at.Upload2.onChange:
        if at.Upload2.io.files != None:
            file = at.Upload2.io.files[0]
            file_bytes = file.file.read()
            at.Image17.custom.src = create_media_response(file_bytes, mime_type=file.content_type)
            at.Image2.custom.src = at.Image17.custom.src
            cv2.imwrite('your_file.jpeg', parse_uploaded_file(file_bytes))


    if at.Image15.onClick:
        at.Image17.custom.src = at.Image15.custom.src
        at.Image2.custom.src = at.Image17.custom.src
    if at.Image16.onClick:
        at.Image17.custom.src = at.Image16.custom.src
        at.Image2.custom.src = at.Image17.custom.src
    if at.Image14.onClick:
        at.Image17.custom.src = at.Image14.custom.src
        at.Image2.custom.src = at.Image17.custom.src
    if at.Image13.onClick:
        at.Image17.custom.src = at.Image13.custom.src
        at.Image2.custom.src = at.Image17.custom.src




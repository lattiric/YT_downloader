from pytube import YouTube
import subprocess

def Download(link):
    # ytObj = YouTube(link)
    # ytObj = ytObj.streams.get_highest_resolution()
    try:
        # ytObj.download()
        subprocess.run(['youtube-dl', link])
        print("Download should be completed")
    except Exception as e:
        print(f"Error downloading video: {e}")

link = input("Enter the video url here: ")
Download(link)
import pandas as pd

def row_to_link(row):
    return f"<li><a href='assets/papers/paper_{row['id']}.pdf'>{row['authors']} - {row['title']}</a></li>"

def row_to_csv_link(row):
    return f"{row['authors']},{row['title']},https://ieee-cog.org/2021/assets/papers/paper_{row['id']}"

index = pd.read_csv("index.csv")

links = index.apply(row_to_link, axis=1)

print("<ul>")
links.apply(print)
print("</ul>")
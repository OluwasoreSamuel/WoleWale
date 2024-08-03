from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/about_us')
def login():
    return render_template("about.html")

@auth.route('/blog')
def blog():
    return render_template('blog.html')

@auth.route('/contact')
def contact():
    return render_template('contact.html')
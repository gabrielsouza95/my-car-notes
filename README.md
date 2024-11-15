# my-car-notes

I this repo, I will develop a simple app to record all basic car operations (gas refueling, oil changes, preventative maintenance, corrective maintenance, etc) and the information associated to it (date, car's km on that note)

## Technologies used

In this project, I will use Django as the back-end and how to store the data on S3, but as I don't have the free tier anymore, I will teach how to but will end using a free alternative to it.
I will probably use a simple react front-end, just because.

## Keeping it real

For now, I will make it basically as a todo list, but will grow over that.

## How to Run it

Depending on your system, you might face different paths to follow.

### OS tools

* In my case, I have a Win10 running the project inside the [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install).

  * If you hate yourself too and is doing that too, you might think that your python ,npm/yarn and even some commands in your shell are broken, but you just need to install [VCXSRV](https://sourceforge.net/projects/vcxsrv/) (Yes, it's legit. No, probably that's not a virus. Why? The linux inside Windows is running in web components and, by default, doesn't have a output for it's OS, so some commands freeze as the Linux Kernel can't rsolve where to send stuff)
* If you have a Linux, you only need, at least,

  * [Node.Js](https://github.com/nvm-sh/nvm) (I suggest installing it through NVM, your future self will thank me, believe me),
  * [Pipenv](https://pipenv.pypa.io/en/latest/)
* And that's what runs in your OS outside any package manager.

### Frameworks and Libraries

In this project, as a challange for myself, I'm using:

* Back-End
  * Django
* Front-End
  * React

So, now, as you are using a tool to deal with the packages for both Python and Node.Js environments, you will now use them to get started.

### Running stuff

---

##### **Back-End**

Now, I will use bash commands to guide you, but you can use any scripting language you want, you just need to search for the command in the languange you want to use.

Chose where you will install you project:

`$ cd /the/path/to/the/folder/you/want`

`/the/path/to/the/folder/you/want$ mkdir the_projects_name_you_want`

`/the/path/to/the/folder/you/want$ cd the_projects_name_you_want`

If you have cloned all the project files to `/the/path/to/the/folder/you/want/the_projects_name_you_want/ `

now you can run:

`/the/path/to/the/folder/you/want/the_projects_name_you_want$ pipenv install `

If everything goes ok, now you have everything (from the Python side) to run it.

`/the/path/to/the/folder/you/want/the_projects_name_you_want$ pipenv shell`

Now every command you type and run, will be running inside the virtual environment of the Pipenv.

You can check your Django version with:

`(the_projects_name_you_want ) /the/path/to/the/folder/you/want/the_projects_name_you_want$ python -m django --version`

Now, as the project is already created, you can run it with

`(the_projects_name_you_want ) /the/path/to/the/folder/you/want/the_projects_name_you_want$ cd backend_site `

`(the_projects_name_you_want ) /the/path/to/the/folder/you/want/the_projects_name_you_want/backend_site$ python manage.py runserver`

If everything goes ok, you will problably see

```bash
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
September 12, 2024 - 00:42:03
Django version 4.2.16, using settings 'backend.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

and for the Back-End, we are done, for now.

##### Front-End

Now, with the Back-End running, we can run the Front-End.

I use yarn, but you can do the same using the npm, that will be installed inside you nvm.

Just to be sure everything will be fine, you can start by

`/the/path/to/the/folder/you/want/the_projects_name_you_want/frontend_site$ yarn `

Then

`/the/path/to/the/folder/you/want/the_projects_name_you_want/frontend_site$ yarn build `

and now

`/the/path/to/the/folder/you/want/the_projects_name_you_want/frontend_site$ yarn dev`

And there we have it, the project, by this point, should be ruiing in your `http://localhost:5173/`

You can access it directly on the Django interface by `http://localhost:8000/api/carnotes/`

## Using S3 as Storage

**Warning:** in the following, I will guide you how to do it, but as I don't have the free tier anymore, I can't tell if it's working or not.

You can check the following steps on the [Django documentation](https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html) but bear with me and lets move.

First, navigate to the root folder of the project, where the Pipfile is and run

`pipenv install django-storages[s3]`

After that, on the `setting.py` file, you will add

```
STORAGES = {
    "default": {
        "BACKEND": "storages.backends.s3.S3Storage",
        "OPTIONS": {
    
        },
    },
}
```

then, on the root of the project, you add a `.env` file with

```
AWS_S3_SESSION_PROFILE=yourSessionProfileGoesHere
AWS_ACCESS_KEY_ID=yourAccessKeyIdGoesHere
AWS_SECRET_ACCESS_KEY=youSecretAccessKeyGoesHere
AWS_SECURITY_TOKEN=youSecurityTokenGoesHere
AWS_STORAGE_BUCKET_NAME=youBucketNameGoesHere
AWS_DEFAULT_REGION=the-regions-goes-here-1
```

Also, if you don't have setup you IAM Policy yet ~~(dude, do you even AWS?)~~ you want to have one that looks like this

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObjectAcl",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Principal": {
                "AWS": "arn:aws:iam::example-AWS-account-ID:user/youUserNameGoesHere"
            },
            "Resource": [
                "arn:aws:s3:::youBucketNameGoesHere/*",
                "arn:aws:s3:::youBucketNameGoesHere"
            ]
        }
    ]
}
```

## Using a free cloud storage as Storage (wierdly put, but couldn't think otherwise)

For those of you that are broken ~~as shit~~ like me, there is still hope.

There is a free alternative to use a cloud storage and it's name is [Cloudinary](https://cloudinary.com/).

It seems to be supported and you can install it via [Pypi](https://pypi.org/project/django-cloudinary-storage/) using the pipenv, of course.

[Here](https://www.youtube.com/watch?v=JV_GoKqj1mg&ab_channel=BasuDevAdhikari), Basu Dev Adhikari explains to us how to do it. ~~(you really thought you could escape the Indians tutorials after leaving college? HAHAHAHA But seriously, those guys help all of us a lot and I can only thank the mere existance of these guys and, for sure, you must know what to ask to the internet to find those gems of knowledge)~~

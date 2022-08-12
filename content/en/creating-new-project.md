---
updatedAt: 1660317217925
createdAt: 1650384153541
slug: "creating-new-project"
description: ""
title: "Creating new project"
ID: "d9b6226e-7f05-4cd5-99e6-31653ef600c3"
category: "Getting Started"
position: "3"

---

<iframe style="aspect-ratio:16 / 9; width:100%" src="https://www.youtube.com/embed/hdpRGzn1GMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Start a new project

Go to your [Contentrain project page](https://app.contentrain.io/welcome), and click on **Start a new project**. 

![Dashboard](/images/dashboard.png)

And start creating your first project.

![Dashboard](/images/create-project.png)

- **Name**: Project name should be **unique*** and **slugify** like that: `my-awesome-project`
- **Project Details**: Write your project description.

<alert type="info">

Project names are should be unique globally. This means, that if the project name is already taken, you should choose another name.

</alert>

### Select a Git provider

You can select **GitHub** or **GitLab** for your repository.

<alert type="warning">

GitLab provider will be available coming soon.

</alert>


#### Uploading project logo 

You can set a logo for each project. You can upload **JPG**, **PNG**, or **GIF** image formats.

![logo-upload](/images/logo-upload.png)

#### GitHub Provider 

![GitHub](/images/github-modal.png)

Using GitHub's provider, you should have to set up some permission for your account. 

**Permissions:**

- **Read** access to metadata
- **Read** and **write** access to administration and code



![github-permissions](/images/github-permissions.png)


### Continuing with starters

You can select ready-to-use **JAMstack** starters like **Next.js**, **Gatsby**, and **NuxtJs**. 

<alert type="info">
When you select any starter, Contentrain creates a repository for you from your starter project in your Github account.
You can only proceed with the selected starter repository. Don't forget to grant permissions to this repo via Contentrain Github APP.
</alert>


![Starter Input](/images/starter-input.png)

You can see all our starters and get more information [here.](https://contentrain-doc.web.app/starters)

---

#### Do you want more starters?

<alert type="info">

If you want additional starter JAMStack frameworks, you can let us know on [Discord.](https://discord.com/invite/4db2PjWYtG) 

</alert>

## Setup your project

When you click **Create**, you will be able to connect with your Git repository and Contentrain. 

### Choose your repository

So, you can choose any repository you want and click on **Next**

![Dashboard](/images/setup.png)

And you can configure your branch settings. You can choose your master/main branch or stage branch.

- **Path**: The main directory where the Contentrain JSON database is created.
- **Static path**: Your media assets directory like `/static`

![Branch](/images/branch-settings.png)

Click to **Submit** and begin to set up **Roles**

## Roles

Here, you can create your user seats and choose the roles and permissions of your project.

![Roles](/images/roles.png)

The `Admin` is the default role.

## Collections (Collection Models)
In Collections, you can create your own collection models, import your previously saved collection models or use shared collection models.


![Collections](/images/collections.png)


### Creating a new collection

To create a new collection, Click to **Create a new collection** button.

![create-collection](/images/create-collection.png)

- **Collection Name**: Your collection name should be like `my-blog`
- **Select Permission**: Choose the permissions to role about this collection.
- **i18n**: You can add any language for your i18n projects.

See details about i18(Localization) [here. ](/i18n)

#### Markdown Templates 
 
You can also convert your collection to markdown or MDX syntax instead of JSON. When you select **Set this collection Markdown Frontmatter Template**, and by setting the markdown path, you can use this collection whit the markdown editor. 

![markdown-format](/images/markdown-format.png)

For using MDX syntax on your markdown files, you can check the **Use MDX format this template.**
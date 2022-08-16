---
updatedAt: 1660626362582
createdAt: 1650384153541
slug: "creating-new-project"
description: ""
title: "Creating new project"
ID: "d9b6226e-7f05-4cd5-99e6-31653ef600c3"
category: "Getting Started"
position: "3"

---

<iframe style="aspect-ratio:16 / 9; width:100%;" src="https://www.youtube.com/embed/hdpRGzn1GMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Start a new project

Go to your [Contentrain project page](https://app.contentrain.io/welcome), and click on **Start a new project**. 

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/9010c4f7-8063-4239-84e6-477b008edb00/public)

And start creating your first project.

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/ce662f05-7bf5-4067-0050-d6579e800500/public)

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


![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/6c2b96f7-30b2-4993-2c86-58af696ed900/public)

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

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/13b1e2c6-977e-4f41-b9a0-c5f071acdb00/public)

And you can configure your branch settings. You can choose your master/main branch or stage branch.

- **Path**: The main directory where the Contentrain JSON database is created.
- **Static path**: Your media assets directory like `/static`

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/ecd529a8-a28d-428d-1a40-2a521e2d5600/public)

Click to **Submit** and begin to set up **Roles**

## Roles

Here, you can create your user seats and choose the roles and permissions of your project.

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/9832040f-2fde-4c9f-3a00-d44fb94d2700/public)

The `Admin` is the default role.

## Collections (Collection Models)
In Collections, you can create your own collection models, import your previously saved collection models or use shared collection models.


![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/5ce35c39-2de4-428b-6e3d-62961ded2100/public)


### Creating a new collection

To create a new collection, Click to **Create a new collection** button.

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/59104a50-353c-4609-1a20-a209ec0cac00/public)

- **Collection Name**: Your collection name should be like `my-blog`
- **Select Permission**: Choose the permissions to role about this collection.
- **i18n**: You can add any language for your i18n projects.

See details about i18(Localization) [here. ](/i18n)

#### Markdown Templates 
 
You can also convert your collection to markdown or MDX syntax instead of JSON. When you select **Set this collection Markdown Frontmatter Template**, and by setting the markdown path, you can use this collection whit the markdown editor. 

![](https://imagedelivery.net/yx26LyQGM_miwnGU8RnEaw/2ed893b1-b271-4e85-8945-790a560dcf00/public)

For using MDX syntax on your markdown files, you can check the **Use MDX format this template.**
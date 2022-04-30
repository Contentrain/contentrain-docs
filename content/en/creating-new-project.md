---
updatedAt: 1651306715106
createdAt: 1650384153541
slug: "creating-new-project"
description: ""
title: "Creating new project"
ID: "d9b6226e-7f05-4cd5-99e6-31653ef600c3"
category: "Getting Started"
position: "3"

---

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

When you select any starter, you can only proceed with the selected starter repository.

</alert>


![Starter Input](/images/starter-input.png)

#### Using Next.js Starter

[Next.js](https://nextjs.org/) is a minimalistic framework for server-rendered React applications as well as statically exported React apps.

**Source:** [Contentrain + Next.js Blog Starter](https://github.com/Contentrain/nextjs-blog-starter)


#### Using Gatsby Starter

[Gatsby](https://www.gatsbyjs.com/) is a fast and flexible framework that makes building websites with any CMS, API, or database fun again.


**Source:** [Contentrain + Gatsby Blog Starter ](https://github.com/Contentrain/gatsby-blog-starter)

#### Using Nuxtjs Starter

[Nuxtjs](https://nextjs.org/) is an easy way to export your Vue.js Web Application into a static website. 

**Source:** [Contentrain + Nuxtjs Blog Starter](https://github.com/Contentrain/nuxt-blog-starter)


#### Using Eleventy (11ty) Starter

<alert type="warning">

Eleventy (11ty) starters will be available coming soon.

</alert>

---

#### Do you want more starters?

<alert type="info">

If you want additional starter JAMStack frameworks, you can let us know on [Twitter.](https://twitter.com/intent/tweet?text=Hey%20@Contentrain_io%20%F0%9F%91%8B) 

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

Click to **Submit** and begin to set up **Roles and Permissions**

## Roles and Permissions

Here, you can create your user seats and choose the roles and permissions of your project.

![Roles](/images/roles.png)

The `Admin` is the default role.

## Collections
In Collections, you can create your own collections, and import your previously saved collections.

<alert type="warning">

Contentrain Collection Marketplace will be available coming soon.

</alert>

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

### Fields

In the **Fields modal**, you can add a new field to your collection.

![fields](/images/fields.png)

<alert type="info">

Don't forget to save each new fields you create.

</alert>

![Save Fields](/images/save-fields.png)



#### Field Types

Contentrain, will auto-generate new components for each field type on your database on Git.

**Example:**

When you select **date** as the field type, your component will adapt according to the date format.


| Type     | Description | Required |
| -------- | ----------- | -------- |
| String   | For any text-based types.             | optional |
| Array    | Nested array object types.            | optional |
| Boolean  | Return `true` of `false`            | optional |
| Number   | Return numbers like 37 or -9.25.             | optional |
| Relation | Connect your other content as an object.            | optional |


#### Relation Field Type

You can use **Relation** field type to connect your other content as an object.  

**Example:**

If you want to add multiple select relational contents as blog post tags or categories to your collection: 

Create a new **Tag** collection as an `array` type. 

![Tag Array](/images/tag-array.png)

Create a new **PostTags** field as a `relation` type on the same collection and choose your relation content ID's on modal.

![Tags Modal](/images/tags-modal.png)

And now, you can select your tags.

![Select Tags](/images/select-tags.png)


#### Field Components

| Type             | Description | Required |
| ---------------- | ----------- | -------- |
| Color            | Provide a user interface element that lets a user specify a color.            | optional |
| Date             | Represent a single moment in time in a platform-independent format. See date format and time zone conversions [here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_format_and_time_zone_conversions)            | optional |
| Duration         |             | optional |
| Email            | Email input fields.             | optional |
| Long Text        | Max **160** characters long texts.            | optional |
| Media            | Using for **image** or **video** assets.           | optional |
| Phone Number     | Phone number input fields.            | optional |
| Rich Text Editor | For **WYSIWYG** rich text editor. Also support **Markdown** syntax.            | optional |
| Single Line Text | Max **50** characters single line texts.            | optional |
| URL              | Linkable URL input fields.            | optional |

Add your fields and click on **Done**
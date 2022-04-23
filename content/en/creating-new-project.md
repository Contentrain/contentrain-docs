---
updatedAt: 1650384179623
createdAt: 1650384153541
slug: "creating-new-project"
description: ""
title: "Creating new project"
ID: "d9b6226e-7f05-4cd5-99e6-31653ef600c3"
category: "Getting Started"
position: "3"

---

## Start a new project

Go to your **Contentrain** dashboard, and click on **Start a new project**. 

![Dashboard](/images/dashboard.png)

And set up your first project. 

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

### Select a starter

You can select ready-to-use starters like **Next.js**, **Gatsby**, and **Nuxt Js**. 

Or you can select a manual project.

## Setup your project?

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
In Collections, you can create your own collections, load your previously saved collections or buy/sell a new collection from **Contentrain Collection Marketplace.**

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

#### Fields

In the **Fields modal**, you can add a new field to your collection.

![fields](/images/fields.png)

##### Field Types

| Type     | Description | Required |
| -------- | ----------- | -------- |
| String   |             | optional |
| Array    |             | optional |
| Boolean  |             | optional |
| Number   |             | optional |
| Relation |             | optional |

##### Field Components

| Type             | Description | Required |
| ---------------- | ----------- | -------- |
| Color            |             | optional |
| Date             |             | optional |
| Duration         |             | optional |
| Email            |             | optional |
| Long Text        |             | optional |
| Media            |             | optional |
| Phone Number     |             | optional |
| Rich Text Editor |             | optional |
| Single Line Text |             | optional |
| URL              |             | optional |

Add your fields and click on **Done**
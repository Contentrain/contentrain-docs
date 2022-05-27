---
updatedAt: 1653634258614
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

Contentrain will auto-generate new components for each field type on your database on Git.

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

It allows you to get time information in hour and minute (HH-MM /AM-PM) format from the user. It returns a string value.

#### Field Components

| Type             | Description | Required |
| ---------------- | ----------- | -------- |
| Color            | Provide a user interface element that lets a user specify a color as RGB / HSL / HEX formats. Returns `string`.            | optional |
| Checkbox            | Provide a user interface element that lets a user choose a checkbox. Returns `boolean`.             | optional |
| Count            | Data in digit format that can be updated with **+/- 1** Returns `number`.            | optional |
| Date             | Represent a single moment in time in a platform-independent format, like  **(2022-04-28 12:00) (YYYY-MM-DD HH-MM).** Returns `string`.   See date format and time zone conversions [here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_format_and_time_zone_conversions)             | optional |
| Duration         | It allows you to get time information in **hour and minute** (HH-MM /AM-PM) format from the user. Returns `string`.           | optional |
| Number         | Numerical format. Returns `number`.            | optional |
| Percent         | Numerical format as a percentage. Returns `number`.            | optional |
| Email            | Email input fields.             | optional |
| Long Text        | Multi-line input field. Returns `string`.           | optional |
| Media            | Using for **image** or **video** assets.           | optional |
| Phone Number     | Phone number input fields. Returns `string`.           | optional |
| Rating     | It allows you to receive data from the user with a selection in the range of 1-5. Returns `number`.           | optional |
| Rich Text Editor | For **WYSIWYG** rich text editor. Also support **Markdown** syntax.            | optional |
| Single Line Text | Single-line input field.  Returns `string`.               | optional |
| Switch | Checkbox as a toggle.  Returns `boolean`.               | optional |
| URL              | URL input fields.  Returns `boolean`.          | optional |

Add your fields and click on **Done**
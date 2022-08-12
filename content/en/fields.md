---
slug: "fields"
ID: "9c979f2b-9a54-4609-b12b-43454ee3ed1b"
title: "Fields"
description: ""
category: "Project Guides"
position: 6
createdAt: 1653634835719
updatedAt: 1660317363120

---
<iframe style="aspect-ratio:16 / 9; width:100%;" src="https://www.youtube.com/embed/awIMyCrf83Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

In the **Fields modal**, you can add a new field to your collection.

![fields](/images/fields.png)

<alert type="info">

Don't forget to save each new fields you create.

</alert>

![Save Fields](/images/save-fields.png)



### Field Types

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


### Relation Field Type

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

### Field Components

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
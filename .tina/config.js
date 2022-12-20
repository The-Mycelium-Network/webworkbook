
  import { defineConfig } from "tinacms";
  
  // Your hosting provider likely exposes this as an environment variable
  const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
  
  export default defineConfig({
    branch,
    clientId: null,   // Get this from tina.io
    token: null,      // Get this from tina.io
    build: {
      outputFolder: "admin",
      publicFolder: "public",
    },
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
    schema: {
      collections: [
        {
          name: "post",
          label: "Posts",
          path: "content/posts",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
      ],
    },
  });
  
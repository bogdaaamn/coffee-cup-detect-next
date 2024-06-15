This is an application that displays data saved from an object detection model using Edge Impulse on Raspberry Pi. The project is described in more detail at [coffee-cup-detect-runner](https://github.com/bogdaaamn/coffee-cup-detect-runner). The data is retrieved from Supabase.

## Supabase

To get data to the database, you need a Supabase project. It should be already configured following the [coffee-cup-detect-runner](https://github.com/bogdaaamn/coffee-cup-detect-runner) project. If you didn't do so, check out the project, or follow the following instructions.

You can head over to [database.new](https://database.new/) to create a new Supabase project. When your project is up and running, navigate to the project's [SQL Editor](https://supabase.com/dashboard/project/_/sql/new) and paste in the following snippet:

```
create table detections (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  created_at timestamp with time zone not null default current_timestamp,
  message text
);
```

This will create a `detections` table in which you can insert rows every time, for example, a coffee cup is detected.

Alternatively, you can manually navigate to your project's [Table Editor](https://supabase.com/dashboard/project/_/editor) and configure the table manually.

## Development

Create an `.env` file (see `.env.example`) and copy the Supabase credentials, [more details here](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

```
SUPABASE_URL=<SUPABASE_URL>
SUPABASE_ANON_KEY=<SUPABASE_ANON_KEY>
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- https://nextjs.org/docs - learn about Next.js features and API.
- https://nextjs.org/learn - an interactive Next.js tutorial.

To learn about the entire project, go to [coffee-cup-detect-runner](https://github.com/bogdaaamn/coffee-cup-detect-runner). To learn about Edge Impulse follow these resources:

- https://docs.edgeimpulse.com/docs/raspberry-pi-4
- https://docs.edgeimpulse.com/docs/tutorials/end-to-end-tutorials/object-detection/object-detection

To learn about Supabase, take a look at the following resources:

- https://supabase.com/docs/guides/database/overview
- https://supabase.com/docs/guides/realtime
- https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

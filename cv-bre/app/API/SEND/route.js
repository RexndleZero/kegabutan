//import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Adit <raihanaditya1506@gmail.com>",
      to: ["raihanhermawan85@gmail.com"],
      subject: "Test ting satu dua tiga suka kamuu!",
      react: <>
      <p> Email Body</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

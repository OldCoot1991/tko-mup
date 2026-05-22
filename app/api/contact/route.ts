import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    // Configure Yandex Mail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "mup.ekotehprom@yandex.ru",
        pass: process.env.SMTP_PASS || "",
      },
    });

    const mailOptions = {
      from: `"Сайт МУП Экотехпром" <${process.env.SMTP_USER || "mup.ekotehprom@yandex.ru"}>`,
      to: "mup.ekotehprom@yandex.ru",
      replyTo: email,
      subject: `[Обращение с сайта] ${type} от ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 8px;">
          <div style="background: #0a3d1f; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #2ecc71; margin: 0; font-size: 22px;">МУП «Экотехпром»</h1>
            <p style="color: #a7f3d0; margin: 8px 0 0; font-size: 14px;">Новое обращение с официального сайта</p>
          </div>
          <div style="background: #fff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; width: 40%;">Тип обращения</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">${type}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">ФИО</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;"><a href="mailto:${email}" style="color: #16a34a;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Телефон</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">${phone || "—"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #64748b; font-size: 13px; font-weight: 600; margin-bottom: 10px;">ТЕКСТ ОБРАЩЕНИЯ:</p>
              <div style="background: #f8f9fa; border-left: 3px solid #2ecc71; padding: 16px; border-radius: 4px; color: #334155; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
            <p style="margin-top: 24px; color: #94a3b8; font-size: 12px; text-align: center;">Обращение отправлено через официальный сайт МУП «Экотехпром»</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Ошибка отправки. Попробуйте позже или позвоните нам." },
      { status: 500 }
    );
  }
}

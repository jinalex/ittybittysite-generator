import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import lzma from "lzma";
import cors from "cors";

const corsMiddleware = cors({
  origin: "http://chat.openai.com",
  methods: ["OPTIONS", "POST"],
  allowedHeaders: ["Content-Type"],
});

const runMiddleware = (
  req: ExtendedNextRequest,
  res: NextApiResponse,
  fn: {
    (
      req: cors.CorsRequest,
      res: {
        statusCode?: number | undefined;
        setHeader(key: string, value: string): any;
        end(): any;
      },
      next: (err?: any) => any
    ): void;
  }
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

interface ExtendedNextRequest extends NextApiRequest {
  body: {
    content: string;
    title: string;
    description: string;
    favicon: string;
    image?: string;
  };
}

const createIttyBittySite = async (
  req: ExtendedNextRequest,
  res: NextApiResponse
) => {
  await runMiddleware(req, res, corsMiddleware);

  // Check if the request method is POST
  if (req.method === "POST") {
    try {
      const { content, title, description, favicon, image } = req.body;

      // Parse the content to handle escape sequences
      const parsedContent = JSON.parse(JSON.stringify({ content })).content;

      // Compress the content using LZMA compression
      const compressedContent = lzma.compress(parsedContent, 9);

      // Convert the compressed content to Base64
      const base64EncodedContent =
        Buffer.from(compressedContent).toString("base64");

      // Construct the HOST_METADATA part of the URL
      const hostMetadata = [
        title ? `${title.replace(/ /g, "-")}` : "",
        description ? `d/${description}` : "",
        image ? `i/${image}` : "",
        favicon ? `f/${favicon}` : "",
      ]
        .filter(Boolean)
        .join("/");

      // Create the Itty.bitty.site URL
      const ittyBittyUrl = `https://itty.bitty.site/${hostMetadata}/#/${base64EncodedContent}`;

      // Calculate the size of the generated URL in bytes
      const urlSizeInBytes = Buffer.byteLength(ittyBittyUrl, "utf8");

      // Return the generated URL and its size in bytes
      res
        .status(200)
        .json({ url: ittyBittyUrl, urlSizeInBytes, success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    // If the request method is not POST, return an error
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
};

export default createIttyBittySite;

import Document, { Html, Head, Main, NextScript } from "next/document";

// Custom document to apply dark mode classes directly to the body, to avoid white flashes
// on first load and when the system appearance changes
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

// components/FormattedList.tsx

import React from 'react';

// A simple parser to handle <b> and <ul><li> tags safely.
const parseText = (text: string) => {
  const parts = text.split(/<b>(.*?)<\/b>/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

export const FormattedList = ({ content }: { content: string }) => {
  const [intro, listHtml] = content.split(/<ul.*?>/);

  if (!listHtml) {
    return <p>{parseText(intro)}</p>;
  }

  const listItems = listHtml
    .replace(/<\/ul>/g, '')
    .split(/<li>(.*?)<\/li>/g)
    .filter(item => item.trim() !== '');

  return (
    <>
      <p className="mb-4">{parseText(intro)}</p>
      <ul className="list-disc space-y-1 pl-5 text-left">
        {listItems.map((item, index) => (
          <li key={index}>{parseText(item)}</li>
        ))}
      </ul>
    </>
  );
};

// --- HELPER COMPONENT ---
export const FormattedText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split('<br>').map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line
            .split(/<b>(.*?)<\/b>/g)
            .map((part, partIndex) =>
              partIndex % 2 === 1 ? (
                <strong key={partIndex}>{part}</strong>
              ) : (
                part
              )
            )}
        </React.Fragment>
      ))}
    </>
  );
};

const fs = require('fs');
const readline = require('readline');

async function extract() {
    const fileStream = fs.createReadStream('C:\\Users\\NHA\\.gemini\\antigravity\\brain\\c805c6c5-44e2-4f2d-9a25-c11110acd4c8\\.system_generated\\logs\\overview.txt');
    const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

    for await (const line of rl) {
        if (line.includes('FallDetectionPage.tsx')) {
            try {
                const data = JSON.parse(line);
                if (data.source === 'SYSTEM_INTERNAL' && data.tool_responses && data.tool_responses[0].name === 'view_file') {
                   const out = data.tool_responses[0].response.output;
                   if (out && out.includes('FallDetectionPage.tsx')) {
                       fs.writeFileSync('scratch.txt', out);
                   }
                }
            } catch(e) {}
        }
    }
}
extract();

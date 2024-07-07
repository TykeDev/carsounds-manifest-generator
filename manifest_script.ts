import { readdir } from "node:fs/promises";

const audioconfigs = await readdir("./audioconfig", { recursive: true });
const sfxs = await readdir("./sfx", { recursive: true, withFileTypes: true });

let manifestLines = [];
manifestLines.push(`fx_version 'adamant'\n`);
manifestLines.push(`game 'gta5'\n`);

let filesLines: string[] = [];
let data_fileLines: string[] = [];

audioconfigs.forEach((val) => {
    filesLines.push(`\t'audioconfig/${val}',`);
    if (val.includes('_game.dat')) {
        data_fileLines.push(`data_file 'AUDIO_GAMEDATA' 'audioconfig/${val.replace('151.rel', '')}'`);
    }
    else if (val.includes('_amp.dat')) {
        data_fileLines.push(`data_file 'AUDIO_SYNTHDATA' 'audioconfig/${val.replace('10.rel', '')}'`);
    }
    else if (val.includes('_sounds.dat')) {
        data_fileLines.push(`data_file 'AUDIO_SOUNDDATA' 'audioconfig/${val.replace('54.rel', '')}'`);
    }
});

sfxs.forEach((val) => {
    if (val.parentPath === 'sfx') {
        data_fileLines.push(`data_file 'AUDIO_WAVEPACK' 'sfx/${val.name}'`);
    }
    else if (val.parentPath.startsWith('sfx')) {
        filesLines.push(`\t'${val.parentPath.replaceAll('\\', '/')}/${val.name}',`);
    }
});

manifestLines.push(`files {\n`);
filesLines.forEach((data) => {
    manifestLines.push(data+'\n');
});
manifestLines.push(`}\n`);

data_fileLines.forEach((data) => {
    manifestLines.push(data+'\n');
});

Bun.write('./generated_fxmanifest.lua', manifestLines.join(''));
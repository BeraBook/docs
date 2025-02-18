import * as fs from 'fs'
import * as path from 'path'
import * as child_process from 'child_process'

const runCommand = (command: string, workdir: string) => {
  child_process.execSync(command, {
    cwd: workdir,
  })
}

const removeFileIfExists = (folderPath: string) => {
  if (!fs.existsSync(folderPath)) {
    return
  }
  const files = fs.readdirSync(folderPath)
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(folderPath, file)
      fs.unlinkSync(filePath)
      console.log(`remove file: ${filePath}`)
    }
  }
}

const copyFile = (src: string, dest: string) => {
  const files = fs.readdirSync(src)
  for (const file of files) {
    if (file.endsWith('.md')) {
      const sourceFilePath = path.join(src, file)
      const targetFilePath = path.join(dest, file)
      fs.copyFileSync(sourceFilePath, targetFilePath)
      console.log(`copy file from ${sourceFilePath} to ${targetFilePath}`)
    }
  }
}

const repos = ['v2-core']

const main = async () => {
  for (const repo of repos) {
    removeFileIfExists(`docs/developers/${repo}`)
    removeFileIfExists(`${repo}/docs`)
  }

  console.log('1. update git submodule')
  child_process.execSync('git submodule update --remote')

  for (const repo of repos) {
    console.log(`2. npm install in ${repo}`)
    runCommand('forge install && npm install --ignore-scripts', repo)
  }

  for (const repo of repos) {
    console.log(`3. generate docs from ${repo}`)
    runCommand('npx hardhat utils:gen-docs', repo)
  }

  for (const repo of repos) {
    console.log(`4. copy ${repo}/docs to docs/developers/${repo}`)
    copyFile(`${repo}/docs`, `docs/developers/${repo}`)
  }
}

main()
